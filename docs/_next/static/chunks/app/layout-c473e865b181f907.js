(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5184:function(){},5073:function(e,t,r){Promise.resolve().then(r.bind(r,2004)),Promise.resolve().then(r.bind(r,8580)),Promise.resolve().then(r.bind(r,256)),Promise.resolve().then(r.bind(r,1515)),Promise.resolve().then(r.bind(r,7886)),Promise.resolve().then(r.t.bind(r,1173,23)),Promise.resolve().then(r.t.bind(r,4861,23)),Promise.resolve().then(r.bind(r,6818)),Promise.resolve().then(r.t.bind(r,543,23)),Promise.resolve().then(r.t.bind(r,1792,23))},2004:function(e,t,r){"use strict";r.r(t);var n=r(4350);r(8762),t.default=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{})})},8580:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(4350),o=(r(8762),()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{})}))},256:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(4350),o=r(7135),a=r(9162);let l=o.forwardRef((e,t)=>{let{className:r,type:o,...l}=e;return(0,n.jsx)("input",{type:o,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});l.displayName="Input";let s=async e=>e?i(await m.search(e,{enrich:!0,suggest:!0})):[],i=e=>e?e.flatMap(e=>e.result).sort((e,t)=>e.id.localeCompare(t.id)):[],c=e=>e.replace(/!\[.*?\]\(.*?\)/g,"").replace(/\[.*?\]\(.*?\)/g,"").replace(/`{1,3}.*?`{1,3}/g,"").replace(/#{1,6} /g,"").replace(/[*_~]+.*?[*_~]+/g,"").replace(/>\s.*/g,"").replace(/-{3,}/g,"").replace(/\n+/g," ");var d=r(3328);let u=new d.Z.Document({tokenize:"full",cache:100,document:{id:"id",index:"content",store:["title","content"]},context:{resolution:9,depth:2,bidirectional:!0}}),m=new d.Z.Document({cache:100,tokenize:"full",document:{id:"id",index:"content",pageId:"pageId",store:["title","content","display"]},context:{resolution:9,depth:2,bidirectional:!0}}),g=0,h=async e=>{let{documents:t}=e,r="";++g;for(let e=0;e<t.length;e++){let n=t[e],o=n.slug,a=n.title,l=n.content,s=n.content.split("\n");m.add({id:o,title:a,pageId:"page_".concat(g),content:a,...s[0]&&{display:s[0]}});for(let e=0;e<s.length;e++)s[e]&&m.add({id:"".concat(o,"_").concat(e),title:a,pageId:"page_".concat(g),content:c(s[e])});r+="".concat(a," ").concat(l),u.add({id:g,title:n.title,content:c(r)})}};var f=r(8770),p=r(5384),x=r(5866);let b=(0,o.memo)(function(e){let t,{value:r,match:o}=e;if(!r)return null;let a=r.split(""),l=RegExp((0,x.Z)(o.trim()).replaceAll(/\s+/g,"|"),"ig"),s=0,i=[];for(;t=l.exec(r);)if(t.index===l.lastIndex)l.lastIndex++;else{let e=a.splice(0,t.index-s).join(""),r=a.splice(0,l.lastIndex-t.index).join("");i.push(e,(0,n.jsx)("mark",{children:r},t.index)),s=l.lastIndex}return(0,n.jsxs)(n.Fragment,{children:[i,a.join("")]})});var v=e=>{let{posts:t}=e,[r,i]=(0,o.useState)(!1),[c,d]=(0,o.useState)(""),[u,m]=(0,o.useState)(!1),[g,x]=(0,o.useState)(!1),[v,y]=(0,o.useState)([]);h({documents:t});let j=(0,o.useCallback)(async e=>{if(d(e),!r){i(!0);try{k(e)}catch(e){x(!0)}i(!1)}},[r]),k=async e=>{y(await s(e))},w=(0,o.useCallback)(()=>{j(""),m(!1)},[j]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{value:c,onChange:e=>{let{value:t}=e.target;j(t),m(!!t)},onFocus:()=>{m(!0)},onBlur:()=>{m(!1)},placeholder:"Search……",className:"border-gray-600 focus:border-0 rounded-full"}),(0,n.jsx)(f.u,{show:u,as:f.u.Child,leave:"transition-opacity duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)("ul",{className:(0,a.cn)("scrollbar","rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800","p-4 border border-gray-600 bg-gray-900","absolute top-full right-0 z-20 mt-2 overflow-auto overscroll-contain rounded-xl py-2.5 shadow-xl","min-h-[100px] max-h-[400px]","w-[90vw] sm:w-[400px]"),style:{transition:"max-height .2s ease"},children:g?(0,n.jsx)("span",{className:"block select-none p-8 text-center text-sm text-gray-400",children:g}):v&&v.length>0?v.map((e,t)=>(0,n.jsx)(p.default,{href:"./weekly/".concat(e.id.split("_")[0]),onClick:w,children:(0,n.jsxs)("li",{className:(0,a.cn)("break-words rounded-md cursor-default select-none","contrast-more:border","text-gray-800 contrast-more:border-transparent dark:text-gray-300","hover:bg-primary-500/10 hover:text-primary-600 contrast-more:hover:border-primary-500","block scroll-m-12 px-2.5 py-2"),children:[(0,n.jsx)("div",{className:"text-base font-semibold leading-5",children:(0,n.jsx)(b,{match:c,value:e.doc.title})}),(0,n.jsx)("div",{className:"excerpt mt-1 text-sm leading-[1.35rem] text-gray-600 dark:text-gray-400 contrast-more:dark:text-gray-50",children:(0,n.jsx)(b,{match:c,value:e.doc.content})})]})},"".concat(e.id,"_").concat(t))):(0,n.jsx)("span",{className:"block select-none p-8 text-center text-sm text-gray-400",children:"No results found."})})})]})}},1515:function(e,t,r){"use strict";r.r(t),r.d(t,{ThemeProvider:function(){return a}});var n=r(4350);r(7135);var o=r(5460);function a(e){let{children:t,...r}=e;return(0,n.jsx)(o.f,{...r,children:t})}},9162:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(709),o=r(2605);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.m6)((0,n.W)(t))}},543:function(){},1792:function(){},6818:function(e,t,r){"use strict";r.r(t),t.default={src:"./_next/static/media/logo.0be96b97.svg",height:128,width:128,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[374,173,367,887,157,744],function(){return e(e.s=5073)}),_N_E=e.O()}]);