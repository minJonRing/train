"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[762],{1949:function(e,n,t){var r=t(3433),i=t(9439),u=t(2791),a=t(8530),o=t(890),s=t(8096),l=t(8970),c=t(5523),d=t(1419),f=t(9012),p=t(4454),v=t(6151),h=t(184);n.Z=function(e){var n=e.currentQuestion,t=e.setCurrentQuestion,x=e.handleSetCurrentAnswer,m=e.answer,y=e.read,g=n.questionId,Z=n.no,j=n.label,q=n.examQuestionTypeResponse,b=n.questionItemList,I=n.answers,w=n.prevId,S=n.nextId,k=(0,u.useState)(null),E=(0,i.Z)(k,2),F=E[0],K=E[1],C=(0,u.useState)(null),D=(0,i.Z)(C,2),P=D[0],T=D[1],U=(0,u.useState)([]),N=(0,i.Z)(U,2),L=N[0],B=N[1],O=function(e,n,t){var i=+e.target.value;if(t){var u=(0,r.Z)(L);if(n)u.push(i);else{var a=u.indexOf(i);-1!==a&&u.splice(a,1)}B(u)}else B([i])},Q=function(e){return!!m[g]&&m[g].includes(e)};return(0,u.useEffect)((function(){T(g);var e=m[g]||[];B(e);var r=function(e){var r=n;32===e.keyCode&&r.nextId&&t(e,r.nextId)};return document.addEventListener("keydown",r),function(){document.removeEventListener("keydown",r)}}),[n]),(0,u.useEffect)((function(){F&&P&&F===P?x&&x(g,L):K(P)}),[L]),(0,h.jsx)(a.Z,{sx:{position:"relative"},children:Object.keys(n).length?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(a.Z,{children:[(0,h.jsxs)(a.Z,{sx:{padding:"0 12px"},children:[(0,h.jsxs)(o.Z,{gutterBottom:!0,variant:"h5",children:["\u7b2c",Z,"\u9898"]}),(0,h.jsx)(o.Z,{gutterBottom:!0,variant:"h6",children:j})]}),(0,h.jsx)(s.Z,{sx:{padding:"0 24px"},children:[1,2].includes(null===q||void 0===q?void 0:q.type)?(0,h.jsx)(l.Z,{onChange:O,children:null===b||void 0===b?void 0:b.map((function(e){return(0,h.jsx)(c.Z,{control:(0,h.jsx)(d.Z,{value:e.id,checked:Q(e.id),disabled:y}),label:e.content},e.id)}))}):(0,h.jsx)(f.Z,{children:null===b||void 0===b?void 0:b.map((function(e){return(0,h.jsx)(c.Z,{control:(0,h.jsx)(p.Z,{value:e.id,onChange:function(e,n){return O(e,n,!0)},checked:Q(e.id),disabled:y}),label:e.content},e.id)}))})}),(0,h.jsxs)(a.Z,{sx:{position:"absolute",width:"100%",top:y?"520px":"400px"},children:[(0,h.jsx)(v.Z,{variant:"text",sx:{width:"200px"},disabled:!w,onClick:function(e){return t(e,w)},children:"\u4e0a\u4e00\u9898"}),(0,h.jsx)(v.Z,{variant:"text",sx:{width:"200px"},disabled:!S,onClick:function(e){return t(e,S)},children:"\u4e0b\u4e00\u9898"})]})]}),y?(0,h.jsxs)(a.Z,{children:[(0,h.jsx)(o.Z,{variant:"h6",color:"primary",sx:{padding:"0 12px"},children:"\u6b63\u786e\u7b54\u6848"}),(0,h.jsx)(a.Z,{sx:{padding:"0 24px"},children:null===b||void 0===b?void 0:b.filter((function(e){var n=e.id;return I.includes(n)})).map((function(e){var n=e.id,t=e.content;return(0,h.jsx)(o.Z,{variant:"subtitle1",color:"primary",children:t},n)}))})]}):null]}):null})}},5514:function(e,n,t){var r=t(9439),i=t(2791),u=t(8530),a=t(890),o=t(184);n.Z=function(e){var n=e.countdown,t=(0,i.useState)(n),s=(0,r.Z)(t,2),l=s[0],c=s[1],d=(0,i.useState)(""),f=(0,r.Z)(d,2),p=f[0],v=f[1];return(0,i.useEffect)((function(){var e=Math.floor(l/3600),n=Math.floor(l/60)%60,t=l%60;if(v("".concat(e>9?e:"0"+e,":").concat(n>9?n:"0"+n,":").concat(t>9?t:"0"+t)),l>0){var r=l-1;setTimeout((function(){c(r)}),1e3)}}),[l]),(0,o.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(a.Z,{gutterBottom:!0,variant:"h6",sx:{marginBottom:0,lineHeight:"60px"},children:"\u79bb\u672c\u6b21\u8003\u8bd5\u7ed3\u675f\uff1a"}),(0,o.jsx)(a.Z,{sx:{color:"red",fontSize:"20px"},children:p})]})}},4118:function(e,n,t){t.d(n,{p:function(){return a}});var r=t(3433),i=t(1413),u=t(7762),a=function(e){var n,t=[],r={},i={},a=(0,u.Z)(e);try{for(a.s();!(n=a.n()).done;){var l=n.value.examQuestionTypeResponse.type;i[l]||0===i[l]||(i[l]=t.length,t.push({value:l,label:{1:"\u5224\u65ad\u9898",2:"\u5355\u9009\u9898",3:"\u591a\u9009\u9898",4:"\u7efc\u5408\u9898"}[l],children:[]}))}}catch(h){a.e(h)}finally{a.f()}var d=o(e,r);for(var f in d){var p=d[f];t[i[p.examQuestionTypeResponse.type]].children.push(p)}var v=s(t);return{initPaper:v,initAnswers:r,initTopicEnum:c(v)}},o=function e(n,t,r){return n.map((function(n,u){var a=n.questionId,o=n.selected,s=n.content,l=n.subQuestionList;o&&o.length&&(t[a]=o);var c="".concat(r?r+"-":"").concat(u+1);return(0,i.Z)((0,i.Z)({},n),{},{value:n.questionId,label:c+"\uff1a"+s,no:c,children:l?e(l,t,u+1):null})}))},s=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(n){var u=n.children,a=[].concat((0,r.Z)(t),[n.value+""]);return(0,i.Z)((0,i.Z)({},n),{},{questionIds:u?l(u):null,_expanded:t,_selected:a,children:u?e(u,a):null})}))},l=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.map((function(n){var r=n.value,i=n.children;i?e(i,t):t.push(r)})),t},c=function(e){var n=d(e),t={};for(var r in n){var u=n[r],a=u.questionId,o=n[r-1],s=n[+r+1],l=(0,i.Z)((0,i.Z)({},u),{},{prevId:o?o.questionId:"",nextId:s?s.questionId:""});t[a]=l}return t},d=function e(n){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i=(0,u.Z)(n);try{for(i.s();!(t=i.n()).done;){var a=t.value,o=a.children;o?e(o,r):r.push(a)}}catch(s){i.e(s)}finally{i.f()}return r}},4381:function(e,n,t){t(2791);var r=t(8530),i=t(890),u=t(1918),a=t(7621),o=t(9504),s=t(6748),l=t(1131),c=t(8996),d=t(763),f=t(1942),p=t(184);n.Z=function(e){var n=e.read,t=e.paper,v=e.answer,h=e.setCurrentQuestion,x=e.selected,m=void 0===x?[]:x,y=e.expanded,g=void 0===y?[]:y,Z=e.setDefaultExpanded;console.log(1);var j=function(e){var n=Object.keys(v).map((function(e){return+e}));return e.filter((function(e){return n.includes(e)})).length},q=function(e){var n=e.answers,t=e.selected,r=(n||[]).sort((function(e,n){return e-n})),i=(t||[]).sort((function(e,n){return e-n}));return(0,d.isEqual)(r,i)};return(0,p.jsx)(r.Z,{sx:{height:n?"calc(100% - 72px)":"calc(100% - 120px)"},children:(0,p.jsx)(a.Z,{variant:"outlined",sx:{height:"100%",overflow:"auto"},children:(0,p.jsx)(o.Z,{children:(0,p.jsx)(s.Z,{id:"value","aria-label":"file system navigator",defaultCollapseIcon:(0,p.jsx)(l.Z,{}),defaultExpandIcon:(0,p.jsx)(c.Z,{}),onNodeSelect:h,selected:m,expanded:g,onNodeToggle:function(e,n){console.log(e,n),Z&&Z(n)},children:function e(t){return t.map((function(t){return(0,p.jsx)(f.Z,{nodeId:t.value+"",label:(0,p.jsxs)(r.Z,{sx:{display:"flex",justifyContent:"space-between",p:"3px 0"},children:[(0,p.jsx)(i.Z,{children:t.no?"\u7b2c".concat(t.no,"\u9898"):t.label}),n?null:t.questionIds?(0,p.jsx)(u.Z,{label:"\u5df2\u4f5c\u7b54\uff1a"+j(t.questionIds)+"/"+t.questionIds.length,variant:"outlined",color:"success",size:"small"}):null,v[t.questionId]?n?(0,p.jsx)(u.Z,{label:q(t)?"\u6b63\u786e":"\u9519\u8bef",variant:"outlined",color:q(t)?"success":"error",size:"small"}):(0,p.jsx)(u.Z,{label:"\u5df2\u4f5c\u7b54",variant:"outlined",color:"primary",size:"small"}):null]}),sx:{"& .MuiTreeItem-label":{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},children:t.children?e(t.children):null},t.value)}))}(t)})})})})}},4973:function(e,n,t){t.d(n,{hj:function(){return d},$A:function(){return f}});var r=t(9439),i=t(1413),u=t(1912),a=t(7066),o=t(4254),s=u.Z.create({baseURL:"/learning/api",timeout:6e9});s.interceptors.request.use((function(e){return a.h.user.token&&(e.headers.token=a.h.user.token),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){var n,t,r=e.data,i=r.size,u=r.msg,a=r.status;return i||[200].includes(a)||(null===o.N||void 0===o.N||null===(n=o.N.current)||void 0===n||n.open({message:u||"\u7f51\u7edc\u6ce2\u52a8,\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458!",type:"error"}),[401].includes(a)&&(console.log(o.N),null===o.N||void 0===o.N||null===(t=o.N.current)||void 0===t||t.logout())),r}),(function(e){return Promise.reject(e)}));var l=s,c=t(2791),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,i.Z)({method:"get",responseType:"json"},e),t=n.method,r=n.data;return["get","delete"].includes(t)&&(n.params=r),l(n)},f=function(e){var n=(0,c.useState)(""),t=(0,r.Z)(n,2),i=t[0],u=t[1],a=(0,c.useState)(!0),o=(0,r.Z)(a,2),s=o[0],l=o[1],f=(0,c.useState)(!1),p=(0,r.Z)(f,2),v=p[0],h=p[1];return s&&d(e).then((function(e){u(e)})).catch((function(e){u(e),h(!0)})).finally((function(){l(!1)})),{data:i,isLoading:s,isCatch:v}}},9599:function(e,n,t){t.d(n,{Ju:function(){return i}});var r=t(4973),i=function(e){return(0,r.hj)({url:"exam/personnel/paper/mock/getCertificateInfo",method:"get",data:e})};n.ZP={adminUrl:function(e){return(0,r.hj)({url:"/config/adminUrl",method:"get",data:e})},userInfo:function(e){return(0,r.hj)({url:"/user/me",method:"get",data:e})},userBase:function(e){return(0,r.hj)({url:"/user/detail",method:"get",data:e})},nextExam:function(e){return(0,r.hj)({url:"/examStatistic/nextSchedule",method:"get",data:e})},signTrain:function(e){return(0,r.hj)({url:"/learnStatistic/personnelCourse",method:"get"})},signExam:function(e){return(0,r.hj)({url:"/examStatistic/examScheduleCount",method:"get"})},getCertificateInfo:i,train:function(e){return(0,r.hj)({url:"/courseSign/personnel",method:"get",data:e})},trainDetail:function(e){return(0,r.hj)({url:"/courseSign/personnel/".concat(e.id),method:"get"})},trainDetailVideo:function(e){return(0,r.hj)({url:"/video/personnel/".concat(e.id,"/").concat(e.videoId),method:"get"})},trainDetailVideoUrl:function(e){return(0,r.hj)({url:"/video/playInfo/".concat(e.vid),method:"get"})},exam:function(e){return(0,r.hj)({url:"/examSign/personnel",method:"get"})},getExamPaper:function(e){return(0,r.hj)({url:"/exam/personnel/paper/mock/list/".concat(e.id),method:"get"})},getExamPaperDetail:function(e){return(0,r.hj)({url:"/exam/personnel/paper/mock/".concat(e.id),method:"get"})},getExamPaperAnswerDetail:function(e){return(0,r.hj)({url:"/exam/personnel/paper/mock/answer/".concat(e.id),method:"get"})}}},7507:function(e,n,t){t.d(n,{U0:function(){return m},TG:function(){return g},lY:function(){return y},gl:function(){return d},OU:function(){return p},_i:function(){return f},_g:function(){return v},nG:function(){return h},ZR:function(){return x},KV:function(){return c}});var r=t(1413),i=t(5987),u=t(3433),a=t(4489),o=t(9599),s=["queryFn","variables"];function l(e){var n=function(n){var t=e.queryKey;return[].concat((0,u.Z)("function"===typeof t?t():t),(0,u.Z)(n?[JSON.parse(JSON.stringify(n))]:[]))},t=function(t){var u=(0,r.Z)((0,r.Z)({},e),t),l=u.queryFn,c=u.variables,d=(0,i.Z)(u,s),f=o.ZP;return(0,a.a)((0,r.Z)({queryKey:n(c),queryFn:function(e){return l((0,r.Z)((0,r.Z)({},e),{},{apis:f,variables:c}))}},d))};return t.select=function(n){return function(i){var u=(0,r.Z)((0,r.Z)((0,r.Z)({},e),i),{},{select:n});return t(u)}},t.getKey=n,t}l({queryKey:["adminUrl"],queryFn:function(e){return e.apis.adminUrl()}}),l({queryKey:["userInfo"],queryFn:function(e){return e.apis.userInfo()}});var c=l({queryKey:["userBase"],queryFn:function(e){return e.apis.userBase()}}).select((function(e){return e.data})),d=l({queryKey:["nextExam"],queryFn:function(e){return e.apis.nextExam()}}).select((function(e){return e.data})),f=l({queryKey:["signTrain"],queryFn:function(e){return e.apis.signTrain()}}),p=l({queryKey:["signExam"],queryFn:function(e){return e.apis.signExam()}}),v=(l({queryKey:["certificateInfo"],queryFn:function(e){var n=e.apis,t=e.variables;return n.getCertificateInfo(t)}}),l({queryKey:["train"],queryFn:function(e){return e.apis.train()}})),h=l({queryKey:["trainDetail"],queryFn:function(e){var n=e.apis,t=e.variables;return n.trainDetail(t)}}),x=l({queryKey:["trainDetailVideo"],queryFn:function(e){var n=e.apis,t=e.variables;return n.trainDetailVideo(t)}}),m=(l({queryKey:["trainDetailVideoUrl"],queryFn:function(e){var n=e.apis,t=e.variables;return n.trainDetailVideoUrl(t)}}).select((function(e){var n=e.data,t=n.code,r=n.playInfo.playInfoList[0].playURL;return"".concat(r,"?MtsHlsUriToken=").concat(t)})),l({queryKey:["exam"],queryFn:function(e){return e.apis.exam()}})),y=(l({queryKey:["examPaper"],queryFn:function(e){var n=e.apis,t=e.variables;return n.getExamPaper(t)}}),l({queryKey:["examPaperDetail"],queryFn:function(e){var n=e.apis,t=e.variables;return n.getExamPaperDetail(t)}})),g=l({queryKey:["examPaperDetail"],queryFn:function(e){var n=e.apis,t=e.variables;return n.getExamPaperAnswerDetail(t)}})}}]);
//# sourceMappingURL=762.afe6df76.chunk.js.map