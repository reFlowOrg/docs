(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(t,e,n){var r,o="__lodash_hash_undefined__",a=1/0,i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,c=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,u=/\\(\\)?/g,p=/^\[object .+?Constructor\]$/,f="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,h="object"==typeof self&&self&&self.Object===Object&&self,d=f||h||Function("return this")(),g=Array.prototype,_=Function.prototype,v=Object.prototype,y=d["__core-js_shared__"],b=(r=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",w=_.toString,m=v.hasOwnProperty,j=v.toString,x=RegExp("^"+w.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=d.Symbol,O=g.splice,C=N(d,"Map"),M=N(Object,"create"),k=S?S.prototype:void 0,T=k?k.toString:void 0;function V(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function H(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function P(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function $(t,e){for(var n,r=t.length;r--;)if((n=t[r][0])===e||n!=n&&e!=e)return r;return -1}function E(t,e){var n,r=t.__data__;return("string"==(n=typeof e)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r["string"==typeof e?"string":"hash"]:r.map}function N(t,e){var n,r=null==t?void 0:t[e];return!(!R(r)||b&&b in r)&&("[object Function]"==(n=R(r)?j.call(r):"")||"[object GeneratorFunction]"==n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(r)?x:p).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(r))?r:void 0}V.prototype.clear=function(){this.__data__=M?M(null):{}},V.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},V.prototype.get=function(t){var e=this.__data__;if(M){var n=e[t];return n===o?void 0:n}return m.call(e,t)?e[t]:void 0},V.prototype.has=function(t){var e=this.__data__;return M?void 0!==e[t]:m.call(e,t)},V.prototype.set=function(t,e){return this.__data__[t]=M&&void 0===e?o:e,this},H.prototype.clear=function(){this.__data__=[]},H.prototype.delete=function(t){var e=this.__data__,n=$(e,t);return!(n<0)&&(n==e.length-1?e.pop():O.call(e,n,1),!0)},H.prototype.get=function(t){var e=this.__data__,n=$(e,t);return n<0?void 0:e[n][1]},H.prototype.has=function(t){return $(this.__data__,t)>-1},H.prototype.set=function(t,e){var n=this.__data__,r=$(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},P.prototype.clear=function(){this.__data__={hash:new V,map:new(C||H),string:new V}},P.prototype.delete=function(t){return E(this,t).delete(t)},P.prototype.get=function(t){return E(this,t).get(t)},P.prototype.has=function(t){return E(this,t).has(t)},P.prototype.set=function(t,e){return E(this,t).set(t,e),this};var I=Z(function(t){t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(W(t))return T?T.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}(e);var e,n=[];return c.test(t)&&n.push(""),t.replace(s,function(t,e,r,o){n.push(r?o.replace(u,"$1"):e||t)}),n});function Z(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i),i};return n.cache=new(Z.Cache||P),n}Z.Cache=P;var L=Array.isArray;function R(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function W(t){return"symbol"==typeof t||!!t&&"object"==typeof t&&"[object Symbol]"==j.call(t)}t.exports=function(t,e,n){var r=null==t?void 0:function(t,e){var n;e=!function(t,e){if(L(t))return!1;var n=typeof t;return!!("number"==n||"symbol"==n||"boolean"==n||null==t||W(t))||l.test(t)||!i.test(t)||null!=e&&t in Object(e)}(e,t)?L(n=e)?n:I(n):[e];for(var r=0,o=e.length;null!=t&&r<o;)t=t[function(t){if("string"==typeof t||W(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}(e[r++])];return r&&r==o?t:void 0}(t,e);return void 0===r?n:r}},1464:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9137)}])},9137:function(t,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return w},default:function(){return j}});var r,o=n(5893),a=n(9208),i=n.n(a),l=n(7222),c=n(7294);n(2746),"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)});var s=n(2643),u=(0,c.createContext)(!1),p=n(1163);function f({__nextra_pageMap:t,__nextra_dynamic_opts:e,...n}){let{context:r,Layout:a}=function(){let t=globalThis[l.eZ],{route:e}=(0,p.useRouter)();(0,c.useState)({})[1];let n=t.context[e];if(!n)throw Error("No content found for the current route. This is a Nextra bug.");return{context:n,Layout:t.Layout}}(),{Content:i,...s}=r;if(t&&(s.pageOpts={...s.pageOpts,pageMap:t}),e){let{headings:t,title:n,frontMatter:r}=JSON.parse(e);s.pageOpts={...s.pageOpts,headings:t,title:n,frontMatter:r}}return(0,o.jsx)(a,{...s,pageProps:n,children:(0,o.jsx)(u.Provider,{value:n,children:(0,o.jsx)(i,{...n})})})}var h=n(1864),d=n(3859),g=n(2891);function _(t){return g(t.replaceAll(/[-_]/g," "))}function v(t){return!!t&&"object"==typeof t&&"folder"===t.type}function y(t){return Object.fromEntries(Object.entries(t).map(([t,e])=>{if(v(e)){let n=t.replace("/","");return[n,e.title||_(n)]}return[t,e||_(t)]}))}let b=(0,o.jsx)("div",{style:{display:"inline-block"},children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"30",fill:"none",viewBox:"0 0 497.66 101.56",children:[(0,o.jsx)("path",{d:"M68.11,97.45v20.31H37.64V178.7H7.17V97.45Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M78.27,178.7V97.45h71.09v50.78H108.73v10.16h40.63V178.7Zm40.62-50.78V117.76H108.73v10.16Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M190,117.76h40.63v20.32H190V178.7H159.52V77.14h71.09V97.45H190Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M271.23,77.14V178.7H240.77V77.14Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M352.48,97.45V178.7H281.39V97.45Zm-40.62,20.31v40.63H322V117.76Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M454.05,158.39V178.7H423.58V168.54H403.27V178.7H372.8V158.39H362.64V97.45h30.47v50.78h10.16V107.61h20.31v40.62h10.15V97.45H464.2v60.94Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"}),(0,o.jsx)("path",{d:"M504.83,158.39V178.7H474.36V158.39Z",transform:"translate(-7.17 -77.14)",fill:"currentColor"})]})}),w=[];function m(t){let e=Object.assign({h1:"h1",p:"p"},(0,s.a)(),t.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.h1,{children:["Welcome to ",b," Store"]}),"\n",(0,o.jsx)(e.p,{children:"Welcome to the official documentation of reFlow Store, here you will find the installation guides for each resource in our store"})]})}var j=function({pageNextRoute:t,pageOpts:e,nextraLayout:n,themeConfig:o,MDXContent:a,hot:c,pageOptsChecksum:s,dynamicMetaModules:u=[]}){var p;"undefined"==typeof window&&(globalThis.__nextra_resolvePageMap=async()=>{if(r)return r;let t=JSON.parse(JSON.stringify(g.pageMap));return await Promise.all(u.map(async([e,{metaObjectKeyPath:n,metaParentKeyPath:r}])=>{let o=await e,a=await o.default(),l=i()(t,n);l.data=a;let c=i()(t,r);!function t(e,n,r=!0){if(r){t(e,{kind:"Meta",data:n.data,locale:n.locale},!1),n.data=y(n.data);return}for(let[r,a]of Object.entries(n.data)){if(!v(a)){var o;if("*"===r)continue;e.children.push({kind:"MdxPage",...n.locale&&{locale:n.locale},name:r,route:(o=e.route,d(h.join(o,r.replace(/^index$/,""))))});continue}let i=r.replace("/",""),l={kind:"Folder",name:i,route:`${e.route}/${i}`,children:[{kind:"Meta",...n.locale&&{locale:n.locale},data:y(a.items)}]};e.children.push(l),t(l,{kind:"Meta",data:a.items,locale:n.locale},!1)}}(c,l)})),r=t});let g=globalThis[p=l.eZ]||(globalThis[p]=Object.create(null));return e.pageMap?(g.pageMap=e.pageMap,g.Layout=n):(e={...e,pageMap:g.pageMap,flexsearch:g.flexsearch},o=g.themeConfig),e={frontMatter:{},...e},g.route=e.route,g.context||(g.context=Object.create(null)),g.context[t]={Content:a,pageOpts:e,themeConfig:o},f}({MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,s.a)(),t.components);return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)},pageOpts:{filePath:"pages/index.mdx",route:"/",frontMatter:{title:"Welcome"},title:"Welcome",headings:w},pageNextRoute:"/"})},3859:function(t){"use strict";t.exports=t=>{let e=/^\\\\\?\\/.test(t),n=/[^\u0000-\u0080]+/.test(t);return e||n?t:t.replace(/\\/g,"/")}},2891:function(t,e,n){let r=n(1439),o=n(7224),a="[^\\s'’\\(\\)!?;:\"-]",i=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),l=t=>t.map(t=>[RegExp(`\\b${t}\\b`,"gi"),t]);t.exports=(t,e={})=>{t=t.toLowerCase().replace(i,(t,e="",n,o,a,i,l)=>{let c=t.length+i>=l.length,s=function(t){let e=t[0];return/\s/.test(e)?t.slice(1):/[\(\)]/.test(e)?null:t}(t);return s?!n&&r.has(o+a)&&!c?s:e+(o||n).toUpperCase()+a:t});let n=e.special||[],a=[...o,...n],c=l(a);return c.forEach(([e,n])=>{t=t.replace(e,n)}),t}},1439:function(t){t.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(t){t.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},2746:function(t,e,n){n(5893)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=1464)}),_N_E=t.O()}]);