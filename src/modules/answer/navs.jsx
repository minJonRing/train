import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { isEqual } from "lodash";
import TreeItem from "@mui/lab/TreeItem";
const Navs = ({
  read,
  paper,
  answer,
  setCurrentQuestion,
  selected = [],
  expanded = [],
  setDefaultExpanded,
}) => {
  console.log(1);
  // 返回当前大模块已经作答的题目
  const amount = (data) => {
    const keys = Object.keys(answer).map((key) => +key);
    return data.filter((id) => keys.includes(id)).length;
  };
  // 返回当前题目作答是否正确
  const right = (data) => {
    const { answers, selected } = data;
    const _a = (answers || []).sort((a, b) => a - b);
    const _s = (selected || []).sort((a, b) => a - b);
    return isEqual(_a, _s);
  };
  // 生成菜单数据
  const create = (data) => {
    return data.map((el) => (
      <TreeItem
        nodeId={el.value + ""}
        label={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: "3px 0",
            }}
          >
            {/* 题目 */}
            <Typography>{el.no ? `第${el.no}题` : el.label}</Typography>
            {/* 是否作答 */}
            {read ? null : el.questionIds ? (
              <Chip
                label={
                  "已作答：" +
                  amount(el.questionIds) +
                  "/" +
                  el.questionIds.length
                }
                variant="outlined"
                color="success"
                size="small"
              />
            ) : null}
            {/* 现已题目是否回答正确 */}
            {answer[el.questionId] ? (
              read ? (
                <Chip
                  label={right(el) ? "正确" : "错误"}
                  variant="outlined"
                  color={right(el) ? "success" : "error"}
                  size="small"
                />
              ) : (
                <Chip
                  label={"已作答"}
                  variant="outlined"
                  color="primary"
                  size="small"
                />
              )
            ) : null}
          </Box>
        }
        sx={{
          "& .MuiTreeItem-label": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        key={el.value}
      >
        {el.children ? create(el.children) : null}
      </TreeItem>
    ));
  };

  const onNodeToggle = (e, nodeId) => {
    console.log(e, nodeId);
    setDefaultExpanded && setDefaultExpanded(nodeId);
  };
  return (
    <Box sx={{ height: read ? "calc(100% - 72px)" : "calc(100% - 120px)" }}>
      <Card variant="outlined" sx={{ height: "100%", overflow: "auto" }}>
        <CardContent>
          <TreeView
            id="value"
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={setCurrentQuestion}
            selected={selected}
            expanded={expanded}
            onNodeToggle={onNodeToggle}
          >
            {create(paper)}
          </TreeView>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Navs;
