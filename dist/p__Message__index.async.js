(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[67],{12439:function(le,Y,s){"use strict";s.d(Y,{U2:function(){return q},v_:function(){return d}});var Z=s(15009),c=s.n(Z),P=s(99289),x=s.n(P),H=s(6154),f=H.Z.create({baseURL:"https://movie.jdd001.top",timeout:5e5}),q=function(){var T=x()(c()().mark(function _(S,I){var N,L;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,N=sessionStorage.getItem("token"),f.defaults.headers.common.Authorization="Bearer "+N,l.next=5,f.get(S,{params:I});case 5:return L=l.sent,l.abrupt("return",L.data);case 9:throw l.prev=9,l.t0=l.catch(0),console.error("GET request error:",l.t0),l.t0;case 13:case"end":return l.stop()}},_,null,[[0,9]])}));return function(S,I){return T.apply(this,arguments)}}(),d=function(){var T=x()(c()().mark(function _(S,I){var N,L;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,N=sessionStorage.getItem("token"),f.defaults.headers.common.Authorization="Bearer "+N,console.log("token",N),l.next=6,f.post(S,I);case 6:return L=l.sent,l.abrupt("return",L.data);case 10:throw l.prev=10,l.t0=l.catch(0),console.error("POST request error:",l.t0),l.t0;case 14:case"end":return l.stop()}},_,null,[[0,10]])}));return function(S,I){return T.apply(this,arguments)}}(),i=null},30163:function(le,Y,s){"use strict";s.d(Y,{S:function(){return H},d:function(){return f}});var Z=s(5574),c=s.n(Z),P=s(67294),x=s(85893),H=(0,P.createContext)(null),f=function(d){var i=d.children,T=(0,P.useState)(""),_=c()(T,2),S=_[0],I=_[1],N=(0,P.useCallback)(function(L){I(L)},[]);return(0,x.jsx)(H.Provider,{value:{token:S,updateData:N},children:i})}},44473:function(le,Y,s){"use strict";s.r(Y),s.d(Y,{default:function(){return He}});var Z=s(15009),c=s.n(Z),P=s(99289),x=s.n(P),H=s(19632),f=s.n(H),q=s(5574),d=s.n(q),i=s(67294),T=s(60778),_=s(71577),S=s(34104),I=s(68795),N=s(67261),L=s(95145),se=s(83956),l=s(12439),e=s(85893),ue=function(t){var r=t.children,m=t.onSelect,p=t.value,g=(0,i.useState)(p||null),M=d()(g,2),E=M[0],J=M[1],W=function(A){J(A),m&&m(A)};return(0,e.jsx)("div",{children:i.Children.map(r,function(R){return i.cloneElement(R,{onSelect:W,selected:R.props.value===E})})})},we=function(t){var r=t.children,m=t.onSelect,p=t.selected,g=t.value;return(0,e.jsx)("div",{onClick:function(){return m&&m(g)},className:"msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_bg_subtle_hover ".concat(p&&"msg_bg_subtle_night"," msg-py-2 msg-px-4"),style:{marginBottom:g==0&&"20px"||"0"},children:r})};ue.Item=we;var ce=ue,xt=function(t,r){if(t!=null)return ethers.utils.formatUnits(t,r)},jt=function(t,r){return ethers.utils.parseUnits("".concat(t),r)};function oe(a){var t=localStorage.getItem(a);if(t)try{return JSON.parse(t)}catch(r){console.error("Error parsing JSON from LocalStorage:",r)}return null}var be=s(27484),K=s.n(be),Ce=Object.defineProperty,de=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ge=(a,t,r)=>t in a?Ce(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,Ae=(a,t)=>{for(var r in t||(t={}))Te.call(t,r)&&ge(a,r,t[r]);if(de)for(var r of de(t))Ee.call(t,r)&&ge(a,r,t[r]);return a};const Oe=a=>i.createElement("svg",Ae({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48},a),i.createElement("path",{d:"M102.615-215.384v-57.847q0-28.077 14.538-48.115 14.539-20.039 41.112-31.798 56.889-25.01 105.773-39.01 48.885-14 118.577-14 70.462 0 118.846 14 48.385 14 106.043 39.01 25.804 11.759 40.458 31.798 14.653 20.038 14.653 48.115v57.847h-560Zm630.77 0v-55.539q0-43.769-17.729-74.64-17.728-30.871-45.964-51.283 37.462 7.23 72.308 18.115 34.846 10.885 61.308 23.962 23.769 12.846 38.923 34.815 15.154 21.97 15.154 49.031v55.539h-124Zm-350.77-289.462q-49.5 0-82.442-32.942-32.943-32.943-32.943-82.443 0-50.269 32.943-82.827 32.942-32.558 82.442-32.558 50.27 0 82.827 32.558Q498-670.5 498-620.231q0 49.5-32.558 82.443-32.557 32.942-82.827 32.942Zm272.308-115.385q0 49.5-32.557 82.443-32.558 32.942-82.827 32.942-2.539 0-4.5-.346-1.962-.346-4.501-1.269 18.863-21.741 28.547-50.735 9.684-28.994 9.684-63.13t-10.577-61.713q-10.577-27.577-27.654-52.73 1.77.076 4.501-.385 2.73-.462 4.5-.462 50.269 0 82.827 32.558 32.557 32.558 32.557 82.827Z"}));var _t="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0xMDIuNjE1LTIxNS4zODR2LTU3Ljg0N3EwLTI4LjA3NyAxNC41MzgtNDguMTE1IDE0LjUzOS0yMC4wMzkgNDEuMTEyLTMxLjc5OCA1Ni44ODktMjUuMDEgMTA1Ljc3My0zOS4wMSA0OC44ODUtMTQgMTE4LjU3Ny0xNCA3MC40NjIgMCAxMTguODQ2IDE0IDQ4LjM4NSAxNCAxMDYuMDQzIDM5LjAxIDI1LjgwNCAxMS43NTkgNDAuNDU4IDMxLjc5OCAxNC42NTMgMjAuMDM4IDE0LjY1MyA0OC4xMTV2NTcuODQ3aC01NjBabTYzMC43NyAwdi01NS41MzlxMC00My43NjktMTcuNzI5LTc0LjY0LTE3LjcyOC0zMC44NzEtNDUuOTY0LTUxLjI4MyAzNy40NjIgNy4yMyA3Mi4zMDggMTguMTE1IDM0Ljg0NiAxMC44ODUgNjEuMzA4IDIzLjk2MiAyMy43NjkgMTIuODQ2IDM4LjkyMyAzNC44MTUgMTUuMTU0IDIxLjk3IDE1LjE1NCA0OS4wMzF2NTUuNTM5aC0xMjRabS0zNTAuNzctMjg5LjQ2MnEtNDkuNSAwLTgyLjQ0Mi0zMi45NDItMzIuOTQzLTMyLjk0My0zMi45NDMtODIuNDQzIDAtNTAuMjY5IDMyLjk0My04Mi44MjcgMzIuOTQyLTMyLjU1OCA4Mi40NDItMzIuNTU4IDUwLjI3IDAgODIuODI3IDMyLjU1OFE0OTgtNjcwLjUgNDk4LTYyMC4yMzFxMCA0OS41LTMyLjU1OCA4Mi40NDMtMzIuNTU3IDMyLjk0Mi04Mi44MjcgMzIuOTQyWm0yNzIuMzA4LTExNS4zODVxMCA0OS41LTMyLjU1NyA4Mi40NDMtMzIuNTU4IDMyLjk0Mi04Mi44MjcgMzIuOTQyLTIuNTM5IDAtNC41LS4zNDYtMS45NjItLjM0Ni00LjUwMS0xLjI2OSAxOC44NjMtMjEuNzQxIDI4LjU0Ny01MC43MzUgOS42ODQtMjguOTk0IDkuNjg0LTYzLjEzdC0xMC41NzctNjEuNzEzcS0xMC41NzctMjcuNTc3LTI3LjY1NC01Mi43MyAxLjc3LjA3NiA0LjUwMS0uMzg1IDIuNzMtLjQ2MiA0LjUtLjQ2MiA1MC4yNjkgMCA4Mi44MjcgMzIuNTU4IDMyLjU1NyAzMi41NTggMzIuNTU3IDgyLjgyN1oiLz48L3N2Zz4=";function ze(a){var t=a.checked,r=a.data,m=r.header,p=r.name,g=r.type,M=a.onClick;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"msg_flex",children:(0,e.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg_items_center msg-justify-center",children:(0,e.jsx)("div",{className:"msg-text-lg",children:(0,e.jsx)("div",{className:"msg-xs",children:(0,e.jsx)("img",{style:{width:"40px",borderRadius:"100%"},src:m})})})})}),(0,e.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,e.jsxs)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[g!==1&&(0,e.jsx)(Oe,{width:20,height:20})," ",(0,e.jsx)("div",{style:{fontSize:"16px",fontWeight:"400",marginLeft:"2px"},children:p})]}),(0,e.jsx)("div",{className:"msg-truncate"})]})})]})}function Ue(a){var t=a.self,r=a.data,m=a.datetime,p=a.sendID,g=a.type,M=(0,i.useState)(""),E=d()(M,2),J=E[0],W=E[1],R=function(){var A=x()(c()().mark(function ee(){var V;return c()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,(0,l.U2)("/api/v1/user?imtp_user_id=".concat(p));case 2:V=O.sent,W(V.user.avatar);case 4:case"end":return O.stop()}},ee)}));return function(){return A.apply(this,arguments)}}();return(0,i.useEffect)(function(){R()},[]),(0,e.jsx)("div",{style:{marginBottom:"10px"},className:"".concat(t&&"base-hr"||""),children:(0,e.jsxs)("div",{className:"msg_flex ".concat(!t&&"msg-justify-end","  msg-ml-10"),children:[t&&g!="chatgpt"&&(0,e.jsx)("div",{children:(0,e.jsx)("img",{style:{width:"40px",borderRadius:"40px",marginRight:"10px"},src:J})}),(0,e.jsx)("div",{className:"msg_flex msg-flex-col",style:{paddingRight:"20px"},children:(0,e.jsx)("div",{className:"msg_flex msg-flex-col msg-justify-end msg_items_center msg-border ".concat(t&&"msg_bg_subtle_night"||"msg_bg_subtle_light"),children:(0,e.jsxs)("div",{className:"msg-py-2 msg-px-4",children:[(0,e.jsx)("div",{style:{whiteSpace:"pre-line"},children:r}),(0,e.jsxs)("div",{className:"mst-opacity-50 msg-xs-small",children:[!t&&"Q"||"A"," ",m]})]})})})]})})}function Be(a){var t=a.checked,r=a.data.header;return(0,e.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",style:{fontSize:"12px"},children:(0,e.jsxs)("div",{className:"msg_flex msg_items_center  msg-py-2",children:[(0,e.jsx)("div",{className:"msg_flex",children:(0,e.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-12 msg-h-12 msg_items_center msg-justify-center",children:(0,e.jsx)("div",{className:"msg-text-base",children:(0,e.jsx)("div",{className:"msg-xs-base",children:(0,e.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:r})})})})}),(0,e.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,e.jsx)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:(0,e.jsx)("div",{children:(0,e.jsx)("div",{})})})})]})})}var Pe=s(30163);function Re(){var a,t,r=i.useState({width:(a=window)===null||a===void 0?void 0:a.innerWidth,height:(t=window)===null||t===void 0?void 0:t.innerHeight}),m=d()(r,2),p=m[0],g=m[1];return i.useEffect(function(){var M=function(){g({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",M),function(){window.removeEventListener("resize",M)}},[]),p}var ke=s(6154),Mt=T.Z.TextArea,Fe=[{id:"1",name:"ChatGPT",type:1,content:"...",route:"ChatGpt",header:"https://bf.jdd001.top/cryptologos/chatgpt.png"}],Ye=function(t){var r,m,p,g=(0,L.K)(),M=(0,i.useState)(!1),E=d()(M,2),J=E[0],W=E[1],R=Re(),A=t.user,ee=(0,i.useContext)(Pe.S),V=ee.token,me=(0,i.useState)(!1),O=d()(me,2),We=O[0],ae=O[1],ne=(0,i.useRef)(null),Qe=(0,i.useState)(1),he=d()(Qe,2),$e=he[0],yt=he[1],Ge=(0,i.useState)(""),ve=d()(Ge,2),Ze=ve[0],Ke=ve[1],Je=(0,i.useState)(0),fe=d()(Je,2),z=fe[0],Ve=fe[1],Xe=(0,i.useState)(""),pe=d()(Xe,2),Q=pe[0],re=pe[1],qe=(0,i.useState)([]),xe=d()(qe,2),te=xe[0],w=xe[1],et=(0,i.useState)([]),je=d()(et,2),tt=je[0],st=je[1],at=(0,i.useState)(!1),_e=d()(at,2),Dt=_e[0],Nt=_e[1],nt=(0,i.useState)(100),Me=d()(nt,2),St=Me[0],It=Me[1],Lt=(0,i.useRef)(null),rt=(0,i.useState)(),ye=d()(rt,2),b=ye[0],it=ye[1],lt=(0,i.useState)(Fe),De=d()(lt,2),k=De[0],ut=De[1],ct=(0,i.useState)(!1),Ne=d()(ct,2),wt=Ne[0],bt=Ne[1],Ct=[{symbol:"Ethereum",icon:"/eth.svg"},{symbol:"BNB Chain",icon:"/bnb.svg"},{symbol:"Polygon",icon:"/polygon.svg"},{symbol:"Optimism",icon:"/optimism.png"}],ot=(0,i.useState)(0),Se=d()(ot,2),Tt=Se[0],Et=Se[1],dt=function(){debugger;if(J){mt();return}w(function(n){var o=[].concat(f()(n),[{type:"chatgpt",self:!0,content:Q,datetime:K()().format("YYYY-MM-DD HH:mm:ss")}]);return o}),re(""),ae(!0),(0,l.v_)("/api/v1/chat/chatgpt",{prompt:Q}).then(function(n){n.code==0?(Ie(),w(function(o){var j=[].concat(f()(o),[{type:"chatgpt",self:!1,content:n.response,datetime:K()().format("YYYY-MM-DD HH:mm:ss")}]);return j})):w(function(o){var j=[].concat(f()(o),[{type:"chatgpt",self:!1,content:"\u8BF7\u91CD\u8BD5\u4E00\u6B21",datetime:K()().format("YYYY-MM-DD HH:mm:ss")}]);return j}),ae(!1)}).catch(function(){return ae(!1)}),console.log(te)};(0,i.useEffect)(function(){z==0&&Ie(),gt(),ht()},[V]),(0,i.useEffect)(function(){var u=oe("chatgptData");u&&w(u)},[V]),(0,i.useEffect)(function(){if(z==0&&localStorage.setItem("chatgptData",JSON.stringify(te.filter(function(n){return n.type=="chatgpt"}))),ne.current){var u=ne.current;u.scrollTop=u.scrollHeight}},[te.length]),(0,i.useEffect)(function(){return console.log("user",A)});var Ie=function(){(0,l.U2)("/api/v1/chat/chatgpt_limit").then(function(n){console.log("response",n),it(n)})},gt=function(){(0,l.U2)("/api/v1/group/user").then(function(n){n.code==0&&n.data.length>0&&(ut(function(o){return console.log(o),[].concat(f()(o),[{id:n.data[0].id,name:n.data[0].school,type:2,content:"...",members:n.data.length,header:n.data[0].school=="\u6E05\u534E\u5927\u5B66"&&"/qinghua.jpg"||""}])}),st(n.data))})},mt=function(){var u=x()(c()().mark(function n(){var o,j,C;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return o={title:"you have a new message",desc:"",ex:"",iOSPushSound:"",iOSBadgeCount:!0},y.next=3,g.createTextMessage(Q);case 3:j=y.sent,console.log("\u6D88\u606F\u4F531",j),C={recvID:"",groupID:sessionStorage.getItem("group_id"),message:j.data,offlinePushInfo:o},g.sendMessageNotOss(C).then(function(){var X=x()(c()().mark(function h(D){var F,U;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:F=D.data,U=D.errCode,w(function(G){var B=[].concat(f()(G),[{self:!0,content:Q,datetime:K()().format("YYYY-MM-DD HH:mm:ss")}]);return B}),re("");case 3:case"end":return v.stop()}},h)}));return function(h){return X.apply(this,arguments)}}()).catch(function(X){});case 7:case"end":return y.stop()}},n)}));return function(){return u.apply(this,arguments)}}(),ht=function(){var u=x()(c()().mark(function n(){var o,j,C,$,y;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!sessionStorage.getItem("private_key")){h.next=13;break}return o=new N.w5(sessionStorage.getItem("private_key")||""),j=o.address,Ke(j),h.next=6,o.signMessage("hello");case 6:return C=h.sent,h.next=9,ke.Z.post("https://base.jdd001.top:9201/api/v1/login",{signature:C,senderAddress:o.address,network:1});case 9:$=h.sent,o.signMessage("hello").then(function(D){}),y={userID:("01_1_"+j).toLowerCase(),token:$.data.token,apiAddress:"https://base.jdd001.top:9203",wsAddress:"wss://base.jdd001.top:9202",platformID:5},g.login(y).then(function(){var D=x()(c()().mark(function F(U){return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:console.log("login suc...",U),g.getLoginStatus().then(function(G){}).catch(function(G){}),g.on(se.l2.ONRECVNEWMESSAGES,function(G){debugger});case 3:case"end":return v.stop()}},F)}));return function(F){return D.apply(this,arguments)}}()).catch(function(D){console.log("login failed...",D)});case 13:case"end":return h.stop()}},n)}));return function(){return u.apply(this,arguments)}}(),vt=function(){var u=x()(c()().mark(function n(){var o;return c()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:o={groupID:sessionStorage.getItem("group_id")||"",startClientMsgID:"",count:100,userID:""},g.getHistoryMessageList(o).then(function(){var $=x()(c()().mark(function y(X){var h,D,F,U;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:h=X.data,D=JSON.parse(h),F=c()().mark(function G(){var B;return c()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:B=D[U],B.contentType<105&&w(function(ft){var pt=[].concat(f()(ft),[{sendID:B.sendID,self:B.sendID=="01_1_".concat(Ze.toLowerCase()),content:B.content,datetime:K()(B.createTime).format("YYYY-MM-DD HH:mm:ss")}]);return pt});case 2:case"end":return ie.stop()}},G)}),U=0;case 4:if(!(U<D.length)){v.next=9;break}return v.delegateYield(F(),"t0",6);case 6:U++,v.next=4;break;case 9:case"end":return v.stop()}},y)}));return function(y){return $.apply(this,arguments)}}()).catch(function($){debugger});case 2:case"end":return C.stop()}},n)}));return function(){return u.apply(this,arguments)}}();return(0,e.jsx)("div",{className:"message",children:(0,e.jsxs)("div",{className:"msg_main",children:[(0,e.jsxs)("div",{className:"friendlist msg_flex msg_flex_col",style:{background:"rgb(245, 245, 245)"},children:[(0,e.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,e.jsx)("div",{style:{background:"#ababab30",flex:1},children:(0,e.jsx)("input",{style:{border:"0",background:"transparent",outline:"none",fontSize:"14px",padding:"0 5px"},placeholder:"\u5F00\u59CB\u65B0\u804A\u5929"})})}),(0,e.jsxs)("div",{className:"msg_list msg_flex msg_flex_col msg_flex_between",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_hover",style:{padding:"10px 18px",alignItems:"center"},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{style:{borderRadius:"40px",marginRight:"10px"},width:40,src:"/icon_contact.svg"}),(0,e.jsx)("span",{style:{fontSize:"16px"},children:"\u901A\u8BAF\u5F55"})]})}),(0,e.jsx)(ce,{value:"none",onSelect:function(n){Ve(n);var o=n==0&&oe("chatgptData")||[];n==0&&w([]),o.length>0&&(w(function(){return o}),W(!1)),n!=0&&(w([]),vt(),W(!0))},children:k.map(function(u,n){return(0,e.jsx)(ce.Item,{value:n,children:(0,e.jsx)(ze,{data:u})})})})]}),(0,e.jsx)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_hover",style:{padding:"10px 18px",alignItems:"center"},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("img",{style:{borderRadius:"40px",marginRight:"10px"},width:40,src:A.user.avatar}),(0,e.jsx)("span",{style:{fontSize:"16px"},children:A.user.username})]})})]})]}),(0,e.jsx)("div",{className:"msgdetails msg-w-full msg_flex msg_flex_col",children:$e==1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:[(0,e.jsxs)("div",{className:"chatgpt_limit",children:[(0,e.jsx)(Be,{data:k[z]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:(r=k[z])===null||r===void 0?void 0:r.name}),((m=k[z])===null||m===void 0?void 0:m.type)==1&&(0,e.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:["\u4ECA\u65E5\u5DF2\u7528",(b==null?void 0:b.max_daily_call_count)-(b==null?void 0:b.daily_left_call_count),"\u6B21\uFF0C\u5269\u4F59",b==null?void 0:b.daily_left_call_count,"\u6B21"]})||(0,e.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:[(p=k[z])===null||p===void 0?void 0:p.members," \u6210\u5458"]})]})]}),(0,e.jsx)("div",{children:(0,e.jsx)(T.Z,{placeholder:"\u641C\u7D22",prefix:(0,e.jsx)(I.Z,{})})})]}),(0,e.jsxs)("div",{className:"msg_flex msg_flex_between",style:{flex:1,height:"100%"},children:[(0,e.jsxs)("div",{className:"",style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",height:"calc(100vh - 60px)"},children:[(0,e.jsx)("div",{className:"detail_list msg_flex msg-flex-col",ref:ne,children:te.map(function(u){return(0,e.jsx)(Ue,{type:u.type,sendID:u.sendID,data:u.content,self:!u.self,datetime:u.datetime})})}),(0,e.jsx)("div",{style:{padding:"10px 0 8px",minHeight:"200px"},children:(0,e.jsxs)("div",{className:"baseinput",children:[(0,e.jsx)("textarea",{value:Q,onChange:function(n){return re(n.target.value)},placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427",className:"baseta"}),(0,e.jsx)("div",{style:{textAlign:"right",padding:"10px"},children:We&&(0,e.jsx)(_.Z,{type:"primary",children:"\u751F\u6210\u4E2D..."})||(0,e.jsx)(_.Z,{disabled:Q=="",type:"primary",onClick:dt,children:"\u53D1\u9001"})})]})})]}),R.width>950&&(0,e.jsxs)("div",{style:{minWidth:"460px",width:"460px",background:"#F5F5F5"},children:[(0,e.jsxs)("div",{style:{width:"100%",minHeight:"150px",background:"rgb(224, 224, 224)",padding:"20px"},children:[(0,e.jsxs)("div",{className:"msg_flex",children:[(0,e.jsx)("img",{style:{borderRadius:"40px",marginRight:"10px"},width:50,src:k[z].header}),(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:k[z].name}),(0,e.jsx)("p",{children:"ID:#1234"})]})]}),(0,e.jsx)("div",{style:{margin:"20px 0 10px"},children:"\u83E9\u63D0\u672C\u65E0\u6811\uFF0C\u660E\u955C\u4EA6\u975E\u53F0"}),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 5px",borderRadius:"10px"},children:(0,e.jsx)("img",{width:20,src:"/female.svg"})}),(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 10px",borderRadius:"10px",marginLeft:"10px"},children:"1992-03"}),(0,e.jsx)("div",{style:{background:"#FBFBFD",display:"inline-block",padding:"0 10px",borderRadius:"10px",marginLeft:"10px"},children:"\u6E05\u534E\u5927\u5B66"})]})]}),(0,e.jsx)("div",{children:tt.map(function(u){return(0,e.jsxs)("div",{className:"userlist",children:[(0,e.jsx)("img",{style:{width:"40px",borderRadius:"40px",marginRight:"10px"},src:u.avatar}),(0,e.jsx)("span",{children:u.username})]})})}),(0,e.jsx)("div",{})]})]})]})})]})})},He=(0,S.connect)(function(a){var t=a.user;return{user:t}})(Ye)},88677:function(){},62808:function(){}}]);
