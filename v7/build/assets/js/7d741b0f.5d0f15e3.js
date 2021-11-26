"use strict";(self.webpackChunkgh_pages=self.webpackChunkgh_pages||[]).push([[747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8869:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>r,metadata:()=>s,toc:()=>d,default:()=>c});var o=n(4034),a=(n(7294),n(3905));const i={id:"jsdos-bundle",title:"Bundle creation"},r=void 0,s={unversionedId:"jsdos-bundle",id:"jsdos-bundle",isDocsHomePage:!1,title:"Bundle creation",description:"Historical background",source:"@site/docs/jsdos-bundle.md",sourceDirName:".",slug:"/jsdos-bundle",permalink:"/v7/build/docs/jsdos-bundle",editUrl:"https://github.com/caiiiycuk/js-dos/edit/gh-pages/v7/docs/jsdos-bundle.md",tags:[],version:"current",frontMatter:{id:"jsdos-bundle",title:"Bundle creation"},sidebar:"someSidebar",previous:{title:"Releases",permalink:"/v7/build/docs/releases"},next:{title:"Backward compatibility",permalink:"/v7/build/docs/backward-compability"}},d=[{value:"Game Studio",id:"game-studio",children:[]},{value:"Advanced configuration",id:"advanced-configuration",children:[{value:".jsdos/dosbox.conf",id:"jsdosdosboxconf",children:[]},{value:".jsdos/jsdos.json",id:"jsdosjsdosjson",children:[]}]}],l={toc:d};function c({components:e,...t}){return(0,a.kt)("wrapper",(0,o.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("details",null,(0,a.kt)("summary",null,"Historical background"),(0,a.kt)("p",null,(0,a.kt)("br",null),"Previous version (6.22) has a very simple API to run a DOS program in the browser. ",(0,a.kt)("br",null)," BUT, before start it requires perform some setup:",(0,a.kt)("ul",null,(0,a.kt)("li",null," download game archive (usually zip) "),(0,a.kt)("li",null," extract it "),(0,a.kt)("li",null," configure dos file system "),(0,a.kt)("li",null," configure dosbox options (cycles, renderer type, etc.) "),(0,a.kt)("li",null," configure controllers (mouse, keyboard type, etc.) ")),(0,a.kt)("p",{parentName:"div"},"Often gameplay quality depends on good configuration."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Starting from js-dos v7"),", the API expects a ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundle")," that already contains all configuration needed to start the DOS program.\n",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundle")," is just a ",(0,a.kt)("strong",{parentName:"p"},"ZIP")," archive that contains the game itself and a js-dos configuration file (same as dosbox.conf file).\nFor example, ",(0,a.kt)("a",{parentName:"p",href:"https://dos.zone/digger-may-06-1999/"},"digger.jsdos")," contains: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".jsdos/dosbox.conf - dosbox configuration file (required)\n.jsdos/jsods.json  - additional configuration (optional)\nDIGGER.COM         - game file\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"File ",(0,a.kt)("inlineCode",{parentName:"p"},".jsdos/dosbox.conf")," is required. js-dos would not start if this file does not exist."))),(0,a.kt)("p",null,"You can generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundle")," programmatically. But, we recommend you use our ",(0,a.kt)("a",{parentName:"p",href:"https://dos.zone/studio"},"bundle generator"),"\nMoreover you can search ",(0,a.kt)("a",{parentName:"p",href:"https://dos.zone"},"our database")," to see if someone already uploaded a ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundle")," for a program."),(0,a.kt)("h2",{id:"game-studio"},"Game Studio"),(0,a.kt)("p",null,"Game Studio is part of ",(0,a.kt)("a",{parentName:"p",href:"doszone"},"DOS.Zone")," community project. It's a recommended tool for creating ",(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundles"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"js-dos bundles")," generated with game studio always support the latest features that js-dos have. It generates configuration files for you."),(0,a.kt)("p",null,"Bundles that are generated by game studio is not licensed, you can use them whatever you want."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dos.zone/en/guide/studio"},"Read more")," on dos.zone"),(0,a.kt)("h2",{id:"advanced-configuration"},"Advanced configuration"),(0,a.kt)("h3",{id:"jsdosdosboxconf"},".jsdos/dosbox.conf"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"File ",(0,a.kt)("inlineCode",{parentName:"p"},".jsdos/dosbox.conf")," is required. js-dos would not start if this file does not exist."))),(0,a.kt)("p",null,"This file is a regular ",(0,a.kt)("a",{parentName:"p",href:"https://www.dosbox.com/wiki/Dosbox.conf"},"dosbox configuration"),". Not\nall features are supported, but we will work on it."),(0,a.kt)("h3",{id:"jsdosjsdosjson"},".jsdos/jsdos.json"),(0,a.kt)("p",null,"This file contains additional configuration that does not exist in the dosbox configuration file.\nFor example, it's used to configure ",(0,a.kt)("a",{parentName:"p",href:"/v7/build/docs/mobile-support"},"virtual controls"),". If you used ",(0,a.kt)("a",{parentName:"p",href:"#game-studio"},"game studio"),"\nto create bundles then it will also contain all information from ",(0,a.kt)("inlineCode",{parentName:"p"},"dosbox.conf"),". And it looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n// ...\n  "layers": [\n    {\n      "grid": "honeycomb",\n      "title": "Layer#0",\n      "controls": [\n        {\n          "row": 0,\n//...\n')),(0,a.kt)("p",null,"This file can contain any configuration that you want. You can access it with ",(0,a.kt)("a",{parentName:"p",href:"command-interface"},"Command Interface"),".\nFor example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const ci = await Dos(/*element*/).run(/*bundle url*/);\nconst config = await ci.config();\nconsole.log(config.layers);\n")),(0,a.kt)("p",null,"This snippet will print information about gestures that config has. It's a very powerful feature, it can be used\nto add new optional features to js-dos. Read how to add client-side features in emulators-ui ",(0,a.kt)("a",{parentName:"p",href:"contributing-emulators-ui"},"Contributing")," guide."))}c.isMDXComponent=!0}}]);