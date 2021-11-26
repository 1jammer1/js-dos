"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9027:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>i,toc:()=>l,default:()=>u});var r=n(4034),a=(n(7294),n(3905));const s={id:"browser",title:"In browser"},o=void 0,i={unversionedId:"browser",id:"browser",isDocsHomePage:!1,title:"In browser",description:"1. Using js-dos api",source:"@site/docs/browser.md",sourceDirName:".",slug:"/browser",permalink:"/v7/build/docs/browser",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/browser.md",tags:[],version:"current",frontMatter:{id:"browser",title:"In browser"},sidebar:"someSidebar",previous:{title:"npx create-dosbox",permalink:"/v7/build/docs/create-dosbox"},next:{title:"In node.js",permalink:"/v7/build/docs/node"}},l=[{value:"1. Using js-dos api",id:"1-using-js-dos-api",children:[]},{value:"2. Using emulators-ui (without js-dos services)",id:"2-using-emulators-ui-without-js-dos-services",children:[]},{value:"3. Using emulators",id:"3-using-emulators",children:[]}],p={toc:l};function u({components:e,...t}){return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"1-using-js-dos-api"},"1. Using js-dos api"),(0,a.kt)("p",null,"To run ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle")," you just need a one line of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Dos(document.getElementById("jsdos")).run("some.jsdos");\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dos")," receives HTMLDivElement and uses it to create the player UI. To run ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdos bundle"),"\njust use its method ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," specifying the url of ",(0,a.kt)("inlineCode",{parentName:"p"},"jsdos bundle"),"."),(0,a.kt)("p",null,"To use js-dos you need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos.js")," script, and ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos.css")," style (",(0,a.kt)("a",{parentName:"p",href:"releases"},"releases"),").\nAlso you need to specify path prefix of js-dos installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="<path>/js-dos.js"><\/script>\n<link href="<path>/js-dos.css" rel="stylesheet">\n// ...\n<script>\n  emulators.pathPrefix = "<path>/";\n  Dos(<element>).run(<bundleUrl>);\n')),(0,a.kt)("p",null,"Complete example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/dos.html"',title:'"examples/dos.html"'},"{}\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"By default, js-dos will load wasm modules relatively from current path,\nyou should specify variable ",(0,a.kt)("inlineCode",{parentName:"p"},"pathPrefix")," if you want to load them from different place:"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'emulators.pathPrefix = "<some-path>/";\n')))),(0,a.kt)("h3",{id:"2-using-emulators-ui-without-js-dos-services"},"2. Using emulators-ui (without js-dos services)"),(0,a.kt)("p",null,"js-dos v7 is based ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators-ui")," packages. It provide additinal services over this two packages, if you don't need them, then you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators-ui")," packages directly."),(0,a.kt)("p",null,"To change code above to use ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators-ui")," just change scripts imports to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="emulators/emulators.js"><\/script>\n<script src="emulators-ui/emulators-ui.js"><\/script>\n<link rel="stylesheet" href="emulators-ui/emulators-ui.css">\n')),(0,a.kt)("p",null,"Complete example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/ui-dos.html"',title:'"examples/ui-dos.html"'},"{}\n")),(0,a.kt)("h3",{id:"3-using-emulators"},"3. Using emulators"),(0,a.kt)("p",null,"In case you don't want to use the browser API of js-dos project, you can use just the ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators")," package. Read the ",(0,a.kt)("a",{parentName:"p",href:"/v7/build/docs/estimating-performance"},"guide")," to how we use ",(0,a.kt)("inlineCode",{parentName:"p"},"emulators")," to estimate js-dos performance."))}u.isMDXComponent=!0}}]);