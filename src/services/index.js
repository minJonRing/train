import { ajax } from "request/index";
// login
export const adminUrl = (data) =>
  ajax({
    url: "/config/adminUrl",
    method: "get",
    data,
  });
export const userInfo = (data) =>
  ajax({
    url: "/user/me",
    method: "get",
    data,
  });
// user 用户信息
export const userBase = (data) =>
  ajax({
    url: "/user/detail",
    method: "get",
    data,
  });
// home
// 最近的一场考试
export const nextExam = (data) =>
  ajax({
    url: "/examStatistic/nextSchedule",
    method: "get",
    data,
  });
// 已报名的培训
export const signTrain = (data) =>
  ajax({
    url: `/learnStatistic/personnelCourse`,
    method: "get",
  });
// 已报名的考试
export const signExam = (data) =>
  ajax({
    url: `/examStatistic/examScheduleCount`,
    method: "get",
  });
// train
// 课程
export const train = (data) =>
  ajax({
    url: "/courseSign/personnel",
    method: "get",
    data,
  });

export const trainDetail = (data) =>
  ajax({
    url: `/courseSign/personnel/${data.id}`,
    method: "get",
  });

export const trainDetailVideo = (data) =>
  ajax({
    url: `/video/personnel/${data.id}/${data.videoId}`,
    method: "get",
  });

export const trainDetailVideoUrl = (data) =>
  ajax({
    url: `/video/playInfo/${data.vid}`,
    method: "get",
  });
// exam
// 考试
export const exam = (data) =>
  ajax({
    url: `/examSign/personnel`,
    method: "get",
  });

export const getExamPaper = (data) =>
  ajax({
    url: `/exam/personnel/paper/mock/list/${data.id}`,
    method: "get",
  });
export const getExamPaperDetail = (data) =>
  ajax({
    url: `/exam/personnel/paper/mock/${data.id}`,
    method: "get",
  });

export default {
  adminUrl,
  userInfo,
  // user
  userBase,
  // home
  nextExam,
  signTrain,
  signExam,
  // train
  train,
  trainDetail,
  trainDetailVideo,
  trainDetailVideoUrl,
  // exam
  exam,
  getExamPaper,
  getExamPaperDetail,
};
