"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[868],{868:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(2791),s=n(7689),i=n(7507),r=n(4942),u=n(1413),d=n(9439),c=n(8530),l=n(1889),o=n(7621),p=n(9504),x=n(6151),h=n(1949),f=n(4381),Z=n(5514),m=(n(4254),n(4973)),v=n(763),j=n(4118),g=n(184),S=function(e){var t=e.data,n=(e.saveUrl,e.submitUrl),i=((0,s.s0)(),(0,s.UO)()),S=i.examId,b=i.id,w=(0,a.useState)(0),k=(0,d.Z)(w,2),C=k[0],U=k[1],y=(0,a.useState)([]),E=(0,d.Z)(y,2),I=E[0],L=E[1],O=(0,a.useState)({}),P=(0,d.Z)(O,2),T=P[0],_=P[1],A=(0,a.useState)({}),Q=(0,d.Z)(A,2),q=Q[0],B=Q[1],D=(0,a.useState)({}),W=(0,d.Z)(D,2),Y=W[0],z=W[1],F=(0,a.useState)([]),G=(0,d.Z)(F,2),H=G[0],J=G[1],K=(0,a.useState)([]),M=(0,d.Z)(K,2),N=M[0],R=M[1],V=function(e,t){var n=q[t];if(n){var a=n._expanded,s=n._selected;J(a),R(s)}n&&_(n)};(0,a.useEffect)((function(){var e=t.data,n=e.questionList,a=(e.paperType,e.duration);U(60*a);var s=(0,j.p)(n),i=s.initPaper,r=s.initAnswers,u=s.initTopicEnum;L(i),z(r),B(u)}),[t]);(0,a.useEffect)((function(){var e=function(){var e=Object.keys(q).length,t=Object.keys(Y).length;return{isSubmit:e&&t&&e===t}}().isSubmit;te(!!e)}),[Y]);var X=(0,a.useState)(!1),$=(0,d.Z)(X,2),ee=$[0],te=$[1];return(0,g.jsx)(c.Z,{sx:{p:1,height:"100%"},children:(0,g.jsxs)(l.ZP,{container:!0,spacing:1,sx:{height:"calc(100% + 8px)"},children:[(0,g.jsxs)(l.ZP,{item:!0,xs:12,sm:4,md:4,sx:{height:"100%"},children:[(0,g.jsx)(o.Z,{variant:"outlined",sx:{marginBottom:"12px"},children:(0,g.jsx)(p.Z,{sx:{padding:"0 12px !important"},children:C?(0,g.jsx)(Z.Z,{countdown:C}):null})}),(0,g.jsx)(f.Z,{paper:I,answer:Y,setCurrentQuestion:V,expanded:H,selected:N,setDefaultExpanded:J}),(0,g.jsx)(x.Z,{onClick:function(){var e=[];for(var t in Y)e.push({questionId:t,answerList:Y[t]});(0,m.hj)({url:n,method:"post",data:{examId:S,paperId:b,answerList:e,duration:C}}).then((function(e){}))},variant:"contained",fullWidth:!0,disabled:!ee,sx:{marginTop:"12px"},children:ee?"\u63d0\u4ea4\u8bd5\u5377":"\u8fd8\u6709\u9898\u76ee\u672a\u4f5c\u7b54"})]}),(0,g.jsx)(l.ZP,{item:!0,xs:12,sm:8,md:8,sx:{height:"100%"},children:(0,g.jsx)(h.Z,{currentQuestion:T,setCurrentQuestion:V,handleSetCurrentAnswer:function(e,t){var n=(0,u.Z)({},Y);t.length?n=(0,u.Z)((0,u.Z)({},n),{},(0,r.Z)({},e,(0,v.isArray)(t)?t:[t])):delete n[e],z(n)},answer:Y})})]})})},b=function(){var e=(0,s.UO)().id,t=(0,i.lY)({variables:{id:e},cacheTime:0}),n=t.data;return t.isLoading?null:(0,g.jsx)(S,{data:n,submitUrl:"/exam/personnel/paper/mock"})}}}]);
//# sourceMappingURL=868.60edd3ad.chunk.js.map