"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},4996:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>i});var n=r(2263),a=r(3919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},6777:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>u,default:()=>c});var n=r(4034),a=(r(7294),r(3905)),o=r(4996);const i={id:"overview",slug:"/",title:"Overview",sidebar_label:"Overview"},s=void 0,l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"js-dos was designed from the ground up to be easily installed and used to get your DOS program up and running in browser quickly.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/",permalink:"/v7/build/docs/",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/overview.md",tags:[],version:"current",frontMatter:{id:"overview",slug:"/",title:"Overview",sidebar_label:"Overview"},sidebar:"someSidebar",next:{title:"npx create-dosbox",permalink:"/v7/build/docs/create-dosbox"}},u=[{value:"Bundles repository",id:"bundles-repository",children:[]},{value:"Getting started",id:"getting-started",children:[]}],p={toc:u};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"js-dos was designed from the ground up to be easily installed and used to get your DOS program up and running in browser quickly."),(0,a.kt)("p",null,"js-dos v7 includes:"),(0,a.kt)("img",{alt:"Result",width:"400px",align:"right",src:(0,o.Z)("img/jsdos-stack.png")}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"js-dos bundle")," - universal package format that js-dos understands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"js-dos")," (top layer) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/js-dos/v/beta"},"npm package")," that combines everything to run a DOS program in browser. js-dos provide additional services like storing saves on backend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"emulators-ui")," (middle layer) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/emulators-ui"},"npm package"),", a set of virtual controls and sound components to render emulator output in browser. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"emulators")," (bottom layer) - ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/emulators"},"npm package"),", that provide emulator backends which can work in different environments.")),(0,a.kt)("p",null,"You can use this three layers separetely. For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you can use only ",(0,a.kt)("inlineCode",{parentName:"li"},"emulators")," package to run ",(0,a.kt)("a",{parentName:"li",href:"/v7/build/docs/node"},"DOS on node")),(0,a.kt)("li",{parentName:"ul"},"or you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"emulators-ui")," package to build custom ",(0,a.kt)("a",{parentName:"li",href:"/v7/build/docs/threejs"},"DOS player on three.js"),". Moreover js-dos package is built using ",(0,a.kt)("inlineCode",{parentName:"li"},"emulators")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"emulators-ui")," packages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"in most cases using ",(0,a.kt)("inlineCode",{parentName:"strong"},"js-dos")," package is simplest way to run ",(0,a.kt)("a",{parentName:"strong",href:"/v7/build/docs/create-dosbox"},"DOS in browser")))),(0,a.kt)("h2",{id:"bundles-repository"},"Bundles repository"),(0,a.kt)("p",null,"Visit our ",(0,a.kt)("a",{parentName:"p",href:"https://dos.zone"},"repository")," that contains ",(0,a.kt)("strong",{parentName:"p"},"1900+")," already created bundles of dos games. You can ",(0,a.kt)("a",{parentName:"p",href:"https://talks.dos.zone/t/read-first/44582"},"contribute")," in it."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Once you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdos bundle")," you can easily run it. To do this follow on site getting started menu."))}c.isMDXComponent=!0}}]);