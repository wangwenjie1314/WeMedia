"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{2886:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(9963),o=r.n(n)},9963:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return i},default:function(){return s}});let n=r(4571),o=r(2541),a=r(1173),l=n._(r(1576)),i=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},4414:function(e,t,r){r.d(t,{Z:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},3313:function(e,t,r){r.d(t,{G:function(){return c}});var n=r(3819),o=r(718),a=r(9880),l=r(2690),i=r(4350),s=(0,o.Gp)((e,t)=>{var r;let{as:o,className:s,children:c,...d}=e,u=(0,a.gy)(t),{slots:f,classNames:b}=(0,n.R)(),h=(0,l.W)(null==b?void 0:b.body,s);return(0,i.jsx)(o||"div",{ref:u,className:null==(r=f.body)?void 0:r.call(f,{class:h}),...d,children:c})});s.displayName="NextUI.CardBody";var c=s},2213:function(e,t,r){r.d(t,{w:function(){return E}});var n=r(3819),o=r(2259),a=r(6727),l=(0,o.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","height-auto","outline-none","text-foreground","box-border","bg-content1",...a.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,disableAnimation:!1,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,disableAnimation:!1,isFooterBlurred:!1}}),i=r(7135),s=r(3571),c=r(8270),d=r(2692),u=r(402),f=r(718),b=r(2690),h=r(8046),p=r(3598),m=r(9880),v=r(7199),g=r(6791),w=r(4350),y=(0,f.Gp)((e,t)=>{let{children:r,context:o,Component:a,isPressable:y,disableAnimation:E,disableRipple:C,getCardProps:S,getRippleProps:x}=function(e){let[t,r]=(0,f.oe)(e,l.variantKeys),{ref:n,as:o,children:a,disableRipple:g=!1,onClick:w,onPress:y,autoFocus:E,className:C,classNames:S,allowTextSelectionOnPress:x=!0,...P}=t,N=(0,m.gy)(n),T=o||(e.isPressable?"button":"div"),A="string"==typeof T,R=(0,b.W)(null==S?void 0:S.base,C),{onClick:_,onClear:D,ripples:z}=(0,v.i)(),L=t=>{e.disableAnimation||g||!N.current||_(t)},{buttonProps:O,isPressed:M}=(0,u.j)({onPress:y,elementType:o,isDisabled:!e.isPressable,onClick:(0,s.tS)(w,L),allowTextSelectionOnPress:x,...P},N),{hoverProps:J,isHovered:k}=(0,d.XI)({isDisabled:!e.isHoverable,...P}),{isFocusVisible:I,isFocused:W,focusProps:B}=(0,c.Fx)({autoFocus:E}),j=(0,i.useMemo)(()=>l({...r}),[...Object.values(r)]),U=(0,i.useMemo)(()=>({isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,disableAnimation:e.disableAnimation,fullWidth:e.fullWidth,slots:j,classNames:S}),[j,S,e.isDisabled,e.isFooterBlurred,e.disableAnimation,e.fullWidth]),H=(0,i.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:N,className:j.base({class:R}),tabIndex:e.isPressable?0:-1,"data-hover":(0,h.PB)(k),"data-pressed":(0,h.PB)(M),"data-focus":(0,h.PB)(W),"data-focus-visible":(0,h.PB)(I),"data-disabled":(0,h.PB)(e.isDisabled),...(0,s.dG)(e.isPressable?{...O,...B,role:"button"}:{},e.isHoverable?J:{},(0,p.z)(P,{enabled:A}),(0,p.z)(t))}},[N,j,R,A,e.isPressable,e.isHoverable,e.isDisabled,k,M,I,O,B,J,P]),V=(0,i.useCallback)(()=>({ripples:z,onClear:D}),[z,D]);return{context:U,domRef:N,Component:T,classNames:S,children:a,isHovered:k,isPressed:M,isPressable:e.isPressable,isHoverable:e.isHoverable,disableAnimation:e.disableAnimation,disableRipple:g,handleClick:L,isFocusVisible:I,getCardProps:H,getRippleProps:V}}({...e,ref:t});return(0,w.jsxs)(a,{...S(),children:[(0,w.jsx)(n.k,{value:o,children:r}),y&&!E&&!C&&(0,w.jsx)(g.L,{...x()})]})});y.displayName="NextUI.Card";var E=y},2328:function(e,t,r){r.d(t,{u:function(){return c}});var n=r(3819),o=r(718),a=r(9880),l=r(2690),i=r(4350),s=(0,o.Gp)((e,t)=>{var r;let{as:o,className:s,children:c,...d}=e,u=(0,a.gy)(t),{slots:f,classNames:b}=(0,n.R)(),h=(0,l.W)(null==b?void 0:b.header,s);return(0,i.jsx)(o||"div",{ref:u,className:null==(r=f.header)?void 0:r.call(f,{class:h}),...d,children:c})});s.displayName="NextUI.CardHeader";var c=s},3819:function(e,t,r){r.d(t,{R:function(){return o},k:function(){return n}});var[n,o]=(0,r(5684).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},1796:function(e,t,r){r.d(t,{z:function(){return v}});var n=r(718),o=r(3571),a=r(2686),l=r(8270),i=r(9897),s=r(2259),c=r(6727),d=(0,s.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...c.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:i.J.solid.default}},{variant:"solid",color:"primary",class:{base:i.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:i.J.solid.secondary}},{variant:"solid",color:"success",class:{base:i.J.solid.success}},{variant:"solid",color:"warning",class:{base:i.J.solid.warning}},{variant:"solid",color:"danger",class:{base:i.J.solid.danger}},{variant:"shadow",color:"default",class:{base:i.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:i.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:i.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:i.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:i.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:i.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:i.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:i.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:i.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:i.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:i.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:i.J.bordered.danger}},{variant:"flat",color:"default",class:{base:i.J.flat.default}},{variant:"flat",color:"primary",class:{base:i.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:i.J.flat.secondary}},{variant:"flat",color:"success",class:{base:i.J.flat.success}},{variant:"flat",color:"warning",class:{base:i.J.flat.warning}},{variant:"flat",color:"danger",class:{base:i.J.flat.danger}},{variant:"faded",color:"default",class:{base:i.J.faded.default}},{variant:"faded",color:"primary",class:{base:i.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:i.J.faded.secondary}},{variant:"faded",color:"success",class:{base:i.J.faded.success}},{variant:"faded",color:"warning",class:{base:i.J.faded.warning}},{variant:"faded",color:"danger",class:{base:i.J.faded.danger}},{variant:"light",color:"default",class:{base:i.J.light.default}},{variant:"light",color:"primary",class:{base:i.J.light.primary}},{variant:"light",color:"secondary",class:{base:i.J.light.secondary}},{variant:"light",color:"success",class:{base:i.J.light.success}},{variant:"light",color:"warning",class:{base:i.J.light.warning}},{variant:"light",color:"danger",class:{base:i.J.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-unit-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-unit-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-unit-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),u=r(9880),f=r(2690),b=r(7135),h=r(4350),p=e=>(0,h.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,h.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})}),m=(0,n.Gp)((e,t)=>{let{Component:r,children:i,slots:s,classNames:c,isDot:m,isCloseable:v,startContent:g,endContent:w,getCloseButtonProps:y,getChipProps:E}=function(e){let[t,r]=(0,n.oe)(e,d.variantKeys),{ref:i,as:s,children:c,avatar:h,startContent:p,endContent:m,onClose:v,classNames:g,className:w,...y}=t,E=(0,u.gy)(i),C=(0,f.W)(null==g?void 0:g.base,w),S=!!v,x="dot"===e.variant,{focusProps:P,isFocusVisible:N}=(0,l.Fx)(),T=(0,b.useMemo)(()=>"string"==typeof c&&(null==c?void 0:c.length)===1,[c]),A=(0,b.useMemo)(()=>!!h||!!p,[h,p]),R=(0,b.useMemo)(()=>!!m||S,[m,S]),_=(0,b.useMemo)(()=>d({...r,hasStartContent:A,hasEndContent:R,isOneChar:T,isCloseable:S,isCloseButtonFocusVisible:N}),[...Object.values(r),N,A,R,T,S]),{pressProps:D}=(0,a.r)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:v}),z=e=>(0,b.isValidElement)(e)?(0,b.cloneElement)(e,{className:(0,f.W)("max-h-[80%]",e.props.className)}):null;return{Component:s||"div",children:c,slots:_,classNames:g,isDot:x,isCloseable:S,startContent:((0,b.isValidElement)(h)?(0,b.cloneElement)(h,{className:_.avatar({class:null==g?void 0:g.avatar})}):null)||z(p),endContent:z(m),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:_.closeButton({class:null==g?void 0:g.closeButton}),...(0,o.dG)(D,P)}),getChipProps:()=>({ref:E,className:_.base({class:C}),...y})}}({...e,ref:t}),C=(0,b.useMemo)(()=>m&&!g?(0,h.jsx)("span",{className:s.dot({class:null==c?void 0:c.dot})}):g,[s,g,m]),S=(0,b.useMemo)(()=>v?(0,h.jsx)("span",{...y(),children:w||(0,h.jsx)(p,{})}):w,[w,v,y]);return(0,h.jsxs)(r,{...E(),children:[C,(0,h.jsx)("span",{className:s.content({class:null==c?void 0:c.content}),children:i}),S]})});m.displayName="NextUI.Chip";var v=m},7260:function(e,t,r){r.d(t,{F:function(){return o},e:function(){return a}});var n=r(7135);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return e=>t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})}function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.useCallback)(o(...t),t)}},5995:function(e,t,r){r.d(t,{WV:function(){return d}});var n=r(4414),o=r(7135);r(1588);var a=r(7260);let l=(0,o.forwardRef)((e,t)=>{let{children:r,...a}=e,l=o.Children.toArray(r),s=l.find(c);if(s){let e=s.props.children,r=l.map(t=>t!==s?t:o.Children.count(e)>1?o.Children.only(null):(0,o.isValidElement)(e)?e.props.children:null);return(0,o.createElement)(i,(0,n.Z)({},a,{ref:t}),(0,o.isValidElement)(e)?(0,o.cloneElement)(e,void 0,r):null)}return(0,o.createElement)(i,(0,n.Z)({},a,{ref:t}),r)});l.displayName="Slot";let i=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],a=t[n];/^on[A-Z]/.test(n)?o&&a?r[n]=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];a(...t),o(...t)}:o&&(r[n]=o):"style"===n?r[n]={...o,...a}:"className"===n&&(r[n]=[o,a].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,a.F)(t,r.ref):r.ref}):o.Children.count(r)>1?o.Children.only(null):null});i.displayName="SlotClone";let s=e=>{let{children:t}=e;return(0,o.createElement)(o.Fragment,null,t)};function c(e){return(0,o.isValidElement)(e)&&e.type===s}let d=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:a,...i}=e,s=a?l:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(s,(0,n.Z)({},i,{ref:r}))});return r.displayName="Primitive.".concat(t),{...e,[t]:r}},{})},3497:function(e,t,r){r.d(t,{Ns:function(){return Y},fC:function(){return F},gb:function(){return C},q4:function(){return L},l_:function(){return X}});var n=r(4414),o=r(7135),a=r(5995),l=r(1588),i=r(7260);let s=(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{},c=e=>{let{present:t,children:r}=e,n=function(e){var t,r;let[n,a]=(0,o.useState)(),i=(0,o.useRef)({}),c=(0,o.useRef)(e),u=(0,o.useRef)("none"),[f,b]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return(0,o.useEffect)(()=>{let e=d(i.current);u.current="mounted"===f?e:"none"},[f]),s(()=>{let t=i.current,r=c.current;if(r!==e){let n=u.current,o=d(t);e?b("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?b("UNMOUNT"):r&&n!==o?b("ANIMATION_OUT"):b("UNMOUNT"),c.current=e}},[e,b]),s(()=>{if(n){let e=e=>{let t=d(i.current).includes(e.animationName);e.target===n&&t&&(0,l.flushSync)(()=>b("ANIMATION_END"))},t=e=>{e.target===n&&(u.current=d(i.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}b("ANIMATION_END")},[n,b]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:(0,o.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),a(e)},[])}}(t),a="function"==typeof r?r({present:n.isPresent}):o.Children.only(r),c=(0,i.e)(n.ref,a.ref);return"function"==typeof r||n.isPresent?(0,o.cloneElement)(a,{ref:c}):null};function d(e){return(null==e?void 0:e.animationName)||"none"}function u(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>function(){for(var e,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call(t,...n)},[])}c.displayName="Presence";let f=(0,o.createContext)(void 0);function b(e,t){let{checkForDefaultPrevented:r=!0}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(n){if(null==e||e(n),!1===r||!n.defaultPrevented)return null==t?void 0:t(n)}}let h="ScrollArea",[p,m]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],n=()=>{let t=r.map(e=>(0,o.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,o.useMemo)(()=>({["__scope".concat(e)]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let a=(0,o.createContext)(n),l=r.length;function i(t){let{scope:r,children:n,...i}=t,s=(null==r?void 0:r[e][l])||a,c=(0,o.useMemo)(()=>i,Object.values(i));return(0,o.createElement)(s.Provider,{value:c},n)}return r=[...r,n],i.displayName=t+"Provider",[i,function(r,i){let s=(null==i?void 0:i[e][l])||a,c=(0,o.useContext)(s);if(c)return c;if(void 0!==n)return n;throw Error("`".concat(r,"` must be used within `").concat(t,"`"))}]},function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let n=t[0];if(1===t.length)return n;let a=()=>{let e=t.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(t){let r=e.reduce((e,r)=>{let{useScope:n,scopeName:o}=r,a=n(t)["__scope".concat(o)];return{...e,...a}},{});return(0,o.useMemo)(()=>({["__scope".concat(n.scopeName)]:r}),[r])}};return a.scopeName=n.scopeName,a}(n,...t)]}(h),[v,g]=p(h),w=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:s,scrollHideDelay:c=600,...d}=e,[u,b]=(0,o.useState)(null),[h,p]=(0,o.useState)(null),[m,g]=(0,o.useState)(null),[w,y]=(0,o.useState)(null),[E,C]=(0,o.useState)(null),[S,x]=(0,o.useState)(0),[P,N]=(0,o.useState)(0),[T,A]=(0,o.useState)(!1),[R,_]=(0,o.useState)(!1),D=(0,i.e)(t,e=>b(e)),z=function(e){let t=(0,o.useContext)(f);return e||t||"ltr"}(s);return(0,o.createElement)(v,{scope:r,type:l,dir:z,scrollHideDelay:c,scrollArea:u,viewport:h,onViewportChange:p,content:m,onContentChange:g,scrollbarX:w,onScrollbarXChange:y,scrollbarXEnabled:T,onScrollbarXEnabledChange:A,scrollbarY:E,onScrollbarYChange:C,scrollbarYEnabled:R,onScrollbarYEnabledChange:_,onCornerWidthChange:x,onCornerHeightChange:N},(0,o.createElement)(a.WV.div,(0,n.Z)({dir:z},d,{ref:D,style:{position:"relative","--radix-scroll-area-corner-width":S+"px","--radix-scroll-area-corner-height":P+"px",...e.style}})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,children:l,...s}=e,c=g("ScrollAreaViewport",r),d=(0,o.useRef)(null),u=(0,i.e)(t,d,c.onViewportChange);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,o.createElement)(a.WV.div,(0,n.Z)({"data-radix-scroll-area-viewport":""},s,{ref:u,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...e.style}}),(0,o.createElement)("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"}},l)))}),E="ScrollAreaScrollbar",C=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,l=g(E,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:s}=l,c="horizontal"===e.orientation;return(0,o.useEffect)(()=>(c?i(!0):s(!0),()=>{c?i(!1):s(!1)}),[c,i,s]),"hover"===l.type?(0,o.createElement)(S,(0,n.Z)({},a,{ref:t,forceMount:r})):"scroll"===l.type?(0,o.createElement)(x,(0,n.Z)({},a,{ref:t,forceMount:r})):"auto"===l.type?(0,o.createElement)(P,(0,n.Z)({},a,{ref:t,forceMount:r})):"always"===l.type?(0,o.createElement)(N,(0,n.Z)({},a,{ref:t})):null}),S=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,l=g(E,e.__scopeScrollArea),[i,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let e=l.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout(()=>s(!1),l.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[l.scrollArea,l.scrollHideDelay]),(0,o.createElement)(c,{present:r||i},(0,o.createElement)(P,(0,n.Z)({"data-state":i?"visible":"hidden"},a,{ref:t})))}),x=(0,o.forwardRef)((e,t)=>{var r;let{forceMount:a,...l}=e,i=g(E,e.__scopeScrollArea),s="horizontal"===e.orientation,d=V(()=>f("SCROLL_END"),100),[u,f]=(r={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},(0,o.useReducer)((e,t)=>{let n=r[e][t];return null!=n?n:e},"hidden"));return(0,o.useEffect)(()=>{if("idle"===u){let e=window.setTimeout(()=>f("HIDE"),i.scrollHideDelay);return()=>window.clearTimeout(e)}},[u,i.scrollHideDelay,f]),(0,o.useEffect)(()=>{let e=i.viewport,t=s?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(f("SCROLL"),d()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[i.viewport,s,f,d]),(0,o.createElement)(c,{present:a||"hidden"!==u},(0,o.createElement)(N,(0,n.Z)({"data-state":"hidden"===u?"hidden":"visible"},l,{ref:t,onPointerEnter:b(e.onPointerEnter,()=>f("POINTER_ENTER")),onPointerLeave:b(e.onPointerLeave,()=>f("POINTER_LEAVE"))})))}),P=(0,o.forwardRef)((e,t)=>{let r=g(E,e.__scopeScrollArea),{forceMount:a,...l}=e,[i,s]=(0,o.useState)(!1),d="horizontal"===e.orientation,u=V(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(d?e:t)}},10);return Z(r.viewport,u),Z(r.content,u),(0,o.createElement)(c,{present:a||i},(0,o.createElement)(N,(0,n.Z)({"data-state":i?"visible":"hidden"},l,{ref:t})))}),N=(0,o.forwardRef)((e,t)=>{let{orientation:r="vertical",...a}=e,l=g(E,e.__scopeScrollArea),i=(0,o.useRef)(null),s=(0,o.useRef)(0),[c,d]=(0,o.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=W(c.viewport,c.content),f={...a,sizes:c,onSizesChange:d,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:e=>s.current=e};function b(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=B(r),a=t||o/2,l=r.scrollbar.paddingStart+a,i=r.scrollbar.size-r.scrollbar.paddingEnd-(o-a),s=r.content-r.viewport;return U([l,i],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,s.current,c,t)}return"horizontal"===r?(0,o.createElement)(T,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=j(l.viewport.scrollLeft,c,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=b(e,l.dir))}})):"vertical"===r?(0,o.createElement)(A,(0,n.Z)({},f,{ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=j(l.viewport.scrollTop,c);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=b(e))}})):null}),T=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:a,...l}=e,s=g(E,e.__scopeScrollArea),[c,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=(0,i.e)(t,u,s.onScrollbarXChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(D,(0,n.Z)({"data-orientation":"horizontal"},l,{ref:f,sizes:r,style:{bottom:0,left:"rtl"===s.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===s.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":B(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(s.viewport){let n=s.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{u.current&&s.viewport&&c&&a({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:I(c.paddingLeft),paddingEnd:I(c.paddingRight)}})}}))}),A=(0,o.forwardRef)((e,t)=>{let{sizes:r,onSizesChange:a,...l}=e,s=g(E,e.__scopeScrollArea),[c,d]=(0,o.useState)(),u=(0,o.useRef)(null),f=(0,i.e)(t,u,s.onScrollbarYChange);return(0,o.useEffect)(()=>{u.current&&d(getComputedStyle(u.current))},[u]),(0,o.createElement)(D,(0,n.Z)({"data-orientation":"vertical"},l,{ref:f,sizes:r,style:{top:0,right:"ltr"===s.dir?0:void 0,left:"rtl"===s.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":B(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(s.viewport){let n=s.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),n>0&&n<r&&t.preventDefault()}},onResize:()=>{u.current&&s.viewport&&c&&a({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:I(c.paddingTop),paddingEnd:I(c.paddingBottom)}})}}))}),[R,_]=p(E),D=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:s,onThumbChange:c,onThumbPointerUp:d,onThumbPointerDown:f,onThumbPositionChange:h,onDragScroll:p,onWheelScroll:m,onResize:v,...w}=e,y=g(E,r),[C,S]=(0,o.useState)(null),x=(0,i.e)(t,e=>S(e)),P=(0,o.useRef)(null),N=(0,o.useRef)(""),T=y.viewport,A=l.content-l.viewport,_=u(m),D=u(h),z=V(v,10);function L(e){P.current&&p({x:e.clientX-P.current.left,y:e.clientY-P.current.top})}return(0,o.useEffect)(()=>{let e=e=>{let t=e.target;(null==C?void 0:C.contains(t))&&_(e,A)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[T,C,A,_]),(0,o.useEffect)(D,[l,D]),Z(C,z),Z(y.content,z),(0,o.createElement)(R,{scope:r,scrollbar:C,hasThumb:s,onThumbChange:u(c),onThumbPointerUp:u(d),onThumbPositionChange:D,onThumbPointerDown:u(f)},(0,o.createElement)(a.WV.div,(0,n.Z)({},w,{ref:x,style:{position:"absolute",...w.style},onPointerDown:b(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),P.current=C.getBoundingClientRect(),N.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",y.viewport&&(y.viewport.style.scrollBehavior="auto"),L(e))}),onPointerMove:b(e.onPointerMove,L),onPointerUp:b(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=N.current,y.viewport&&(y.viewport.style.scrollBehavior=""),P.current=null})})))}),z="ScrollAreaThumb",L=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,l=_(z,e.__scopeScrollArea);return(0,o.createElement)(c,{present:r||l.hasThumb},(0,o.createElement)(O,(0,n.Z)({ref:t},a)))}),O=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,style:l,...s}=e,c=g(z,r),d=_(z,r),{onThumbPositionChange:u}=d,f=(0,i.e)(t,e=>d.onThumbChange(e)),h=(0,o.useRef)(),p=V(()=>{h.current&&(h.current(),h.current=void 0)},100);return(0,o.useEffect)(()=>{let e=c.viewport;if(e){let t=()=>{if(p(),!h.current){let t=H(e,u);h.current=t,u()}};return u(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[c.viewport,p,u]),(0,o.createElement)(a.WV.div,(0,n.Z)({"data-state":d.hasThumb?"visible":"hidden"},s,{ref:f,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:b(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;d.onThumbPointerDown({x:r,y:n})}),onPointerUp:b(e.onPointerUp,d.onThumbPointerUp)}))}),M="ScrollAreaCorner",J=(0,o.forwardRef)((e,t)=>{let r=g(M,e.__scopeScrollArea),a=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&a?(0,o.createElement)(k,(0,n.Z)({},e,{ref:t})):null}),k=(0,o.forwardRef)((e,t)=>{let{__scopeScrollArea:r,...l}=e,i=g(M,r),[s,c]=(0,o.useState)(0),[d,u]=(0,o.useState)(0),f=!!(s&&d);return Z(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),u(t)}),Z(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),c(t)}),f?(0,o.createElement)(a.WV.div,(0,n.Z)({},l,{ref:t,style:{width:s,height:d,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}})):null});function I(e){return e?parseInt(e,10):0}function W(e,t){let r=e/t;return isNaN(r)?0:r}function B(e){let t=W(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function j(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=B(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=t.scrollbar.size-o,l=t.content-t.viewport,i=function(e,t){let[r,n]=t;return Math.min(n,Math.max(r,e))}(e,"ltr"===r?[0,l]:[-1*l,0]);return U([0,l],[0,a-n])(i)}function U(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}let H=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let a={left:e.scrollLeft,top:e.scrollTop},l=r.left!==a.left,i=r.top!==a.top;(l||i)&&t(),r=a,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function V(e,t){let r=u(e),n=(0,o.useRef)(0);return(0,o.useEffect)(()=>()=>window.clearTimeout(n.current),[]),(0,o.useCallback)(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(r,t)},[r,t])}function Z(e,t){let r=u(t);s(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}let F=w,X=y,Y=J},3772:function(e,t,r){r.d(t,{f:function(){return d}});var n=r(4414),o=r(7135),a=r(5995);let l="horizontal",i=["horizontal","vertical"],s=(0,o.forwardRef)((e,t)=>{let{decorative:r,orientation:i=l,...s}=e,d=c(i)?i:l;return(0,o.createElement)(a.WV.div,(0,n.Z)({"data-orientation":d},r?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},s,{ref:t}))});function c(e){return i.includes(e)}s.propTypes={orientation(e,t,r){let n=e[t],o=String(n);return n&&!c(n)?Error("Invalid prop `orientation` of value `".concat(o,"` supplied to `").concat(r,"`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `").concat(l,"`.")):null}};let d=s}}]);