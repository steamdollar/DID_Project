(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3887:function(e,t,r){"use strict";r.d(t,{Ee:function(){return c},Ei:function(){return l}});var n=r(7294),a=r(901),i=r(2446),o=r(9653);var s=(0,a.Gp)((function(e,t){const{htmlWidth:r,htmlHeight:a,alt:i,...o}=e;return n.createElement("img",{width:r,height:a,ref:t,alt:i,...o})}));i.Ts&&(s.displayName="NativeImage");var c=(0,a.Gp)((function(e,t){const{fallbackSrc:r,fallback:c,src:l,srcSet:d,align:u,fit:p,loading:f,ignoreFallback:m,crossOrigin:h,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:b,...x}=e,v=null!=f||m||!(void 0!==r||void 0!==c),E=function(e){const{loading:t,src:r,srcSet:a,onLoad:i,onError:s,crossOrigin:c,sizes:l,ignoreFallback:d}=e,[u,p]=(0,n.useState)("pending");(0,n.useEffect)((()=>{p(r?"loading":"pending")}),[r]);const f=(0,n.useRef)(),m=(0,n.useCallback)((()=>{if(!r)return;h();const e=new Image;e.src=r,c&&(e.crossOrigin=c),a&&(e.srcset=a),l&&(e.sizes=l),t&&(e.loading=t),e.onload=e=>{h(),p("loaded"),null==i||i(e)},e.onerror=e=>{h(),p("failed"),null==s||s(e)},f.current=e}),[r,c,a,l,i,s,t]),h=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,o.Gw)((()=>{if(!d)return"loading"===u&&m(),()=>{h()}}),[u,m,d]),d?"loaded":u}({...e,ignoreFallback:v}),y=((e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t)(E,g),I={ref:t,objectFit:p,objectPosition:u,...v?x:(0,i.CE)(x,["onError","onLoad"])};return y?c||n.createElement(a.m$.img,{as:s,className:"chakra-image__placeholder",src:r,...I}):n.createElement(a.m$.img,{as:s,src:l,srcSet:d,crossOrigin:h,loading:f,referrerPolicy:b,className:"chakra-image",...I})})),l=(0,a.Gp)(((e,t)=>n.createElement(a.m$.img,{ref:t,as:s,className:"chakra-image",...e})));i.Ts&&(c.displayName="Image")},979:function(e,t,r){"use strict";r.d(t,{II:function(){return l}});var n=r(7294),a=r(3234),i=r(901),o=r(4520),s=r(2446),c=r(187),l=(0,i.Gp)((function(e,t){const{htmlSize:r,...c}=e,l=(0,i.jC)("Input",c),d=(0,o.Lr)(c),u=(0,a.Yp)(d),p=(0,s.cx)("chakra-input",e.className);return n.createElement(i.m$.input,{size:r,...u,__css:l.field,ref:t,className:p})}));s.Ts&&(l.displayName="Input"),l.id="Input";var[d,u]=(0,c.kr)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),p=(0,i.Gp)((function(e,t){const r=(0,i.jC)("Input",e),{children:a,className:l,...u}=(0,o.Lr)(e),p=(0,s.cx)("chakra-input__group",l),f={},m=(0,c.WR)(a),h=r.field;m.forEach((e=>{r&&(h&&"InputLeftElement"===e.type.id&&(f.paddingStart=h.height??h.h),h&&"InputRightElement"===e.type.id&&(f.paddingEnd=h.height??h.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))}));const g=m.map((t=>{var r,a;const i=(0,s.YU)({size:(null==(r=t.props)?void 0:r.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,n.cloneElement)(t,i):(0,n.cloneElement)(t,Object.assign(i,f,t.props))}));return n.createElement(i.m$.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...u},n.createElement(d,{value:r},g))}));s.Ts&&(p.displayName="InputGroup");var f={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},m=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),h=(0,i.Gp)((function(e,t){const{placement:r="left",...a}=e,i=f[r]??{},o=u();return n.createElement(m,{ref:t,...a,__css:{...o.addon,...i}})}));s.Ts&&(h.displayName="InputAddon");var g=(0,i.Gp)((function(e,t){return n.createElement(h,{ref:t,placement:"left",...e,className:(0,s.cx)("chakra-input__left-addon",e.className)})}));s.Ts&&(g.displayName="InputLeftAddon"),g.id="InputLeftAddon";var b=(0,i.Gp)((function(e,t){return n.createElement(h,{ref:t,placement:"right",...e,className:(0,s.cx)("chakra-input__right-addon",e.className)})}));s.Ts&&(b.displayName="InputRightAddon"),b.id="InputRightAddon";var x=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),v=(0,i.Gp)((function(e,t){const{placement:r="left",...a}=e,i=u(),o=i.field,s={["left"===r?"insetStart":"insetEnd"]:"0",width:(null==o?void 0:o.height)??(null==o?void 0:o.h),height:(null==o?void 0:o.height)??(null==o?void 0:o.h),fontSize:null==o?void 0:o.fontSize,...i.element};return n.createElement(x,{ref:t,__css:s,...a})}));v.id="InputElement",s.Ts&&(v.displayName="InputElement");var E=(0,i.Gp)((function(e,t){const{className:r,...a}=e,i=(0,s.cx)("chakra-input__left-element",r);return n.createElement(v,{ref:t,placement:"left",className:i,...a})}));E.id="InputLeftElement",s.Ts&&(E.displayName="InputLeftElement");var y=(0,i.Gp)((function(e,t){const{className:r,...a}=e,i=(0,s.cx)("chakra-input__right-element",r);return n.createElement(v,{ref:t,placement:"right",className:i,...a})}));y.id="InputRightElement",s.Ts&&(y.displayName="InputRightElement")},1481:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(29),a=r(7794),i=r.n(a),o=r(8641),s=r(3887),c=r(3234),l=r(979),d=r(7741),u=r(1826),p=r(7294),f=r(9997),m=r(5893);function h(){var e=(0,p.useState)(void 0),t=e[0],r=e[1],a=(0,p.useState)(void 0),h=a[0],g=a[1],b=function(){var e=(0,n.Z)(i().mark((function e(){var r,n,a,o,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=location.href,n=r.split("redirectUri=")[1].split("&")[0],a=r.split("clientId=")[1].split("&")[0],o=r.split("giveUserInfo=")[1],e.next=6,u.W.post("/oauth/login/authorize",{email:t,password:h,reURL:n,restAPI:a,giveUserInfo:o});case 6:if("first"!=(s=e.sent).data.status){e.next=10;break}return location.href=s.data.registerUri,e.abrupt("return");case 10:if(void 0!=s.data.redirectUri){e.next=13;break}return alert(s.data.msg),e.abrupt("return");case 13:location.href=s.data.redirectUri;case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(o.xu,{w:"100%",h:"65rem",background:"#160627",children:(0,m.jsxs)(o.kC,{w:"60%",mx:"auto",pt:"12%",justifyContent:"center",children:[(0,m.jsxs)(o.xu,{w:"50%",mx:"3%",px:"5%",py:"6%",color:"white",border:"1px",borderColor:"gray.200",borderRadius:"5px",children:[(0,m.jsx)(o.xv,{fontSize:"1.5rem",mb:"8%",children:"\ud55c \ubc88\uc758 \ub85c\uadf8\uc778\uc73c\ub85c \ub2e4\uc591\ud55c \uc0ac\uc774\ud2b8\ub97c \uc774\uc6a9\ud574\ubcf4\uc138\uc694!"}),(0,m.jsx)(o.xv,{fontSize:"0.75rem",mb:"0.5%",children:"\ub2e4\uc591\ud55c \uc0ac\uc774\ud2b8\ub97c \ud558\ub098\uc758 \uc544\uc774\ub514\ub85c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"}),(0,m.jsx)(o.xv,{fontSize:"0.75rem",mb:"12%",children:"\uc0ac\uc6a9 \uc911\uc778 DID\uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778\ud574 \ubcf4\uc138\uc694"}),(0,m.jsx)(s.Ee,{src:"https://accounts.kakao.com/assets/weblogin/techin/retina/banner_login2-7800b65948f0912306346a56a61832a98aa302c7e6cf3411eacd35db47d53a3c.png"})]}),(0,m.jsxs)(o.xu,{w:"35%",mx:"3%",border:"1px",borderColor:"gray.200",px:"5%",py:"5%",color:"white",borderRadius:"5px",children:[(0,m.jsx)(o.xv,{fontSize:"2rem",mb:"1rem",children:"DID Service"}),(0,m.jsxs)(c.NI,{mb:"1rem",children:[(0,m.jsx)(c.lX,{fontSize:"xl",mb:"2.5",children:"Email"}),(0,m.jsx)(l.II,{type:"text",placeholder:"email\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",size:"md",id:"Email",mb:"7%",onChange:function(e){r(e.target.value)}}),(0,m.jsx)(c.lX,{fontSize:"xl",mb:"2.5",children:"Password"}),(0,m.jsx)(l.II,{type:"password",placeholder:"password\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",size:"md",id:"userPw",mb:"5%",onChange:function(e){g(e.target.value)}})]}),(0,m.jsx)(d.zx,{onClick:b,w:"100%",mb:"7%",color:"#160627",border:"1px #fff solid",children:"\ub85c\uadf8\uc778"}),(0,m.jsx)(d.zx,{onClick:function(){location.href="".concat(f.frontend,"/register")},bg:"#160627",border:"1px #fff solid",w:"100%",color:"#fff",_hover:{bg:"#160627"},children:"\ud68c\uc6d0\uac00\uc785"})]})]})})})}},1826:function(e,t,r){"use strict";r.d(t,{W:function(){return l}});var n=r(9499);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var i=r(9669),o=r(9997),s=o.backend,c=(o.frontend,{baseURL:s,headers:{withCredentials:!0,"Content-Type":"application/json"}}),l=i.create(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c))},9997:function(e,t,r){"use strict";r.r(t),r.d(t,{backend:function(){return n},cookieDomain:function(){return i},frontend:function(){return a}});var n="http://13.124.225.13",a="http://3.35.86.127",i="localhost"},545:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(1481)}])}},function(e){e.O(0,[897,774,888,179],(function(){return t=545,e(e.s=t);var t}));var t=e.O();_N_E=t}]);