(self.webpackChunkapp1=self.webpackChunkapp1||[]).push([[67],{12439:function(qe,pe,o){"use strict";o.d(pe,{U2:function(){return j},v_:function(){return B}});var Ee=o(15009),X=o.n(Ee),re=o(99289),_=o.n(re),n=o(6154),p=n.Z.create({baseURL:"https://movie.jdd001.top",timeout:5e5}),j=function(){var z=_()(X()().mark(function H(me,ge){var fe,ee;return X()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,fe=sessionStorage.getItem("token"),p.defaults.headers.common.Authorization="Bearer "+fe,x.next=5,p.get(me,{params:ge});case 5:return ee=x.sent,x.abrupt("return",ee.data);case 9:throw x.prev=9,x.t0=x.catch(0),console.error("GET request error:",x.t0),x.t0;case 13:case"end":return x.stop()}},H,null,[[0,9]])}));return function(me,ge){return z.apply(this,arguments)}}(),B=function(){var z=_()(X()().mark(function H(me,ge){var fe,ee;return X()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,fe=sessionStorage.getItem("token"),p.defaults.headers.common.Authorization="Bearer "+fe,console.log("token",fe),x.next=6,p.post(me,ge);case 6:return ee=x.sent,x.abrupt("return",ee.data);case 10:throw x.prev=10,x.t0=x.catch(0),console.error("POST request error:",x.t0),x.t0;case 14:case"end":return x.stop()}},H,null,[[0,10]])}));return function(me,ge){return z.apply(this,arguments)}}(),q=null},30163:function(qe,pe,o){"use strict";o.d(pe,{S:function(){return n},d:function(){return p}});var Ee=o(5574),X=o.n(Ee),re=o(67294),_=o(85893),n=(0,re.createContext)(null),p=function(B){var q=B.children,z=(0,re.useState)(""),H=X()(z,2),me=H[0],ge=H[1],fe=(0,re.useCallback)(function(ee){ge(ee)},[]);return(0,_.jsx)(n.Provider,{value:{token:me,updateData:fe},children:q})}},5244:function(qe,pe,o){"use strict";o.r(pe),o.d(pe,{default:function(){return Yt}});var Ee=o(19632),X=o.n(Ee),re=o(5574),_=o.n(re),n=o(67294),p=o(87462),j=o(4942),B=o(94184),q=o.n(B),z=o(53124),H=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},me=function(r){var s,c=n.useContext(z.E_),u=c.getPrefixCls,b=c.direction,y=r.prefixCls,w=r.type,N=w===void 0?"horizontal":w,Y=r.orientation,$=Y===void 0?"center":Y,P=r.orientationMargin,W=r.className,F=r.children,G=r.dashed,te=r.plain,S=H(r,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),C=u("divider",y),U=$.length>0?"-".concat($):$,J=!!F,L=$==="left"&&P!=null,oe=$==="right"&&P!=null,he=q()(C,"".concat(C,"-").concat(N),(s={},(0,j.Z)(s,"".concat(C,"-with-text"),J),(0,j.Z)(s,"".concat(C,"-with-text").concat(U),J),(0,j.Z)(s,"".concat(C,"-dashed"),!!G),(0,j.Z)(s,"".concat(C,"-plain"),!!te),(0,j.Z)(s,"".concat(C,"-rtl"),b==="rtl"),(0,j.Z)(s,"".concat(C,"-no-default-orientation-margin-left"),L),(0,j.Z)(s,"".concat(C,"-no-default-orientation-margin-right"),oe),s),W),se=(0,p.Z)((0,p.Z)({},L&&{marginLeft:P}),oe&&{marginRight:P});return n.createElement("div",(0,p.Z)({className:he},S,{role:"separator"}),F&&N!=="vertical"&&n.createElement("span",{className:"".concat(C,"-inner-text"),style:se},F))},ge=me,fe=o(50888),ee=o(97685),ze=o(91),x=o(3129),xe=o(15105),je=n.forwardRef(function(e,r){var s,c=e.prefixCls,u=c===void 0?"rc-switch":c,b=e.className,y=e.checked,w=e.defaultChecked,N=e.disabled,Y=e.loadingIcon,$=e.checkedChildren,P=e.unCheckedChildren,W=e.onClick,F=e.onChange,G=e.onKeyDown,te=(0,ze.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),S=(0,x.Z)(!1,{value:y,defaultValue:w}),C=(0,ee.Z)(S,2),U=C[0],J=C[1];function L(O,ie){var ce=U;return N||(ce=O,J(ce),F==null||F(ce,ie)),ce}function oe(O){O.which===xe.Z.LEFT?L(!1,O):O.which===xe.Z.RIGHT&&L(!0,O),G==null||G(O)}function he(O){var ie=L(!U,O);W==null||W(ie,O)}var se=q()(u,b,(s={},(0,j.Z)(s,"".concat(u,"-checked"),U),(0,j.Z)(s,"".concat(u,"-disabled"),N),s));return n.createElement("button",Object.assign({},te,{type:"button",role:"switch","aria-checked":U,disabled:N,className:se,ref:r,onKeyDown:oe,onClick:he}),Y,n.createElement("span",{className:"".concat(u,"-inner")},U?$:P))});je.displayName="Switch";var Fe=je,Ue=o(98866),A=o(97647),v=o(68349),Re=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},Ke=n.forwardRef(function(e,r){var s,c=e.prefixCls,u=e.size,b=e.disabled,y=e.loading,w=e.className,N=w===void 0?"":w,Y=Re(e,["prefixCls","size","disabled","loading","className"]),$=n.useContext(z.E_),P=$.getPrefixCls,W=$.direction,F=n.useContext(A.Z),G=n.useContext(Ue.Z),te=(b??G)||y,S=P("switch",c),C=n.createElement("div",{className:"".concat(S,"-handle")},y&&n.createElement(fe.Z,{className:"".concat(S,"-loading-icon")})),U=q()((s={},(0,j.Z)(s,"".concat(S,"-small"),(u||F)==="small"),(0,j.Z)(s,"".concat(S,"-loading"),y),(0,j.Z)(s,"".concat(S,"-rtl"),W==="rtl"),s),N);return n.createElement(v.Z,{insertExtraNode:!0},n.createElement(Fe,(0,p.Z)({},Y,{prefixCls:S,className:U,disabled:te,ref:r,loadingIcon:C})))});Ke.__ANT_SWITCH=!0;var d=Ke,l=o(97937),a=o(1413),m=o(15471),i=o(8410),f=o(62874),h=function(r){var s=r.prefixCls,c=r.className,u=r.style,b=r.children,y=r.containerRef;return n.createElement(n.Fragment,null,n.createElement("div",{className:q()("".concat(s,"-content"),c),style:(0,a.Z)({},u),"aria-modal":"true",role:"dialog",ref:y},b))},g=h,E=n.createContext(null),M=E,Z=o(80334);function ye(e){return typeof e=="string"&&String(Number(e))===e?((0,Z.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}function Ne(e){warning(!("wrapperClassName"in e),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!e.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Le={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ze(e,r){var s,c,u,b,y=e.prefixCls,w=e.open,N=e.placement,Y=e.inline,$=e.push,P=e.forceRender,W=e.autoFocus,F=e.keyboard,G=e.rootClassName,te=e.rootStyle,S=e.zIndex,C=e.className,U=e.style,J=e.motion,L=e.width,oe=e.height,he=e.children,se=e.contentWrapperStyle,O=e.mask,ie=e.maskClosable,ce=e.maskMotion,Me=e.maskClassName,$e=e.maskStyle,De=e.afterOpenChange,le=e.onClose,ue=n.useRef(),ve=n.useRef(),Ae=n.useRef();n.useImperativeHandle(r,function(){return ue.current});var ke=function(Q){var Oe=Q.keyCode,Te=Q.shiftKey;switch(Oe){case xe.Z.TAB:{if(Oe===xe.Z.TAB){if(!Te&&document.activeElement===Ae.current){var Ge;(Ge=ve.current)===null||Ge===void 0||Ge.focus({preventScroll:!0})}else if(Te&&document.activeElement===ve.current){var We;(We=Ae.current)===null||We===void 0||We.focus({preventScroll:!0})}}break}case xe.Z.ESC:{le&&F&&(Q.stopPropagation(),le(Q));break}}};n.useEffect(function(){if(w&&W){var D;(D=ue.current)===null||D===void 0||D.focus({preventScroll:!0})}},[w]);var R=n.useState(!1),Ce=(0,ee.Z)(R,2),K=Ce[0],_e=Ce[1],T=n.useContext(M),we;$===!1?we={distance:0}:$===!0?we={}:we=$||{};var ne=(s=(c=(u=we)===null||u===void 0?void 0:u.distance)!==null&&c!==void 0?c:T==null?void 0:T.pushDistance)!==null&&s!==void 0?s:180,He=n.useMemo(function(){return{pushDistance:ne,push:function(){_e(!0)},pull:function(){_e(!1)}}},[ne]);n.useEffect(function(){if(w){var D;T==null||(D=T.push)===null||D===void 0||D.call(T)}else{var Q;T==null||(Q=T.pull)===null||Q===void 0||Q.call(T)}},[w]),n.useEffect(function(){return function(){var D;T==null||(D=T.pull)===null||D===void 0||D.call(T)}},[]);var Ve=O&&n.createElement(f.Z,(0,p.Z)({key:"mask"},ce,{visible:w}),function(D,Q){var Oe=D.className,Te=D.style;return n.createElement("div",{className:q()("".concat(y,"-mask"),Oe,Me),style:(0,a.Z)((0,a.Z)({},Te),$e),onClick:ie&&w?le:void 0,ref:Q})}),Ye=typeof J=="function"?J(N):J,ae={};if(K&&ne)switch(N){case"top":ae.transform="translateY(".concat(ne,"px)");break;case"bottom":ae.transform="translateY(".concat(-ne,"px)");break;case"left":ae.transform="translateX(".concat(ne,"px)");break;default:ae.transform="translateX(".concat(-ne,"px)");break}N==="left"||N==="right"?ae.width=ye(L):ae.height=ye(oe);var de=n.createElement(f.Z,(0,p.Z)({key:"panel"},Ye,{visible:w,forceRender:P,onVisibleChanged:function(Q){De==null||De(Q)},removeOnLeave:!1,leavedClassName:"".concat(y,"-content-wrapper-hidden")}),function(D,Q){var Oe=D.className,Te=D.style;return n.createElement("div",{className:q()("".concat(y,"-content-wrapper"),Oe),style:(0,a.Z)((0,a.Z)((0,a.Z)({},ae),Te),se)},n.createElement(g,{containerRef:Q,prefixCls:y,className:C,style:U},he))}),Pe=(0,a.Z)({},te);return S&&(Pe.zIndex=S),n.createElement(M.Provider,{value:He},n.createElement("div",{className:q()(y,"".concat(y,"-").concat(N),G,(b={},(0,j.Z)(b,"".concat(y,"-open"),w),(0,j.Z)(b,"".concat(y,"-inline"),Y),b)),style:Pe,tabIndex:-1,ref:ue,onKeyDown:ke},Ve,n.createElement("div",{tabIndex:0,ref:ve,style:Le,"aria-hidden":"true","data-sentinel":"start"}),de,n.createElement("div",{tabIndex:0,ref:Ae,style:Le,"aria-hidden":"true","data-sentinel":"end"})))}var Ie=n.forwardRef(Ze),V=Ie,Se=function(r){var s=r.open,c=s===void 0?!1:s,u=r.prefixCls,b=u===void 0?"rc-drawer":u,y=r.placement,w=y===void 0?"right":y,N=r.autoFocus,Y=N===void 0?!0:N,$=r.keyboard,P=$===void 0?!0:$,W=r.width,F=W===void 0?378:W,G=r.mask,te=G===void 0?!0:G,S=r.maskClosable,C=S===void 0?!0:S,U=r.getContainer,J=r.forceRender,L=r.afterOpenChange,oe=r.destroyOnClose,he=n.useState(!1),se=(0,ee.Z)(he,2),O=se[0],ie=se[1],ce=n.useState(!1),Me=(0,ee.Z)(ce,2),$e=Me[0],De=Me[1];(0,i.Z)(function(){De(!0)},[]);var le=$e?c:!1,ue=n.useRef(),ve=n.useRef();(0,i.Z)(function(){le&&(ve.current=document.activeElement)},[le]);var Ae=function(Ce){var K;if(ie(Ce),L==null||L(Ce),!Ce&&ve.current&&!(!((K=ue.current)===null||K===void 0)&&K.contains(ve.current))){var _e;(_e=ve.current)===null||_e===void 0||_e.focus({preventScroll:!0})}};if(!J&&!O&&!le&&oe)return null;var ke=(0,a.Z)((0,a.Z)({},r),{},{open:le,prefixCls:b,placement:w,autoFocus:Y,keyboard:P,width:F,mask:te,maskClosable:C,inline:U===!1,afterOpenChange:Ae,ref:ue});return n.createElement(m.Z,{open:le||J||O,autoDestroy:!1,getContainer:U,autoLock:te&&(le||O)},n.createElement(V,ke))},Qe=Se,Be=Qe,mt=o(65223),st=o(33603),ft=o(93355),ht=o(4173),vt=function(e,r){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,c=Object.getOwnPropertySymbols(e);u<c.length;u++)r.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(e,c[u])&&(s[c[u]]=e[c[u]]);return s},Kt=(0,ft.b)("default","large"),gt={distance:180};function xt(e){var r=e.width,s=e.height,c=e.size,u=c===void 0?"default":c,b=e.closable,y=b===void 0?!0:b,w=e.mask,N=w===void 0?!0:w,Y=e.push,$=Y===void 0?gt:Y,P=e.closeIcon,W=P===void 0?n.createElement(l.Z,null):P,F=e.bodyStyle,G=e.drawerStyle,te=e.className,S=e.visible,C=e.open,U=e.children,J=e.style,L=e.title,oe=e.headerStyle,he=e.onClose,se=e.footer,O=e.footerStyle,ie=e.prefixCls,ce=e.getContainer,Me=e.extra,$e=e.afterVisibleChange,De=e.afterOpenChange,le=vt(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),ue=n.useContext(z.E_),ve=ue.getPopupContainer,Ae=ue.getPrefixCls,ke=ue.direction,R=Ae("drawer",ie),Ce=ce===void 0&&ve?function(){return ve(document.body)}:ce,K=y&&n.createElement("button",{type:"button",onClick:he,"aria-label":"Close",className:"".concat(R,"-close")},W);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(ae){var de=(0,ee.Z)(ae,2),Pe=de[0],D=de[1]});function _e(){return!L&&!y?null:n.createElement("div",{className:q()("".concat(R,"-header"),(0,j.Z)({},"".concat(R,"-header-close-only"),y&&!L&&!Me)),style:oe},n.createElement("div",{className:"".concat(R,"-header-title")},K,L&&n.createElement("div",{className:"".concat(R,"-title")},L)),Me&&n.createElement("div",{className:"".concat(R,"-extra")},Me))}function T(){if(!se)return null;var ae="".concat(R,"-footer");return n.createElement("div",{className:ae,style:O},se)}var we=q()((0,j.Z)({"no-mask":!N},"".concat(R,"-rtl"),ke==="rtl"),te),ne=n.useMemo(function(){return r??(u==="large"?736:378)},[r,u]),He=n.useMemo(function(){return s??(u==="large"?736:378)},[s,u]),Ve={motionName:(0,st.mL)(R,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Ye=function(de){return{motionName:(0,st.mL)(R,"panel-motion-".concat(de)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return n.createElement(ht.BR,null,n.createElement(mt.Ux,{status:!0,override:!0},n.createElement(Be,(0,p.Z)({prefixCls:R,onClose:he},le,{open:C??S,mask:N,push:$,width:ne,height:He,rootClassName:we,getContainer:Ce,afterOpenChange:function(de){De==null||De(de),$e==null||$e(de)},maskMotion:Ve,motion:Ye,rootStyle:J}),n.createElement("div",{className:"".concat(R,"-wrapper-body"),style:(0,p.Z)({},G)},_e(),n.createElement("div",{className:"".concat(R,"-body"),style:F},U),T()))))}var yt=xt,tt=o(60778),nt=o(71577),Mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ct=Mt,et=o(42135),it=function(r,s){return n.createElement(et.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:Ct}))};it.displayName="ArrowLeftOutlined";var pt=n.forwardRef(it),jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"},Nt=jt,lt=function(r,s){return n.createElement(et.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:Nt}))};lt.displayName="SwapOutlined";var St=n.forwardRef(lt),Dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M464 512a48 48 0 1096 0 48 48 0 10-96 0zm200 0a48 48 0 1096 0 48 48 0 10-96 0zm-400 0a48 48 0 1096 0 48 48 0 10-96 0zm661.2-173.6c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"}}]},name:"message",theme:"outlined"},_t=Dt,ot=function(r,s){return n.createElement(et.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:_t}))};ot.displayName="MessageOutlined";var bt=n.forwardRef(ot),wt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zm-40 376H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"unlock",theme:"outlined"},Ot=wt,ct=function(r,s){return n.createElement(et.Z,(0,a.Z)((0,a.Z)({},r),{},{ref:s,icon:Ot}))};ct.displayName="UnlockOutlined";var Et=n.forwardRef(ct),Lt=o(68795),at=o(12439),Qt=function(r,s){if(r!=null)return ethers.utils.formatUnits(r,s)},Vt=function(r,s){return ethers.utils.parseUnits("".concat(r),s)};function It(e){var r=localStorage.getItem(e);if(r)try{return JSON.parse(r)}catch(s){console.error("Error parsing JSON from LocalStorage:",s)}return null}var $t=o(27484),rt=o.n($t),At=Object.defineProperty,ut=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable,dt=(e,r,s)=>r in e?At(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,zt=(e,r)=>{for(var s in r||(r={}))kt.call(r,s)&&dt(e,s,r[s]);if(ut)for(var s of ut(r))Tt.call(r,s)&&dt(e,s,r[s]);return e};const Zt=e=>n.createElement("svg",zt({xmlns:"http://www.w3.org/2000/svg",height:48,viewBox:"0 -960 960 960",width:48,role:"img"},e),n.createElement("path",{d:"M102.615-215.384v-57.847q0-28.077 14.538-48.115 14.539-20.039 41.112-31.798 56.889-25.01 105.773-39.01 48.885-14 118.577-14 70.462 0 118.846 14 48.385 14 106.043 39.01 25.804 11.759 40.458 31.798 14.653 20.038 14.653 48.115v57.847h-560Zm630.77 0v-55.539q0-43.769-17.729-74.64-17.728-30.871-45.964-51.283 37.462 7.23 72.308 18.115 34.846 10.885 61.308 23.962 23.769 12.846 38.923 34.815 15.154 21.97 15.154 49.031v55.539h-124Zm-350.77-289.462q-49.5 0-82.442-32.942-32.943-32.943-32.943-82.443 0-50.269 32.943-82.827 32.942-32.558 82.442-32.558 50.27 0 82.827 32.558Q498-670.5 498-620.231q0 49.5-32.558 82.443-32.557 32.942-82.827 32.942Zm272.308-115.385q0 49.5-32.557 82.443-32.558 32.942-82.827 32.942-2.539 0-4.5-.346-1.962-.346-4.501-1.269 18.863-21.741 28.547-50.735 9.684-28.994 9.684-63.13t-10.577-61.713q-10.577-27.577-27.654-52.73 1.77.076 4.501-.385 2.73-.462 4.5-.462 50.269 0 82.827 32.558 32.557 32.558 32.557 82.827Z"}));var Gt="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iNDgiPjxwYXRoIGQ9Ik0xMDIuNjE1LTIxNS4zODR2LTU3Ljg0N3EwLTI4LjA3NyAxNC41MzgtNDguMTE1IDE0LjUzOS0yMC4wMzkgNDEuMTEyLTMxLjc5OCA1Ni44ODktMjUuMDEgMTA1Ljc3My0zOS4wMSA0OC44ODUtMTQgMTE4LjU3Ny0xNCA3MC40NjIgMCAxMTguODQ2IDE0IDQ4LjM4NSAxNCAxMDYuMDQzIDM5LjAxIDI1LjgwNCAxMS43NTkgNDAuNDU4IDMxLjc5OCAxNC42NTMgMjAuMDM4IDE0LjY1MyA0OC4xMTV2NTcuODQ3aC01NjBabTYzMC43NyAwdi01NS41MzlxMC00My43NjktMTcuNzI5LTc0LjY0LTE3LjcyOC0zMC44NzEtNDUuOTY0LTUxLjI4MyAzNy40NjIgNy4yMyA3Mi4zMDggMTguMTE1IDM0Ljg0NiAxMC44ODUgNjEuMzA4IDIzLjk2MiAyMy43NjkgMTIuODQ2IDM4LjkyMyAzNC44MTUgMTUuMTU0IDIxLjk3IDE1LjE1NCA0OS4wMzF2NTUuNTM5aC0xMjRabS0zNTAuNzctMjg5LjQ2MnEtNDkuNSAwLTgyLjQ0Mi0zMi45NDItMzIuOTQzLTMyLjk0My0zMi45NDMtODIuNDQzIDAtNTAuMjY5IDMyLjk0My04Mi44MjcgMzIuOTQyLTMyLjU1OCA4Mi40NDItMzIuNTU4IDUwLjI3IDAgODIuODI3IDMyLjU1OFE0OTgtNjcwLjUgNDk4LTYyMC4yMzFxMCA0OS41LTMyLjU1OCA4Mi40NDMtMzIuNTU3IDMyLjk0Mi04Mi44MjcgMzIuOTQyWm0yNzIuMzA4LTExNS4zODVxMCA0OS41LTMyLjU1NyA4Mi40NDMtMzIuNTU4IDMyLjk0Mi04Mi44MjcgMzIuOTQyLTIuNTM5IDAtNC41LS4zNDYtMS45NjItLjM0Ni00LjUwMS0xLjI2OSAxOC44NjMtMjEuNzQxIDI4LjU0Ny01MC43MzUgOS42ODQtMjguOTk0IDkuNjg0LTYzLjEzdC0xMC41NzctNjEuNzEzcS0xMC41NzctMjcuNTc3LTI3LjY1NC01Mi43MyAxLjc3LjA3NiA0LjUwMS0uMzg1IDIuNzMtLjQ2MiA0LjUtLjQ2MiA1MC4yNjkgMCA4Mi44MjcgMzIuNTU4IDMyLjU1NyAzMi41NTggMzIuNTU3IDgyLjgyN1oiLz48L3N2Zz4=",t=o(85893);function Pt(e){var r=e.checked,s=e.data,c=s.header,u=s.name,b=s.type;return(0,t.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",children:(0,t.jsxs)("div",{className:"msg_flex msg_items_center msg_cursor_pointer msg_select_none msg_border_b msg_bg_subtle_hover ".concat(r&&"msg_bg_subtle_night"," msg-py-2 msg-px-4"),children:[(0,t.jsx)("div",{className:"msg_flex",children:(0,t.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-14 msg-h-14 msg_items_center msg-justify-center",children:(0,t.jsx)("div",{className:"msg-text-lg",children:(0,t.jsx)("div",{className:"msg-xs",children:(0,t.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:c})})})})}),(0,t.jsxs)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:[(0,t.jsxs)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[b!==1&&(0,t.jsx)(Zt,{width:20,height:20})," ",(0,t.jsx)("div",{style:{fontSize:"16px",fontWeight:"400"},children:u})]}),(0,t.jsx)("div",{className:"msg-truncate"})]}),(0,t.jsx)("div",{className:"msg_flex msg-flex-col msg_items_end msg_flex_between",children:(0,t.jsx)("span",{style:{fontSize:"12px",fontWeight:"normal",color:"rgba(255,255,255,0.4)"},children:"0xeb...89e1"})})]})]})})}function Ut(e){var r=e.self,s=e.data,c=e.datetime;return(0,t.jsx)("div",{style:{marginBottom:"10px"},className:"".concat(r&&"base-hr"||""),children:(0,t.jsx)("div",{className:"msg_flex ".concat(!r&&"msg-justify-end","  msg-ml-10"),children:(0,t.jsx)("div",{className:"msg_flex msg-flex-col",style:{paddingRight:"20px"},children:(0,t.jsx)("div",{className:"msg_flex msg-flex-col msg-justify-end msg_items_center msg-border ".concat(r&&"msg_bg_subtle_night"||"msg_bg_subtle_light"),children:(0,t.jsxs)("div",{className:"msg-py-2 msg-px-4",children:[(0,t.jsx)("div",{style:{whiteSpace:"pre-line"},children:s}),(0,t.jsxs)("div",{className:"mst-opacity-50 msg-xs-small",children:[!r&&"Q"||"A"," ",c]})]})})})})})}function Rt(e){var r=e.checked,s=e.data.header;return(0,t.jsx)("div",{className:"msg_overflow_hidden msg_shrink_0",style:{fontSize:"12px"},children:(0,t.jsxs)("div",{className:"msg_flex msg_items_center  msg-py-2",children:[(0,t.jsx)("div",{className:"msg_flex",children:(0,t.jsx)("div",{className:"msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-12 msg-h-12 msg_items_center msg-justify-center",children:(0,t.jsx)("div",{className:"msg-text-base",children:(0,t.jsx)("div",{className:"msg-xs-base",children:(0,t.jsx)("img",{style:{width:"100%",borderRadius:"100%"},src:s})})})})}),(0,t.jsx)("div",{className:"msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate",children:(0,t.jsx)("div",{className:"msg-truncate msg-flex-col msg-max-w-full",children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{})})})})]})})}var Bt=o(30163),Jt=tt.Z.TextArea,Ht=[{id:"1",name:"ChatGPT",type:1,content:"...",route:"ChatGpt",header:"https://bf.jdd001.top/cryptologos/chatgpt.png"}];function Yt(){var e,r,s,c=(0,n.useContext)(Bt.S),u=c.token,b=(0,n.useState)(!1),y=_()(b,2),w=y[0],N=y[1],Y=(0,n.useRef)(null),$=(0,n.useState)(1),P=_()($,2),W=P[0],F=P[1],G=(0,n.useState)(0),te=_()(G,2),S=te[0],C=te[1],U=(0,n.useState)(""),J=_()(U,2),L=J[0],oe=J[1],he=(0,n.useState)([]),se=_()(he,2),O=se[0],ie=se[1],ce=(0,n.useState)(!1),Me=_()(ce,2),$e=Me[0],De=Me[1],le=(0,n.useState)(100),ue=_()(le,2),ve=ue[0],Ae=ue[1],ke=(0,n.useRef)(null),R=(0,n.useState)(),Ce=_()(R,2),K=Ce[0],_e=Ce[1],T=(0,n.useState)(Ht),we=_()(T,2),ne=we[0],He=we[1],Ve=(0,n.useState)(!1),Ye=_()(Ve,2),ae=Ye[0],de=Ye[1],Pe=[{symbol:"Ethereum",icon:"/eth.svg"},{symbol:"BNB Chain",icon:"/bnb.svg"},{symbol:"Polygon",icon:"/polygon.svg"},{symbol:"Optimism",icon:"/optimism.png"}],D=(0,n.useState)(0),Q=_()(D,2),Oe=Q[0],Te=Q[1],Ge=function(){ie(function(k){var be=[].concat(X()(k),[{self:!0,content:L,datetime:rt()().format("YYYY-MM-DD HH:mm:ss")}]);return be}),oe(""),N(!0),(0,at.v_)("/api/v1/chat/chatgpt",{prompt:L}).then(function(k){k.code==0?(We(),ie(function(be){var Je=[].concat(X()(be),[{self:!1,content:k.response,datetime:rt()().format("YYYY-MM-DD HH:mm:ss")}]);return Je})):ie(function(be){var Je=[].concat(X()(be),[{self:!1,content:"\u8BF7\u91CD\u8BD5\u4E00\u6B21",datetime:rt()().format("YYYY-MM-DD HH:mm:ss")}]);return Je}),N(!1)}).catch(function(){return N(!1)}),console.log(O)};(0,n.useEffect)(function(){S==0&&We()},[u]),(0,n.useEffect)(function(){var I=It("chatgptData");I&&ie(I)},[u]),(0,n.useEffect)(function(){if(localStorage.setItem("chatgptData",JSON.stringify(O)),Y.current){var I=Y.current;I.scrollTop=I.scrollHeight}},[O.length]);var We=function(){(0,at.U2)("/api/v1/chat/chatgpt_limit").then(function(k){console.log("response",k),_e(k)})},Xt=function(){(0,at.U2)("/api/v1/group/user").then(function(k){k.code==0&&k.data.length>0&&He(function(be){return console.log(be),[].concat(X()(be),[{id:k.data[0].id,name:k.data[0].school,type:2,content:"...",members:k.data.length}])})})};return(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"message",children:(0,t.jsxs)("div",{className:"msg_main",children:[(0,t.jsxs)("div",{className:"friendlist msg_flex msg_flex_col",children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsx)("div",{children:(0,t.jsx)(tt.Z,{ref:ke,style:{color:"white",background:"transparent",border:"transparent",height:"30px"},prefix:(0,t.jsx)(Lt.Z,{onClick:function(){ke.current.focus({cursor:"start"})},style:{color:"var(--messagecolor)",cursor:"pointer"}})})})}),(0,t.jsxs)("div",{className:"msg_list",children:[ne.map(function(I,k){return(0,t.jsx)("div",{onClick:function(){He(function(Je){var Wt=Je.map(function(Xe){return Xe.checked=!1,Xe}).map(function(Xe,Ft){return Ft==k&&(Xe.checked=!0),Xe});return Wt}),C(k)},children:(0,t.jsx)(Pt,{data:I})})}),(0,t.jsx)("p",{children:(0,t.jsx)("br",{})})]})]}),(0,t.jsxs)("div",{className:"msgdetails msg-w-full msg_flex msg_flex_col",children:[W==0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsxs)("div",{onClick:function(){return F(1)},children:[(0,t.jsx)(pt,{}),"\xA0\xA0\xA0\xA0Send Message"]})}),(0,t.jsxs)("div",{className:"msg-max-w-sm tokenwrap",children:[(0,t.jsx)("p",{style:{marginTop:"15px"},children:"Select Target Chain"}),(0,t.jsxs)("div",{className:"chainselect flex flex-between flex-align-center",onClick:function(){return de(!0)},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{style:{width:"30px",marginRight:"20px"},src:Pe[Oe].icon}),(0,t.jsx)("span",{children:Pe[Oe].symbol})]}),(0,t.jsx)(St,{})]}),(0,t.jsx)("p",{children:"Enter Recipient Address"}),(0,t.jsx)(tt.Z,{style:{color:"white",background:"#040000",height:"50px",border:"1px solid var(--bordercolor)"}}),(0,t.jsx)(ge,{className:"mst-opacity-50",style:{background:"#ffffff"}}),(0,t.jsxs)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)(bt,{}),"\xA0\xA0Off-chain"]}),(0,t.jsx)(d,{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)("div",{className:"msg_flex msg_flex_between msg_bg_subtle_night msg-py-3 msg-px-4 msg-rounded-2xl",children:[(0,t.jsxs)("span",{children:[(0,t.jsx)(Et,{}),"\xA0\xA0Unencrypted"]}),(0,t.jsx)(d,{})]}),(0,t.jsx)("br",{}),(0,t.jsxs)(yt,{bodyStyle:{background:"var(--selectbg)"},headerStyle:{display:"none"},width:"100%",height:"100%",title:"Basic Drawer",placement:"bottom",getContainer:!1,open:ae,mask:!1,children:[(0,t.jsxs)("div",{className:"flex flex-between",children:[(0,t.jsx)("span",{children:"Select Target Chain"}),(0,t.jsx)(l.Z,{onClick:function(){return de(!1)}})]}),(0,t.jsx)("div",{className:"tokenlist",children:Pe.map(function(I,k){return(0,t.jsx)("div",{className:"item",onClick:function(){Te(k),de(!1)},children:(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:I.icon,style:{marginRight:"15px"}}),(0,t.jsx)("p",{children:I.symbol})]})})})})]})]}),(0,t.jsx)(nt.Z,{style:{width:"384px",margin:"20px auto"},type:"primary",size:"large",className:"cardButton",children:"Send Message"})]}),W==1&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"header msg_flex msg_flex_between msg_items_center msg_border_b",children:(0,t.jsxs)("div",{className:"chatgpt_limit",children:[(0,t.jsx)(Rt,{data:ne[S]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:(e=ne[S])===null||e===void 0?void 0:e.name}),((r=ne[S])===null||r===void 0?void 0:r.type)==1&&(0,t.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:["\u4ECA\u65E5\u5DF2\u7528",(K==null?void 0:K.max_daily_call_count)-(K==null?void 0:K.daily_left_call_count),"\u6B21\uFF0C\u5269\u4F59",K==null?void 0:K.daily_left_call_count,"\u6B21"]})||(0,t.jsxs)("p",{style:{fontSize:"12px",color:"gray"},children:[(s=ne[S])===null||s===void 0?void 0:s.members," \u6210\u5458"]})]})]})}),(0,t.jsx)("div",{className:"detail_list msg_flex msg-flex-col",ref:Y,children:O.map(function(I){return(0,t.jsx)(Ut,{data:I.content,self:!I.self,datetime:I.datetime})})}),(0,t.jsx)("div",{style:{padding:"10px 0 8px"},children:(0,t.jsxs)("div",{className:"baseinput",children:[(0,t.jsx)("textarea",{value:L,onChange:function(k){return oe(k.target.value)},placeholder:"\u8BF4\u70B9\u4EC0\u4E48\u5427",className:"baseta"}),(0,t.jsx)("div",{style:{textAlign:"right",padding:"10px"},children:w&&(0,t.jsx)(nt.Z,{type:"primary",children:"\u751F\u6210\u4E2D..."})||(0,t.jsx)(nt.Z,{disabled:L=="",type:"primary",onClick:Ge,children:"\u53D1\u9001"})})]})})]})]})]})})})}},27484:function(qe){(function(pe,o){qe.exports=o()})(this,function(){"use strict";var pe=1e3,o=6e4,Ee=36e5,X="millisecond",re="second",_="minute",n="hour",p="day",j="week",B="month",q="quarter",z="year",H="date",me="Invalid Date",ge=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,fe=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(d){var l=["th","st","nd","rd"],a=d%100;return"["+d+(l[(a-20)%10]||l[a]||l[0])+"]"}},ze=function(d,l,a){var m=String(d);return!m||m.length>=l?d:""+Array(l+1-m.length).join(a)+d},x={s:ze,z:function(d){var l=-d.utcOffset(),a=Math.abs(l),m=Math.floor(a/60),i=a%60;return(l<=0?"+":"-")+ze(m,2,"0")+":"+ze(i,2,"0")},m:function d(l,a){if(l.date()<a.date())return-d(a,l);var m=12*(a.year()-l.year())+(a.month()-l.month()),i=l.clone().add(m,B),f=a-i<0,h=l.clone().add(m+(f?-1:1),B);return+(-(m+(a-i)/(f?i-h:h-i))||0)},a:function(d){return d<0?Math.ceil(d)||0:Math.floor(d)},p:function(d){return{M:B,y:z,w:j,d:p,D:H,h:n,m:_,s:re,ms:X,Q:q}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(d){return d===void 0}},xe="en",je={};je[xe]=ee;var Fe=function(d){return d instanceof Re},Ue=function d(l,a,m){var i;if(!l)return xe;if(typeof l=="string"){var f=l.toLowerCase();je[f]&&(i=f),a&&(je[f]=a,i=f);var h=l.split("-");if(!i&&h.length>1)return d(h[0])}else{var g=l.name;je[g]=l,i=g}return!m&&i&&(xe=i),i||!m&&xe},A=function(d,l){if(Fe(d))return d.clone();var a=typeof l=="object"?l:{};return a.date=d,a.args=arguments,new Re(a)},v=x;v.l=Ue,v.i=Fe,v.w=function(d,l){return A(d,{locale:l.$L,utc:l.$u,x:l.$x,$offset:l.$offset})};var Re=function(){function d(a){this.$L=Ue(a.locale,null,!0),this.parse(a)}var l=d.prototype;return l.parse=function(a){this.$d=function(m){var i=m.date,f=m.utc;if(i===null)return new Date(NaN);if(v.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var h=i.match(ge);if(h){var g=h[2]-1||0,E=(h[7]||"0").substring(0,3);return f?new Date(Date.UTC(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,E)):new Date(h[1],g,h[3]||1,h[4]||0,h[5]||0,h[6]||0,E)}}return new Date(i)}(a),this.$x=a.x||{},this.init()},l.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},l.$utils=function(){return v},l.isValid=function(){return this.$d.toString()!==me},l.isSame=function(a,m){var i=A(a);return this.startOf(m)<=i&&i<=this.endOf(m)},l.isAfter=function(a,m){return A(a)<this.startOf(m)},l.isBefore=function(a,m){return this.endOf(m)<A(a)},l.$g=function(a,m,i){return v.u(a)?this[m]:this.set(i,a)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(a,m){var i=this,f=!!v.u(m)||m,h=v.p(a),g=function(Ie,V){var Se=v.w(i.$u?Date.UTC(i.$y,V,Ie):new Date(i.$y,V,Ie),i);return f?Se:Se.endOf(p)},E=function(Ie,V){return v.w(i.toDate()[Ie].apply(i.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(V)),i)},M=this.$W,Z=this.$M,ye=this.$D,Ne="set"+(this.$u?"UTC":"");switch(h){case z:return f?g(1,0):g(31,11);case B:return f?g(1,Z):g(0,Z+1);case j:var Le=this.$locale().weekStart||0,Ze=(M<Le?M+7:M)-Le;return g(f?ye-Ze:ye+(6-Ze),Z);case p:case H:return E(Ne+"Hours",0);case n:return E(Ne+"Minutes",1);case _:return E(Ne+"Seconds",2);case re:return E(Ne+"Milliseconds",3);default:return this.clone()}},l.endOf=function(a){return this.startOf(a,!1)},l.$set=function(a,m){var i,f=v.p(a),h="set"+(this.$u?"UTC":""),g=(i={},i[p]=h+"Date",i[H]=h+"Date",i[B]=h+"Month",i[z]=h+"FullYear",i[n]=h+"Hours",i[_]=h+"Minutes",i[re]=h+"Seconds",i[X]=h+"Milliseconds",i)[f],E=f===p?this.$D+(m-this.$W):m;if(f===B||f===z){var M=this.clone().set(H,1);M.$d[g](E),M.init(),this.$d=M.set(H,Math.min(this.$D,M.daysInMonth())).$d}else g&&this.$d[g](E);return this.init(),this},l.set=function(a,m){return this.clone().$set(a,m)},l.get=function(a){return this[v.p(a)]()},l.add=function(a,m){var i,f=this;a=Number(a);var h=v.p(m),g=function(Z){var ye=A(f);return v.w(ye.date(ye.date()+Math.round(Z*a)),f)};if(h===B)return this.set(B,this.$M+a);if(h===z)return this.set(z,this.$y+a);if(h===p)return g(1);if(h===j)return g(7);var E=(i={},i[_]=o,i[n]=Ee,i[re]=pe,i)[h]||1,M=this.$d.getTime()+a*E;return v.w(M,this)},l.subtract=function(a,m){return this.add(-1*a,m)},l.format=function(a){var m=this,i=this.$locale();if(!this.isValid())return i.invalidDate||me;var f=a||"YYYY-MM-DDTHH:mm:ssZ",h=v.z(this),g=this.$H,E=this.$m,M=this.$M,Z=i.weekdays,ye=i.months,Ne=function(V,Se,Qe,Be){return V&&(V[Se]||V(m,f))||Qe[Se].slice(0,Be)},Le=function(V){return v.s(g%12||12,V,"0")},Ze=i.meridiem||function(V,Se,Qe){var Be=V<12?"AM":"PM";return Qe?Be.toLowerCase():Be},Ie={YY:String(this.$y).slice(-2),YYYY:v.s(this.$y,4,"0"),M:M+1,MM:v.s(M+1,2,"0"),MMM:Ne(i.monthsShort,M,ye,3),MMMM:Ne(ye,M),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:Ne(i.weekdaysMin,this.$W,Z,2),ddd:Ne(i.weekdaysShort,this.$W,Z,3),dddd:Z[this.$W],H:String(g),HH:v.s(g,2,"0"),h:Le(1),hh:Le(2),a:Ze(g,E,!0),A:Ze(g,E,!1),m:String(E),mm:v.s(E,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:h};return f.replace(fe,function(V,Se){return Se||Ie[V]||h.replace(":","")})},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(a,m,i){var f,h=v.p(m),g=A(a),E=(g.utcOffset()-this.utcOffset())*o,M=this-g,Z=v.m(this,g);return Z=(f={},f[z]=Z/12,f[B]=Z,f[q]=Z/3,f[j]=(M-E)/6048e5,f[p]=(M-E)/864e5,f[n]=M/Ee,f[_]=M/o,f[re]=M/pe,f)[h]||M,i?Z:v.a(Z)},l.daysInMonth=function(){return this.endOf(B).$D},l.$locale=function(){return je[this.$L]},l.locale=function(a,m){if(!a)return this.$L;var i=this.clone(),f=Ue(a,m,!0);return f&&(i.$L=f),i},l.clone=function(){return v.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}(),Ke=Re.prototype;return A.prototype=Ke,[["$ms",X],["$s",re],["$m",_],["$H",n],["$W",p],["$M",B],["$y",z],["$D",H]].forEach(function(d){Ke[d[1]]=function(l){return this.$g(l,d[0],d[1])}}),A.extend=function(d,l){return d.$i||(d(l,Re,A),d.$i=!0),A},A.locale=Ue,A.isDayjs=Fe,A.unix=function(d){return A(1e3*d)},A.en=je[xe],A.Ls=je,A.p={},A})}}]);
