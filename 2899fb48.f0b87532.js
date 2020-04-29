(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{171:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return p}));var r=n(1),i=n(11),a=(n(0),n(233)),o=n(235),c={id:"navigation-plugin",title:"Navigation"},u={id:"features/navigation-plugin",title:"Navigation",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/../docs/features/navigation-plugin.mdx",permalink:"/docs/features/navigation-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/features/navigation-plugin.mdx",sidebar:"features",previous:{title:"Layout Inspector",permalink:"/docs/features/layout-plugin"},next:{title:"Network",permalink:"/docs/features/network-plugin"}},s=[],l={rightToc:s};function p(t){var e=t.components,n=Object(i.a)(t,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u2192 ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../setup/navigation-plugin"}),"See setup instructions for the Navigation Plugin")),Object(a.b)("p",null,"The Navigation Plugin allows users to quickly navigate to deep links within their mobile applications to help speed up the development cycle. The plugin is designed to integrate easily within your existing navigation framework or as a stand alone tool. Users can bookmark deep links and jump to them via the button in the tool bar."),Object(a.b)("img",{alt:"Navigation Plugin Button",src:Object(o.a)("img/navigation-plugin-1.png")}),Object(a.b)("p",null,"Navigation events within the app can also be logged to Flipper. This allows the user to view past navigation events and jump straight to them, or export the navigation events for reporting."),Object(a.b)("img",{alt:"Navigation Plugin UI",src:Object(o.a)("img/navigation-plugin-2.png")}))}p.isMDXComponent=!0},233:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=i.a.createContext({}),l=function(t){var e=i.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c({},e,{},t)),n},p=function(t){var e=l(t.components);return i.a.createElement(s.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},g=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(n),g=r,b=p["".concat(o,".").concat(g)]||p[g]||f[g]||a;return n?i.a.createElement(b,c({ref:e},s,{components:n})):i.a.createElement(b,c({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},234:function(t,e,n){"use strict";var r=n(0),i=n(56);e.a=function(){return Object(r.useContext)(i.a)}},235:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(236);var r=n(234);function i(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},236:function(t,e,n){"use strict";var r=n(5),i=n(15),a=n(237),o="".startsWith;r(r.P+r.F*n(238)("startsWith"),"String",{startsWith:function(t){var e=a(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,n):e.slice(n,n+r.length)===r}})},237:function(t,e,n){var r=n(80),i=n(22);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},238:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}}}]);