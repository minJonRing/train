import { createQuery } from "request/create-query";
export const useAdminUrl = createQuery({
  queryKey: ["adminUrl"],
  queryFn: ({ apis }) => apis.adminUrl(),
});
export const useUserInfo = createQuery({
  queryKey: ["userInfo"],
  queryFn: ({ apis }) => apis.userInfo(),
});
// user userBase
export const userUserBase = createQuery({
  queryKey: ["userBase"],
  queryFn: ({ apis }) => apis.userBase(),
}).select((data) => {
  return data.data;
});
// home
export const useNextExam = createQuery({
  queryKey: ["nextExam"],
  queryFn: ({ apis }) => apis.nextExam(),
}).select((data) => {
  return data.data;
});
export const useSignTrain = createQuery({
  queryKey: ["signTrain"],
  queryFn: ({ apis }) => apis.signTrain(),
});
export const useSignExam = createQuery({
  queryKey: ["signExam"],
  queryFn: ({ apis }) => apis.signExam(),
});
// train
export const useTrain = createQuery({
  queryKey: ["train"],
  queryFn: ({ apis }) => apis.train(),
});

export const useTrainDetail = createQuery({
  queryKey: ["trainDetail"],
  queryFn: ({ apis, variables }) => apis.trainDetail(variables),
});

export const useTrainDetailVideo = createQuery({
  queryKey: ["trainDetailVideo"],
  queryFn: ({ apis, variables }) => apis.trainDetailVideo(variables),
});

export const useTrainDetailVideoUrl = createQuery({
  queryKey: ["trainDetailVideoUrl"],
  queryFn: ({ apis, variables }) => apis.trainDetailVideoUrl(variables),
});

export const useGetVideoUrl = useTrainDetailVideoUrl.select((data) => {
  const { code, playInfo } = data.data;
  const { playURL } = playInfo.playInfoList[0];
  const _playURL = `${playURL}?MtsHlsUriToken=${code}`;
  return _playURL;
});

// exam

export const useExam = createQuery({
  queryKey: ["exam"],
  queryFn: ({ apis }) => apis.exam(),
});

export const useExamPaper = createQuery({
  queryKey: ["examPaper"],
  queryFn: ({ apis, variables }) => apis.getExamPaper(variables),
});

export const useExamPaperDetail = createQuery({
  queryKey: ["examPaperDetail"],
  queryFn: ({ apis, variables }) => apis.getExamPaperDetail(variables),
});
