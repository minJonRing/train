// 创建试卷
export const createPaper = (data) => {
  // 定义试卷集合
  const paper = [];
  // 正在作答试卷的已选择的答案
  const initAnswers = {};
  // 题目的类型
  const paperIndex = {};
  // 循环题目数据
  for (let el of data) {
    // examQuestionTypeResponse - 题目类型
    const {
      examQuestionTypeResponse: { type },
    } = el;
    // 生成试卷的题目大类，paperIndex对应类型的索引数据
    if (!paperIndex[type] && paperIndex[type] !== 0) {
      paperIndex[type] = paper.length;
      paper.push({
        value: type,
        label: {
          1: "判断题",
          2: "单选题",
          3: "多选题",
          4: "综合题",
        }[type],
        children: [],
      });
    }
  }
  // 生成关联问题
  const topic = createTopic(data, initAnswers);
  // 把试卷题目分类成 单选 多选等类型
  for (let i in topic) {
    const el = topic[i];
    const {
      examQuestionTypeResponse: { type },
    } = el;
    paper[paperIndex[type]].children.push(el);
  }
  // 给题目新增子题目id数组几个字段
  const initPaper = createChildIds(paper);
  // 题目枚举信息
  const initTopicEnum = createTopicEnum(initPaper);
  // 设置试卷
  return {
    initPaper,
    initAnswers,
    initTopicEnum,
  };
};

const createTopic = (data, initAnswers, no) => {
  return data.map((i, index) => {
    const { questionId, selected, content, subQuestionList } = i;
    if (!!selected && selected.length) {
      initAnswers[questionId] = selected;
    }
    // 题目编号
    const number = `${no ? no + "-" : ""}${index + 1}`;
    return {
      ...i,
      value: i.questionId,
      label: number + "：" + content,
      no: number,
      children: subQuestionList
        ? createTopic(subQuestionList, initAnswers, index + 1)
        : null,
    };
  });
};

// 生成各大题下 子题的id集合
const createChildIds = (data, _expanded = []) => {
  return data.map((el) => {
    const { children } = el;
    const _selected = [..._expanded, el.value + ""];
    return {
      ...el,
      questionIds: children ? returnChildIds(children) : null,
      _expanded,
      _selected,
      children: children ? createChildIds(children, _selected) : null,
    };
  });
};

// 返回该题目下子题的id集合
const returnChildIds = (data, ids = []) => {
  data.map(({ value, children }) => {
    if (children) {
      returnChildIds(children, ids);
    } else {
      ids.push(value);
    }
  });
  return ids;
};

// 题目枚举数据-用于切换题目
const createTopicEnum = (data) => {
  const list = flatPaper(data);
  const json = {};
  for (let i in list) {
    const el = list[i];
    const { questionId } = el;
    const prev = list[i - 1];
    const next = list[+i + 1];
    const obj = {
      ...el,
      prevId: prev ? prev.questionId : "",
      nextId: next ? next.questionId : "",
    };
    json[questionId] = obj;
  }
  return json;
};

// 试卷数据一维数组
const flatPaper = (child, list = []) => {
  for (let el of child) {
    const { children } = el;
    if (children) {
      flatPaper(children, list);
    } else {
      list.push(el);
    }
  }
  return list;
};
