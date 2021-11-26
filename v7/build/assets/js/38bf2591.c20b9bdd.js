"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6067:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>s,toc:()=>l,default:()=>m});var a=n(4034),r=(n(7294),n(3905));const o={id:"iframe",title:"In iframe"},i=void 0,s={unversionedId:"iframe",id:"iframe",isDocsHomePage:!1,title:"In iframe",description:"iframe integraion is a fastest way to embed a program on your page. To do this you can use player hosted on dos.zone.",source:"@site/docs/iframe.md",sourceDirName:".",slug:"/iframe",permalink:"/v7/build/docs/iframe",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/iframe.md",tags:[],version:"current",frontMatter:{id:"iframe",title:"In iframe"}},l=[],p={toc:l};function m({components:e,...t}){return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"iframe integraion is a fastest way to embed a program on your page. To do this you can use player hosted on ",(0,r.kt)("a",{parentName:"p",href:"doszone"},"dos.zone"),".\nYou just need the url of a ",(0,r.kt)("inlineCode",{parentName:"p"},"jsdos bundle")," (you can get it from our game database)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  id="jsdos"\n  src="https://dos.zone/en/player/https%3A%2F%2Fdoszone-uploads.s3.dualstack.eu-central-1.amazonaws.com%2Foriginal%2F2X%2F2%2F24b00b14f118580763440ecaddcc948f8cb94f14.jsdos"\n/>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," can be composed like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const src = "https://dos.zone/en/player/" + encodeURIComponent(bundleUrl);\n')),(0,r.kt)("p",null,"To receive input you should focus the iframe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'document.getElementById("jsdos").focus();\n')),(0,r.kt)("p",null,"Complete example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="examples/iframe.html"',title:'"examples/iframe.html"'},"{}\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Mobile support:"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Swipe to change direction of digger."),(0,r.kt)("li",{parentName:"ol"},"Open top menu to type records name on mobile.")))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Iframe integration didn't support a fullscreen button yet, if you need it look forward."))))}m.isMDXComponent=!0}}]);