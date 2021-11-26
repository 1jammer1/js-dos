"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},4996:(e,t,n)=>{n.d(t,{C:()=>i,Z:()=>a});var o=n(2263),r=n(3919);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,o.Z)();return{withBaseUrl:(n,o)=>function(e,t,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(o)return t+n;const a=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+a:a}(t,e,n,o)}}function a(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},9759:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>m});var o=n(4034),r=(n(7294),n(3905)),i=n(4996);const a={id:"mouse-locking",title:"Mouse locking"},c=void 0,s={unversionedId:"mouse-locking",id:"mouse-locking",isDocsHomePage:!1,title:"Mouse locking",description:"Some DOS games do not respect the mouse cursor position, they take into account only relative movement of the mouse cursor. This type of game requires a mouse locking feature.",source:"@site/docs/mouse-locking.md",sourceDirName:".",slug:"/mouse-locking",permalink:"/v7/build/docs/mouse-locking",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/mouse-locking.md",tags:[],version:"current",frontMatter:{id:"mouse-locking",title:"Mouse locking"},sidebar:"someSidebar",previous:{title:"Mobile support",permalink:"/v7/build/docs/mobile-support"},next:{title:"Save/Load",permalink:"/v7/build/docs/save-load"}},l=[],u={toc:l};function m({components:e,...t}){return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Some DOS games do not respect the mouse cursor position, they take into account only relative movement of the mouse cursor. This type of game requires a mouse locking feature."),(0,r.kt)("p",null,"When the mouse is locked DOS game recive only relative movement of mouse and cursor can't leave game screen. This often used inf FPS games like DOOM to look around."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Mouse lock feature is compatible with mobile devices. In locked mode finger swipe will be sent as relative movement of game cursor."))),(0,r.kt)("p",null,"To activate mouse locking just enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"autolock")," property in dosbox config. Mouse will be locked automatically when you click on the game screen."),(0,r.kt)("img",{alt:"autolock",src:(0,i.Z)("img/autolock.jpg")}))}m.isMDXComponent=!0}}]);