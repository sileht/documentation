/*! For license information please see 336cb651.b394b067.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{244:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return f}));var r=t(1),o=t(9),i=t(0),a=t.n(i),c=t(247),s=(t(246),t(268)),u=t.n(s);t(171);var l=function(e){var n=e.children,t=e.headingDepth,r=e.hideFeedbackQuestion,o="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+o+" failed",body:"The tutorial on:\n\n"+o+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/qovery/documentation/issues/new?"+u.a.stringify(c),l=Object(i.useState)(null),p=l[0],m=l[1];return a.a.createElement("div",{className:"steps steps--h"+t},n,!r&&!p&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return m("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==p&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Qovery please consider ",a.a.createElement("a",{href:"https://github.com/qovery/documentation/",target:"_blank"},"starring our Github repo"),"."))},p={last_modified_on:"2020-04-21",title:"Environment",description:"Understand the concept of Qovery environment"},m={id:"main-concepts/Environment",title:"Environment",description:"Understand the concept of Qovery environment",source:"@site/docs/main-concepts/Environment.md",permalink:"/docs/main-concepts/Environment",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/main-concepts/Environment.md",sidebar:"docs",previous:{title:"Project",permalink:"/docs/main-concepts/Project"},next:{title:"Security and Compliance",permalink:"/docs/security-and-compliance"}},d=[{value:"Problem of managing multiple environments",id:"problem-of-managing-multiple-environments",children:[]},{value:"Benefits of using Qovery environments",id:"benefits-of-using-qovery-environments",children:[]},{value:"Virtual Branches",id:"virtual-branches",children:[]},{value:"Managing costs",id:"managing-costs",children:[]}],b={rightToc:d};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Environment")," is a fully independent instance of your project (its applications, services, and data). On Qovery,\nenvironments reflect your ",Object(c.b)("strong",{parentName:"p"},"Git")," workflows. Qovery transforms every Git branch into a complete copy of your production environment,\nincluding applications and their dependencies (databases, message brokers, storage, and others). We also replicate your production\ndata, so all your environments are close copies of your production setup."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"/img/qovery_environments.svg",alt:"Qovery environments"})),Object(c.b)("h2",{id:"problem-of-managing-multiple-environments"},"Problem of managing multiple environments"),Object(c.b)("p",null,"When software teams work on new features, they rarely work using just one Git branch. New features are developed on dedicated branches and tested on\npre-production environments to make sure they work flawlessly before releasing to production. Achieving this, however, is often costly and troublesome:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Creating new environments is hard and requires work and time from developers"),Object(c.b)("li",{parentName:"ul"},"Keeping pre-prod environments identical to the production environment is even harder"),Object(c.b)("li",{parentName:"ul"},"Number of environments developers can manage is very limited")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Creating and managing multiple environments requires work and time. Precious time that is better spent on delivering business value.")),Object(c.b)("p",null,"Thanks to Qovery concept of environments, all these problems are solved. New environments are spun up in minutes without any work from your side."),Object(c.b)("h2",{id:"benefits-of-using-qovery-environments"},"Benefits of using Qovery environments"),Object(c.b)(l,{headingDepth:3,hideFeedbackQuestion:!0,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("h3",Object(r.a)({parentName:"li"},{id:"test-new-features-in-a-production-like-environment"}),"Test new features in a production-like environment"),Object(c.b)("p",{parentName:"li"},"Introducing bugs to production is costly. You can't be sure your code works correctly if your testing environment is not the same as production.\nWith Qovery, you can test new features in environments that are identical to your production, so you'll introduce fewer bugs to the product your clients use.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("h3",Object(r.a)({parentName:"li"},{id:"dont-waste-developers-time"}),"Don't waste developers time"),Object(c.b)("p",{parentName:"li"},"Software development teams often implement multiple features at the same time. However, it's prevalent that developers are blocked from delivering new features quickly if they can't freely test their code. Testing features by multiple developers at the same time is often impossible if you have only one or two testing environments. Developers have to wait until their teammates finish with their tests. With Qovery, every developer can work and test his code using his copy of the production environment. No more wasted time. Shorten your development cycle and deliver new features quickly!")))),Object(c.b)("h2",{id:"virtual-branches"},"Virtual Branches"),Object(c.b)("p",null,"You don't have to create a new ",Object(c.b)("inlineCode",{parentName:"p"},"branch_X")," branch in every application of your project to get a fully functional ",Object(c.b)("inlineCode",{parentName:"p"},"branch_X")," environment."),Object(c.b)("p",null,"When ",Object(c.b)("inlineCode",{parentName:"p"},"branch_X")," is missing in part of your applications, Qovery deploys them from your production branch. After you create ",Object(c.b)("inlineCode",{parentName:"p"},"branch_X")," in any\nof your applications, they are automatically redeployed from that branch in this environment."),Object(c.b)("h2",{id:"managing-costs"},"Managing costs"),Object(c.b)("p",null,"To limit costs, you can reduce the number of created environments to specific branches."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"application:\n  name: myapp\n  project: test\n  active_environments:\n  - master\n  - staging\n  - test_x\n")),Object(c.b)("p",null,"The production environment (by default - ",Object(c.b)("inlineCode",{parentName:"p"},"master"),") use high-availability and resiliency systems for applications and databases. We guarantee that your app scales as you need and is available according to our SLAs."))}f.isMDXComponent=!0},246:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,b=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return t?o.a.createElement(b,c({ref:n},u,{components:t})):o.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},268:function(e,n,t){"use strict";var r=t(336),o=t(58);function i(e,n){return n.encode?n.strict?r(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e,n){var t=function(e){var n;switch(e.arrayFormat){case"index":return function(e,t,r){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===r[e]&&(r[e]={}),r[e][n[1]]=t):r[e]=t};case"bracket":return function(e,t,r){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=[t]:r[e]=t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n=o({arrayFormat:"none"},n)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),o=n.shift(),i=n.length>0?n.join("="):void 0;i=void 0===i?null:decodeURIComponent(i),t(decodeURIComponent(o),i,r)})),Object.keys(r).sort().reduce((function(e,n){var t=r[n];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort((function(e,n){return Number(e)-Number(n)})).map((function(e){return n[e]})):n}(t):e[n]=t,e}),Object.create(null))):r},n.stringify=function(e,n){var t=function(e){switch(e.arrayFormat){case"index":return function(n,t,r){return null===t?[i(n,e),"[",r,"]"].join(""):[i(n,e),"[",i(r,e),"]=",i(t,e)].join("")};case"bracket":return function(n,t){return null===t?i(n,e):[i(n,e),"[]=",i(t,e)].join("")};default:return function(n,t){return null===t?i(n,e):[i(n,e),"=",i(t,e)].join("")}}}(n=o({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map((function(r){var o=e[r];if(void 0===o)return"";if(null===o)return i(r,n);if(Array.isArray(o)){var a=[];return o.slice().forEach((function(e){void 0!==e&&a.push(t(r,e,a.length))})),a.join("&")}return i(r,n)+"="+i(o,n)})).filter((function(e){return e.length>0})).join("&"):""}},336:function(e,n,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}}}]);