(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(11),i=(r(0),r(233)),s=r(235),o={id:"databases-plugin",title:"Databases"},c={id:"features/databases-plugin",title:"Databases",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/features/databases-plugin.mdx",permalink:"/docs/features/databases-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/databases-plugin.mdx",sidebar:"features",previous:{title:"Network",permalink:"/docs/features/network-plugin"},next:{title:"Images",permalink:"/docs/features/images-plugin"}},u=[],l={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u2192 ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../setup/databases-plugin"}),"See setup instructions for the Databases plugin")),Object(i.b)("p",null,"The Databases plugin provides developers with read-write access to their databases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"browse your tables' data"),Object(i.b)("li",{parentName:"ul"},"see your tables' structure"),Object(i.b)("li",{parentName:"ul"},"execute queries"),Object(i.b)("li",{parentName:"ul"},"mark queries as favorites"),Object(i.b)("li",{parentName:"ul"},"see logs of past executed queries")),Object(i.b)("img",{alt:"Databases Plugin 1",src:Object(s.a)("img/databases-plugin-1.png")}),Object(i.b)("img",{alt:"Databases Plugin 2",src:Object(s.a)("img/databases-plugin-2.png")}),Object(i.b)("p",null,"Note: this plugin is only available for Android."))}p.isMDXComponent=!0},233:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||b[f]||i;return r?a.a.createElement(d,o({ref:t},u,{components:r})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},234:function(e,t,r){"use strict";var n=r(0),a=r(56);t.a=function(){return Object(n.useContext)(a.a)}},235:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(236);var n=r(234);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},236:function(e,t,r){"use strict";var n=r(5),a=r(15),i=r(237),s="".startsWith;n(n.P+n.F*r(238)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,r):t.slice(r,r+n.length)===n}})},237:function(e,t,r){var n=r(80),a=r(22);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},238:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);