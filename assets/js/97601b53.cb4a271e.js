(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97432],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},19756:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74913:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={slug:"2021-10-14-Taro-React-Native-update",title:"Taro React Native \u91cd\u5927\u66f4\u65b0\uff1a\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u5f00\u53d1APP",author:"zhiqingchen",author_url:"https://github.com/zhiqingchen",author_image_url:"https://avatars1.githubusercontent.com/u/1876158?s=88&u=0305430cab9f7a516c720e7fc7f8680df1c835b9&v=4",tags:["v3"],description:"\u4e09\u4e2a\u65b9\u5411\u53bb\u4f18\u5316\u5f00\u53d1\u6d41\u7a0b\uff0c\u5168\u9762\u964d\u4f4e\u4e0a\u624b\u6210\u672c\uff0c\u8ba9 Taro \u5f00\u53d1 APP\uff0c\u53d8\u5f97\u65e0\u6bd4\u8f7b\u677e\u3002"},l={permalink:"/taro/blog/2021-10-14-Taro-React-Native-update",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-10-14-Taro-React-Native-update.md",source:"@site/blog/2021-10-14-Taro-React-Native-update.md",title:"Taro React Native \u91cd\u5927\u66f4\u65b0\uff1a\u5e2e\u52a9\u5f00\u53d1\u8005\u9ad8\u6548\u5f00\u53d1APP",description:"\u4e09\u4e2a\u65b9\u5411\u53bb\u4f18\u5316\u5f00\u53d1\u6d41\u7a0b\uff0c\u5168\u9762\u964d\u4f4e\u4e0a\u624b\u6210\u672c\uff0c\u8ba9 Taro \u5f00\u53d1 APP\uff0c\u53d8\u5f97\u65e0\u6bd4\u8f7b\u677e\u3002",date:"2021-10-14T00:00:00.000Z",formattedDate:"2021\u5e7410\u670814\u65e5",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],readingTime:4.38,truncated:!1,nextItem:{title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.3 \u7248\u672c\uff1a\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u4e0e\u6846\u67b6 DevTools",permalink:"/taro/blog/2021-08-13-Taro-3.3"}},p=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"react-native \u5f00\u53d1\u6a21\u677f",id:"react-native-\u5f00\u53d1\u6a21\u677f",children:[]},{value:"GitHub Actions",id:"github-actions",children:[]},{value:"GitHub Actions \u914d\u7f6e",id:"github-actions-\u914d\u7f6e",children:[]},{value:"\u58f3\u5de5\u7a0b GitHub Actions \u65b9\u6848",id:"\u58f3\u5de5\u7a0b-github-actions-\u65b9\u6848",children:[]},{value:"\u6a21\u677f\u63d0\u4f9b\u7684 iOS \u6253\u5305\u65b9\u6848",id:"\u6a21\u677f\u63d0\u4f9b\u7684-ios-\u6253\u5305\u65b9\u6848",children:[]},{value:"\u6a21\u677f\u63d0\u4f9b\u7684 Android \u6253\u5305\u65b9\u6848",id:"\u6a21\u677f\u63d0\u4f9b\u7684-android-\u6253\u5305\u65b9\u6848",children:[]},{value:"Taro Playground APP",id:"taro-playground-app",children:[{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",children:[]},{value:"\u793a\u5217\u4ee3\u7801",id:"\u793a\u5217\u4ee3\u7801",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",children:[]}],c={toc:p};function s(e){var t,n,o,l,p,s,u=e.components,d=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,d,{components:u,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Taro React Native \u91cd\u5927\u66f4\u65b0\u6765\u4e86\uff0c\u5168\u65b9\u4f4d\u964d\u4f4e\u4e0a\u624b\u6210\u672c\uff0c\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c\u3002\u5168\u6d41\u7a0b\u81ea\u52a8\u5316\uff0c\u8ba9\u5f00\u53d1\u8005\u6446\u8131\u539f\u751f\u73af\u5883\u914d\u7f6e\uff0c\u4e13\u6ce8\u524d\u7aef\u5f00\u53d1\u3002"),(0,i.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,i.kt)("p",null,"Taro 3.2.0 \u6b63\u5f0f\u7248\u672c\u53d1\u5e03\u81f3\u4eca\uff0c\u5df2\u8fc7\u53bb\u534a\u5e74\u3002\u5728\u6b64\u671f\u95f4\uff0c\u6709\u4e0d\u5c11\u793e\u533a\u5f00\u53d1\u8005\u5df2\u7ecf\u4f7f\u7528\u4e0a Taro \u6765\u5f00\u53d1 APP \u4e86\u3002\u770b\u5230\u793e\u533a\u7684\u4f7f\u7528\u91cf\u8d8a\u6765\u8d8a\u591a\uff0c\u5f00\u53d1\u56e2\u961f\u4e5f\u662f\u6536\u83b7\u6ee1\u6ee1\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u6536\u5230\u4e86\u5f88\u591a\u6765\u81ea\u5f00\u53d1\u8005\u7684\u53cd\u9988\uff0c\b\u4e3b\u8981\u96c6\u4e2d\u4e8e\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u590d\u6742\u3001\u7ec4\u4ef6\u548c API \u7684\u5b8c\u5584\u5ea6\u4e0d\u591f\u53ca\u4f7f\u7528\u4e0a\u7684 BUG \u7b49\u3002\u5bf9\u4e8e\u7ec4\u4ef6\u548c API \u7684\u5b8c\u5584\u5ea6\u53ca\u4f7f\u7528\u4e0a\u7684 BUG\uff0c\u6211\u4eec\u90fd\u662f\u5c3d\u53ef\u80fd\u5730\u53ca\u65f6\u5730\u5904\u7406\u5e76\u53d1\u5e03\u65b0\u7248\u672c\u3002\u7136\u800c\uff0c\u5bf9\u4e8e\u5f00\u53d1\u8005\u53cd\u9988\u7684\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u7684\u95ee\u9898\uff0c\u5374\u5f88\u96be\u590d\u73b0\u53ca\u89e3\u51b3\u3002"),(0,i.kt)("p",null,"\u9996\u5148 Android + iOS + React Native + Taro\uff0c4\u4e2a\u6280\u672f\u7684\u5404\u79cd\u73af\u5883\u914d\u7f6e\uff0c\u4f1a\u8ba9\u5f88\u591a\u5f00\u53d1\u8005\u671b\u800c\u5374\u6b65\u3002\u5176\u6b21\u5f00\u53d1\u8005\u9762\u5bf9\u7684\u73af\u5883\u95ee\u9898\u5343\u5947\u767e\u602a\uff0c\u5f88\u591a\u95ee\u9898\u96be\u4ee5\u901a\u8fc7\u8fdc\u7a0b\u534f\u52a9\u89e3\u51b3\u3002\u4e0d\u5c11\u5f00\u53d1\u8005\u5728\u8c03\u7814\u9636\u6bb5\uff0c\u56e0\u4e3a\u65e0\u6cd5\u987a\u5229\u8fd0\u884c\uff0c\u4fbf\u653e\u5f03\u4e86\u4f7f\u7528\u3002\u5bf9\u4e8e\u4e00\u4e2a\u8de8\u5e73\u53f0\u6846\u67b6\u6765\u8bf4\uff0c\u4e3b\u8981\u76ee\u7684\u662f\u63d0\u6548\uff0c\u800c\u975e\u7ed9\u5f00\u53d1\u8005\u5e26\u6765\u66f4\u591a\u56f0\u96be\u3002\u5f00\u53d1\u73af\u5883\u914d\u7f6e\u95ee\u9898\u7684\u89e3\u51b3\uff0c\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u3002"),(0,i.kt)("p",null,"\u8fd9\u6b21\u6211\u4eec\u4ece\u4ee5\u4e0b\u4e09\u4e2a\u65b9\u5411\u53bb\u4f18\u5316\u6574\u4e2a\u5f00\u53d1\u6d41\u7a0b\uff0c\u5168\u9762\u964d\u4f4e\u4e0a\u624b\u6210\u672c\uff0c\u8ba9 Taro \u5f00\u53d1 APP\uff0c\u53d8\u5f97\u65e0\u6bd4\u8f7b\u677e\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4e3a Taro \u63d0\u4f9b react-native \u6a21\u677f\uff0c\u9879\u76ee\u7684\u521d\u59cb\u5316\uff0c\u53ea\u9700\u8981\u51e0\u4e2a\u547d\u4ee4\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e0e GitHub Actions \u8fdb\u884c\u96c6\u6210\uff0c\u4e0d\u518d\u9700\u8981\u672c\u5730\u5b89\u88c5\u539f\u751f\u5f00\u53d1\u73af\u5883\uff0c\u6253\u5305\u53ca\u53d1\u5e03\u4ea4\u7ed9 CI \u53bb\u505a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u4f9b Taro Playground APP\uff0c\u53ef\u4ee5\u901a\u8fc7\u5e94\u7528\u5546\u5e97\u6216\u8005 GitHub \u4e0b\u8f7d\u5b89\u88c5\uff0c\u8fdb\u884c\u9879\u76ee\u8c03\u8bd5\u3002")),(0,i.kt)("h2",{id:"react-native-\u5f00\u53d1\u6a21\u677f"},"react-native \u5f00\u53d1\u6a21\u677f"),(0,i.kt)("p",null,"\u76ee\u524d\u4f7f\u7528 Taro \u5f00\u53d1 React Native APP \u65f6\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u539f\u751f\u58f3\u5de5\u7a0b\uff0c\u5728\u53e6\u5916\u4e00\u4e2a\u4ed3\u5e93","[1]","\u3002\u5bf9\u4e8e\u65b0\u624b\u6765\u8bf4\uff0c\u901a\u5e38\u4f1a\u9020\u6210\u4e00\u4e9b\u56f0\u60d1\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u63a5\u89e6\u8fc7 React Native \u5f00\u53d1\u7684\u5f00\u53d1\u8005\u9996\u5148\u9700\u8981\u7406\u89e3 React Native \u7684\u5f00\u53d1\u6d41\u7a0b\uff0c\u7136\u540e\u5b8c\u6210\u4e24\u4e2a\u4ed3\u5e93\u7684\u521d\u59cb\u5316\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u4ed3\u5e93\u90fd\u9700\u8981\u5b89\u88c5\u4f9d\u8d56\uff0c\u5e76\u4e14\u9700\u8981\u4fdd\u6301\u67d0\u4e9b\u4f9d\u8d56\u7248\u672c\u7684\u4e00\u81f4\u6027\u3002\u5f53\u6709\u4f9d\u8d56\u66f4\u65b0\u65f6\uff0c\u9700\u8981\u5728\u4e24\u4e2a\u4ed3\u5e93\u4e2d\u8fdb\u884c\u64cd\u4f5c\uff0c\u975e\u5e38\u5bb9\u6613\u9057\u6f0f\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u9879\u76ee\u4f9d\u8d56\u539f\u751f\u7684\u8fd0\u884c\u73af\u5883\u3002\u5f00\u53d1\u8005\u7ecf\u5e38\u9047\u5230\u5b89\u88c5\u8fc7\u7a0b\u62a5\u9519\uff0c\u65e0\u6cd5\u8fd0\u884c\u7684\u573a\u666f\u3002\u4e00\u4e9b\u4f9d\u8d56\u5305\u7684\u4e0b\u8f7d\u9700\u8981\u5207\u6362\u6e90\u6216\u4f9d\u8d56\u7279\u5b9a\u7f51\u7edc\u73af\u5883\u3002")),(0,i.kt)("p",null,"\u8fd9\u4e9b\u95ee\u9898\u5bf9\u65b0\u624b\u5165\u95e8\u5f88\u4e0d\u53cb\u597d\uff0c\u4e3a\u6b64\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u521d\u59cb\u5316\u6a21\u677f","[2]","\u3002\u521d\u59cb\u5316\u9879\u76ee\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"taro init [project]")," \u9009\u62e9 react-native \u6a21\u677f\u3002"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\u6210\u540e\uff0c\u4fbf\u53ef\u4f7f\u7528\u8fdb\u5165\u5f00\u53d1\u3002\u4ee5\u4e0b\u4e3a\u4e00\u4e9b\u5e38\u7528\u547d\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u66f4\u65b0\u76f8\u5173\u4f9d\u8d56\u3002\u5728\u521d\u59cb\u5316\u5b8c\u6210\u540e\u6216 Taro \u7248\u672c\u66f4\u65b0\u540e\u6267\u884c\uff0c\u7528\u4e8e\u540c\u6b65 peerDependencies\u3002\n$ yarn upgradePeerdeps\n\n# \u6253\u5305 js bundle \u53ca\u9759\u6001\u8d44\u6e90\u3002\u5728\u521d\u59cb\u5316\u5b8c\u6210\u540e\u6267\u884c\uff0c\u7528\u4e8e\u6253\u5305\u9ed8\u8ba4\u4f7f\u7528\u7684 bundle\u3002\n$ yarn build:rn --platform ios\n\n# \u542f\u52a8 bundle server\n$ yarn start\n\n# \u542f\u52a8 iOS\n$ yarn ios\n\n# \u542f\u52a8\u5b89\u5353\n$ yarn android\n")),(0,i.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b\u5f55\u5c4f\uff1a"),(0,i.kt)("video",{controls:!0,width:"600",src:"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/6820cfd5e0346eac050e7c3f0df78f65.mp4"}),(0,i.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u65b9\u5f0f\u8fdb\u884c\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u6709\u51e0\u4e2a\u4f18\u52bf\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Taro \u4ed3\u5e93\u4e0e\u58f3\u5de5\u7a0b\u4ed3\u5e93\u8fdb\u884c\u6574\u5408\uff0c\u4e0d\u518d\u9700\u8981\u7ba1\u7406\u53cc\u4ed3\u5e93\u3002\u5f53\u7136\u4e60\u60ef\u53cc\u4ed3\u5e93\u6a21\u5f0f\u7684\u5f00\u53d1\u8005\uff0c\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5f53 Taro \u8fdb\u884c\u5347\u7ea7\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn upgradePeerdeps"),"\u8fdb\u884c\u4f9d\u8d56\u540c\u6b65\u3002\u8fd9\u91cc\u6211\u4eec\u5c06 Taro \u4f9d\u8d56\u7684 React Native \u76f8\u5173\u5e93\u5199\u5165\u4e86 peerDependencies \u4e2d\uff0c\u7136\u540e\u901a\u8fc7 install-peerdeps \u53bb\u5b8c\u6210\u4f9d\u8d56\u7684\u540c\u6b65\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u96c6\u6210\u4e86 GitHub Actions\uff0c\u53ef\u901a\u8fc7 workflow \u5b8c\u6210 APP \u7684\u6253\u5305\u3002")),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"\u8981\u89e3\u51b3\u5f00\u53d1\u73af\u5883\u7684\u5404\u79cd\u95ee\u9898\uff0c\u901a\u5e38\u7684\u505a\u6cd5\u5c31\u662f\u63d0\u4f9b\u4e00\u4e2a\u7a33\u5b9a\u7684\u73af\u5883\u7528\u4e8e\u6253\u5305\u53d1\u5e03\uff0c\u5728\u4f01\u4e1a\u91cc\u662f\u5404\u79cd CI/CD \u5e73\u53f0\u3002\u4f46\u5bf9\u4e8e\u5f00\u6e90\u9879\u76ee\u6765\u8bb2\uff0c\u5c31\u9700\u8981\u4e00\u4e2a\u516c\u5f00\u7684\u5e73\u53f0\uff0c\u6bcf\u4e2a\u4eba\u90fd\u80fd\u4f7f\u7528\uff0c\u5f53\u7136\u6700\u597d\u662f\u514d\u8d39\u7684\u3002\u4e8e\u662f\u6211\u4eec\u60f3\u5230\u4e86 GitHub Actions\u3002"),(0,i.kt)("p",null,"GitHub Actions \u662f GitHub \u63d0\u4f9b\u7684\u6301\u7eed\u96c6\u6210\u670d\u52a1\uff0c\u4e8e 2018 \u5e74 10 \u6708\u63a8\u51fa\u3002\u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0c\u5e76\u4e14\u514d\u8d39\uff08\u6bcf\u6708\u6709\u9650\u989d\uff09\uff0c\u540c\u65f6\u79c1\u6709\u4ed3\u5e93\u4e5f\u80fd\u591f\u4f7f\u7528\uff0c\u975e\u5e38\u5951\u5408\u6211\u4eec\u7684\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u521d\u59cb\u5316\u7684\u9879\u76ee\uff0c\u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," \u76ee\u5f55\u4e2d\u770b\u5230 4 \u4e2a\u6587\u4ef6\u3002\u5206\u522b\u4e3a iOS \u548c Android \u7684 release \u5305\u548c debug \u5305\u7684\u6253\u5305\u5de5\u4f5c\u6d41\u3002\u6a21\u677f\u4e3a\u4e86\u7b80\u5316\u8fc7\u7a0b\uff0c\u8bbe\u7f6e\u4e3a\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," \u5373\u53ef\u89e6\u53d1\u6253\u5305\uff0c\u53ef\u6839\u636e\u81ea\u8eab\u60c5\u51b5\uff0c\u914d\u7f6e\u5408\u9002\u81ea\u8eab\u4e1a\u52a1\u573a\u666f\u7684\u5de5\u4f5c\u6d41\u3002\u6253\u5305\u751f\u6210\u7684\u4ea7\u7269\u53ef\u4ee5\u5728 Artifacts \u4e2d\u627e\u5230\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"softprops/action-gh-release@v1")," action\uff0c\u5c06\u4ea7\u7269\u53d1\u5e03\u5230\u9879\u76ee\u7684 Release \u4e2d\u3002"),(0,i.kt)("img",((t={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",t.referrerPolicy="no-referrer",t.src="https://pic4.58cdn.com.cn/nowater/fangfe/n_v275b68e363e1d459ead128302fe0f8581.jpg",t.width="600px",t)),(0,i.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\u65b0\u624b\u4fbf\u53ef\u4ee5\u4e0d\u9700\u8981\u5173\u6ce8\u539f\u751f\u73af\u5883\u4ee5\u53ca APP \u6253\u5305\u7684\u95ee\u9898\u3002\u5f00\u53d1\u65f6\uff0c\u53ef\u4ee5\u5b89\u88c5 debug \u5305\u52a0\u8f7d\u672c\u5730\u7684 jsbundle\uff0c\u8fdb\u884c\u8c03\u8bd5\u3002\u53d1\u5e03\u65f6\uff0c\u4ea4\u7ed9 CI \u8fdb\u884c\u6253\u5305\uff0c\u4ea7\u7269\u518d\u63d0\u4ea4\u5230\u5e94\u7528\u5e02\u573a\uff0c\u6574\u4e2a\u8fc7\u7a0b\u5b8c\u5168\u4e0d\u9700\u8981 AS \u4e0e XCode\u3002\u5f53\u7136\u8fd9\u91cc\u8fd8\u6709\u4e00\u4e9b\u5fc5\u8981\u914d\u7f6e\u9700\u8981\u505a\uff0c\u6bd4\u5982 APP \u7684\u7b7e\u540d\u7b49\uff0c\u5c06\u5728\u540e\u9762\u7684\u7ae0\u8282\u8bb2\u89e3\u3002"),(0,i.kt)("p",null,"GitHub Actions \u529f\u80fd\u975e\u5e38\u5f3a\u5927\uff0cTaro \u5c31\u7528\u5b83\u6765\u505a\u6253\u5305\u53d1\u5e03\u7b49\u5de5\u4f5c\uff0c\u53ef\u53c2\u8003\u6587\u6863","[3]","\u6216\u67e5\u770b\u8d44\u6599\u505a\u8fdb\u4e00\u6b65\u63a2\u7d22\uff0c\u505a\u70b9\u6709\u8da3\u7684\u4e8b\u60c5\u3002"),(0,i.kt)("h2",{id:"github-actions-\u914d\u7f6e"},"GitHub Actions \u914d\u7f6e"),(0,i.kt)("p",null,"\u5728 Taro \u9879\u76ee\u6a21\u677f\u91cc\u9762\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a CI \u811a\u672c\u6a21\u677f\uff0c\u5f00\u53d1\u8005\u4ecd\u7136\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\uff0c\u624d\u80fd\u591f\u5f00\u59cb\u6253\u5305\u3002\u4e0b\u9762\u662f\u6253\u5305 Android APP \u7684\u57fa\u7840\u914d\u7f6e\u8bf4\u660e\uff0ciOS \u540c\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6253\u5305\u7684\u73af\u5883\u53d8\u91cf"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"env:\n    APP_ID: com.taro.demo  # \u5e94\u7528 ID\n    APP_NAME: Taro Demo  # \u5e94\u7528\u540d\u79f0\n    VERSION_NAME: 1.0.0 # \u5e94\u7528\u7248\u672c\u53f7\n    VERSION_CODE: 10 # \u7528\u4e8e\u5e94\u7528\u5e02\u573a\u3001\u7a0b\u5e8f\u5185\u90e8\u8bc6\u522b\u7248\u672c\uff0c\u5224\u65ad\u65b0\u65e7\u7248\u672c\uff0c\u4e00\u822c\u9012\u589e\u5904\u7406\n    KEYSTORE_FILE: debug.keystore # \u7b7e\u540d\u6587\u4ef6\n    KEYSTORE_PASSWORD: android # \u5bc6\u7801\n    KEYSTORE_KEY_ALIAS: androiddebugkey # \u522b\u540d\n    KEYSTORE_KEY_PASSWORD: android # \u522b\u540d\u7684\u5bc6\u7801\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7 github secrets \u7ba1\u7406\u79d8\u94a5\u914d\u7f6e"),(0,i.kt)("img",((n={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",n.referrerPolicy="no-referrer",n.src="https://pic8.58cdn.com.cn/nowater/fangfe/n_v257e556d325fa4ee99a96e3a46a976f18.png",n.width="600px",n)),(0,i.kt)("p",{parentName:"li"},"  \u901a\u5e38\u6211\u4eec\u4e0d\u5e94\u8be5\u628a\u5bc6\u94a5\u7b49\u654f\u611f\u4fe1\u606f\u76f4\u63a5\u5199\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u800c\u662f\u7f6e\u4e8e\u52a0\u5bc6\u4fe1\u606f\u4e2d\u3002\u5728 GitHub Actions \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528\u52a0\u5bc6\u673a\u5236\u8fdb\u884c\u5904\u7406","[4]","\u3002\u5982\u56fe\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"setting")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," \u914d\u4e0a CI \u9700\u8981\u7684 secret\u3002\u7136\u540e\u5728 workflow \u4e2d\u901a\u8fc7\u76f8\u5e94\u53d8\u91cf\u8fdb\u884c\u4f7f\u7528\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"${{secrets.DEBUG_KEYSTORE_PASSWORD}}"),"\u3002"))),(0,i.kt)("h2",{id:"\u58f3\u5de5\u7a0b-github-actions-\u65b9\u6848"},"\u58f3\u5de5\u7a0b GitHub Actions \u65b9\u6848"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u58f3\u5de5\u7a0b\u4e0e\u9879\u76ee\u5de5\u7a0b\u5206\u5f00\u7684\u573a\u666f\uff0c\u5229\u7528 CI \u547d\u4ee4\u5c06\u4e24\u4e2a\u9879\u76ee\u8fdb\u884c\u5408\u5e76\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u6253\u5305\u81ea\u52a8\u5316\u3002\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u58f3\u5de5\u7a0b\u548c\u4e1a\u52a1\u9879\u76ee\u5408\u5e76"),(0,i.kt)("p",{parentName:"li"},"\u56e0\u4e3a GitHub Actions \u53ea\u80fd\u5728\u5f53\u524d\u9879\u76ee\u4e0b\u8fdb\u884c\u64cd\u4f5c\uff0c\u6240\u4ee5\u9700\u8981\u5c06\u58f3\u5de5\u7a0b\uff08taro-native-shell\uff09\u5408\u5e76\u5230\u9879\u76ee\u5de5\u7a0b\u4e0b\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5408\u5e76\u9879\u76ee\u548c\u58f3\u5de5\u7a0b\u7684 package.json"),(0,i.kt)("p",{parentName:"li"},"\u5728\u6709\u539f\u751f\u4f9d\u8d56\u7684\u60c5\u51b5\u4e0b\uff0c\u5fc5\u987b\u4fdd\u8bc1\u58f3\u5de5\u7a0b\u548c\u4e1a\u52a1\u9879\u76ee\u7684\u539f\u751f\u4f9d\u8d56\u7248\u672c\u4e00\u81f4\uff0c\u4e0d\u7136\u6253\u5305\u53ef\u80fd\u4f1a\u62a5\u9519\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",{parentName:"li"},"\u5728\u4e1a\u52a1\u9879\u76ee\u5de5\u7a0b\u4e0b\u5b89\u88c5\u5408\u5e76\u540e\u7684 package.json \u4f9d\u8d56\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6f\u94fe\u4f9d\u8d56"),(0,i.kt)("p",{parentName:"li"},"\u5c06\u5b89\u88c5\u5230\u4e1a\u52a1\u9879\u76ee\u4e0b\u7684\u4f9d\u8d56\u8f6f\u94fe\u81f3\u58f3\u5de5\u7a0b\u9879\u76ee node_module \u4e0b\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s ./node_modules ./taro-native-shell/node_modules\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e1a\u52a1\u9879\u76ee\u7f16\u8bd1"),(0,i.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"taro/cli build:rn")," \u7f16\u8bd1\u547d\u4ee4\uff0c\u6253\u5305\u751f\u6210 jsbundle \u4e0e\u9759\u6001\u8d44\u6e90\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u7f16\u8bd1\u4ea7\u7269\u79fb\u52a8\u5230\u539f\u751f\u58f3\u5de5\u7a0b"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"rn: {\n  appName: 'taroDemo',\n  output: {\n    ios: './ios/main.jsbundle',\n    iosAssetsDest: './ios',\n    android: './android/app/src/main/assets/index.android.bundle',\n    androidAssetsDest: './android/app/src/main/res',\n    iosSourcemapOutput: './ios/main.map',\n    androidSourcemapOutput: './android/app/src/main/assets/index.android.map',\n  },\n}\n")),(0,i.kt)("p",{parentName:"li"},"taro \u7f16\u8bd1 rn \u8f93\u51fa\u9759\u6001\u8d44\u6e90\uff0c\u9700\u8981\u5c06\u8d44\u6e90\u79fb\u5230\u539f\u751f\u9879\u76ee\u4e2d\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u539f\u751f APP"),(0,i.kt)("p",{parentName:"li"},"\u5230 ios \u548c android \u76ee\u5f55\u91cc\u5206\u522b\u6267\u884c\u5bf9\u5e94\u7684\u6253\u5305\u547d\u4ee4\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4e0a\u4f20 APP"),(0,i.kt)("p",{parentName:"li"},"\u5c06\u6253\u5305\u540e\u7684 APP \u8fdb\u884c\u4e0a\u4f20\uff0c\u63d0\u4f9b\u4e0b\u8f7d\u94fe\u63a5\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"# iOS\n- name: Upload iOS Products\n  uses: actions/upload-artifact@v2\n  with:\n    name: app-${{ env.BUILD_TYPE }}\n    path: |\n      ${{ github.workspace }}/ios/taroDemo.ipa\n      ${{ github.workspace }}/ios/taroDemo.app.dSYM.zip\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"# Android\n- name: Upload Android Products\n  uses: actions/upload-artifact@v2\n  with:\n    name: app-${{ env.BUILD_TYPE }}\n    path: ${{ github.workspace }}/android/app/build/outputs/apk/${{ env.BUILD_TYPE }}/app-${{ env.BUILD_TYPE }}.apk\n")),(0,i.kt)("p",{parentName:"li"},"\u5728 iOS \u4fa7\uff0crelease workflow \u8fd8\u96c6\u6210\u4e86\u4e0a\u4f20\u81f3 APP Store \u547d\u4ee4\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'- name: Upload app to App Store Connect\n  env:\n    APP_STORE_CONNECT_USERNAME: ${{ env.APP_STORE_CONNECT_USERNAME }}\n    APP_STORE_CONNECT_PASSWORD: ${{ env.APP_STORE_CONNECT_PASSWORD }}\n  run: |\n    cd ios\n    xcrun altool --upload-app -t ios -f "taroDemo.ipa" -u "$APP_STORE_CONNECT_USERNAME" -p "$APP_STORE_CONNECT_PASSWORD"\n')))),(0,i.kt)("p",null,"\u4e0a\u9762\u6574\u4e2a\u6d41\u7a0b\u5bf9\u4e8e\u5f00\u53d1\u8005\u6765\u8bf4\u7406\u89e3\u6210\u672c\u592a\u9ad8\uff0c\u914d\u7f6e\u8fc7\u4e8e\u7e41\u7410\uff0c\u6240\u4ee5\u6211\u4eec\u5c06\u524d 6 \u4e2a\u6b65\u9aa4\u5c01\u88c5\u6210\u4e00\u4e2a GitHub action","[5]","\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u8981\u6dfb\u52a0\u4e00\u4e9b\u914d\u7f6e\u9879\u5c31\u80fd\u5b8c\u6210\u4e0a\u9762\u7684\u6d41\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"- name: taro-native-publish\n  uses: shinken008/taro-native-publish@0.4.0\n  with:\n    REPO: ${{ env.SHELL_REPO }}\n    REPO_REF: ${{ env.SHELL_REPO_REF }}\n    REPO_PATH: taro-native-shell\n    BUILD_CMD: yarn build:rn\n    IOS_BUNDLE: ios/main.jsbundle\n    IOS_ASSETS: ios\n    ANDROID_BUNDLE: android/index.android.bundle\n    ANDROID_ASSETS: android\n    PLATFORM: android\n")),(0,i.kt)("p",null,"\u5bf9\u5e94\u7684\u9700\u8981\u62c9\u53d6\u7684\u53e6\u4e00\u4e2a\u4ed3\u5e93\u7684\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"env:\n  # \u58f3\u5de5\u7a0b\n  SHELL_REPO: NervJS/taro-native-shell\n  # \u58f3\u5de5\u7a0bref\n  SHELL_REPO_REF: 0.63.2\n  # \u58f3\u5de5\u7a0b\u76ee\u5f55\n  SHELL_REPO_PATH: taro-native-shell\n")),(0,i.kt)("p",null,"\u914d\u7f6e\u4ecb\u7ecd:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"REPO\uff1a \u58f3\u5de5\u7a0b\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"REPO_REF\uff1a \u58f3\u5de5\u7a0b\u5206\u652f"),(0,i.kt)("li",{parentName:"ul"},"SHELL_REPO_PATH\uff1a \u58f3\u5de5\u7a0b\u76ee\u5f55"),(0,i.kt)("li",{parentName:"ul"},"IOS_BUNDLE\uff1a \u7f16\u8bd1 iOS \u540e\u7684 js bundle \u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"IOS_ASSETS\uff1a \u7f16\u8bd1 iOS \u540e\u7684\u5176\u4ed6\u9759\u6001\u6587\u4ef6\uff08\u56fe\u7247\u7b49\uff09\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"ANDROID_BUNDLE\uff1a \u7f16\u8bd1 Android \u540e\u7684 js bundle \u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"ANDROID_ASSETS\uff1a \u7f16\u8bd1 Android \u540e\u7684\u5176\u4ed6\u9759\u6001\u6587\u4ef6\uff08\u56fe\u7247\u7b49\uff09\u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},"PLATFORM\uff1a\u7f16\u8bd1\u7684\u76ee\u6807\u5e73\u53f0 ios/android")),(0,i.kt)("h2",{id:"\u6a21\u677f\u63d0\u4f9b\u7684-ios-\u6253\u5305\u65b9\u6848"},"\u6a21\u677f\u63d0\u4f9b\u7684 iOS \u6253\u5305\u65b9\u6848"),(0,i.kt)("p",null,"iOS APP \u7684\u6253\u5305\u8fc7\u7a0b\u76f8\u5bf9\u7e41\u7410\uff0c\u8fd9\u91cc\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u4e86\u4e00\u4e2a\u4f18\u79c0\u7684\u5de5\u5177 fastlane","[6]","\u3002fastlane \u662f\u4e00\u4e2a\u4e3a iOS \u548c Android \u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u81ea\u52a8\u6267\u884c\u7e41\u7410\u7684\u4efb\u52a1\uff0c\u5982\u751f\u6210\u5c4f\u5e55\u622a\u56fe\u3001\u5904\u7406\u914d\u7f6e\u6587\u4ef6\u548c\u53d1\u5e03\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("p",null,"\u6253\u5305\u8fc7\u7a0b\u4e2d\u7684 info plist \u6587\u4ef6\u4fee\u6539\u3001\u7248\u672c\u53f7\u4fee\u6539\u3001\u7b7e\u540d\u8bbe\u7f6e\u90fd\u53ef\u4ee5\u4ea4\u7ed9 fastlane \u53bb\u5904\u7406\uff0c\u7ecf\u8fc7 fastlane \u7684\u5c01\u88c5\uff0c\u5f00\u53d1\u8005\u5904\u7406\u8fd9\u4e9b\u7e41\u7410\u7684\u4efb\u52a1\uff0c\u53ea\u9700\u8981\u6dfb\u52a0\u51e0\u884c\u914d\u7f6e\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u8981\u8ba9 fastlane \u5728 GitHub Actions \u4f7f\u7528\uff0c\u8fd8\u9700\u8981\u51e0\u6b65\u64cd\u4f5c\u3002\u56e0\u4e3a\u8bc1\u4e66\uff08Certificate\uff09\u4e0e\u63cf\u8ff0\u6587\u4ef6\uff08Provisioning Profiles\uff09\u5e76\u4e0d\u5b58\u50a8\u5728\u9879\u76ee\u4ed3\u5e93\u4e2d\uff0c\u800c\u6bcf\u6b21\u5de5\u4f5c\u6d41\u90fd\u662f\u53d1\u751f\u5728\u968f\u673a\u7684\u4e3b\u673a\u4e0a\u7684\uff0c\u8fd9\u5c31\u9700\u8981\u6211\u4eec\u5728\u6253\u5305\u524d\uff0c\u5148\u5c06\u8bc1\u4e66\u4e0e\u63cf\u8ff0\u6587\u4ef6\u5bfc\u5165\u5230\u5f53\u524d\u4e3b\u673a\u4e2d\u3002"),(0,i.kt)("p",null,"Release \u8bc1\u4e66\u7684\u5bfc\u5165\u8fc7\u7a0b\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u8bc1\u4e66\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"p12")," \u6587\u4ef6\u8f6c\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," \u5b57\u7b26\u4e32\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat Certificates.p12 | base64 | pbcopy\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06\u7b2c\u4e00\u6b65\u5185\u5bb9\u4fdd\u5b58\u5728\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"RELEASE_SIGNING_CERTIFICATE_P12_DATA"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"p12")," \u6587\u4ef6\u7684\u5bc6\u7801\u4fdd\u5b58\u5728\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," \u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"RELEASE_SIGNING_CERTIFICATE_PASSWORD"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," \u5185\u914d\u7f6e\u7684\u76f8\u5173\u4fe1\u606f\u5bfc\u5165\u5230\u4e3b\u673a\u4e2d\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"security import <(echo $SIGNING_CERTIFICATE_P12_DATA | base64 --decode) \\\n    -f pkcs12 \\\n    -k build.keychain \\\n    -P $SIGNING_CERTIFICATE_PASSWORD \\\n    -T /usr/bin/codesign\n")))),(0,i.kt)("p",null,"\u63cf\u8ff0\u6587\u4ef6\u7684\u5bfc\u5165\u8fc7\u7a0b\uff0c\u4e0e\u8bc1\u4e66\u7684\u5bfc\u5165\u8fc7\u7a0b\u7c7b\u4f3c\uff0c\u5747\u5df2\u5c01\u88c5\u5728 workflow \u4e2d\u3002"),(0,i.kt)("p",null,"\u8981\u5c06\u751f\u6210\u7684 ipa \u6587\u4ef6\u4e0a\u4f20\u81f3 testflight \u6216\u8005 APP Store \u4e0a\uff0c\u8fd8\u9700\u8981\u63d0\u4f9b\u7528\u6237\u540d\uff08APP_STORE_CONNECT_USERNAME\uff09\u4e0e\u5bc6\u7801\uff08APP_STORE_CONNECT_PASSWORD\uff09\uff0c\u53ef\u53c2\u8003\u6587\u6863\u8fdb\u884c\u751f\u6210","[7]","\u3002"),(0,i.kt)("p",null,"\u81f3\u4e8e\u8bc1\u4e66\u4e0e\u63cf\u8ff0\u6587\u4ef6\u7684\u751f\u6210\uff0c\u53ef\u67e5\u9605 iOS \u5f00\u53d1\u76f8\u5173\u6587\u7ae0","[8]","\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002fastlane \u914d\u7f6e\u7684\u66f4\u591a\u7ec6\u8282\u53ef\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"ios/fastlane/Fastfile")," \u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u6a21\u677f\u63d0\u4f9b\u7684-android-\u6253\u5305\u65b9\u6848"},"\u6a21\u677f\u63d0\u4f9b\u7684 Android \u6253\u5305\u65b9\u6848"),(0,i.kt)("p",null,"Android \u7684\u6253\u5305\u8fc7\u7a0b\u76f8\u5bf9\u7b80\u5355\uff0c\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew")," \u547d\u4ee4\u5373\u53ef\u3002\u9664\u4e86\u914d\u7f6e APP \u7684\u57fa\u7840\u4fe1\u606f\uff0c\u8fd8\u9700\u8981\u4e3a\u5e94\u7528\u8fdb\u884c\u7b7e\u540d\u3002\u53ef\u53c2\u8003 Android \u5e94\u7528\u7b7e\u540d\u76f8\u5173\u6587\u6863","[9]","\uff0c\u751f\u6210\u7b7e\u540d\u6587\u4ef6\uff0c\u7f6e\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app")," \u76ee\u5f55\u4e2d\u3002"),(0,i.kt)("p",null,"\u7b7e\u540d\u6587\u4ef6\u4e5f\u53ef\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u751f\u6210\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"keytool -genkey -alias android -keyalg RSA -validity 99999 -keystore release.keystore\n")),(0,i.kt)("p",null,"\u6253\u5305\u76f8\u5173\u53c2\u6570\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"gradlew")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"-P, --project-prop")," \u53c2\u6570\u8fdb\u884c\u4f20\u5165\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"./gradlew assembledebug -Papp_id=${{ env.APP_ID }}"),"\uff0c\u5176\u9ed8\u8ba4\u503c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"android/gradle.properties")," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002"),(0,i.kt)("h2",{id:"taro-playground-app"},"Taro Playground APP"),(0,i.kt)("p",null,"\u57fa\u4e8e GitHub Actions \u4e0e Taro \u6a21\u677f\uff0c\u6211\u4eec\u5b8c\u6210\u4e86\u9879\u76ee\u521d\u59cb\u5316\u4e0e\u6253\u5305\u8fc7\u7a0b\u7684\u81ea\u52a8\u5316\u3002\u4f46\u5bf9\u4e8e\u60f3\u8981\u4f53\u9a8c Taro \u5f00\u53d1 APP \u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u4ecd\u7136\u592a\u8fc7\u7e41\u7410\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5f00\u53d1\u4e86 Taro Playground APP\uff0c\u5e76\u5b8c\u5168\u5f00\u6e90","[10]","\u3002\u4e00\u65b9\u9762\u53ef\u4ee5\u5c55\u793a\u7ec4\u4ef6\u548c API \u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u53e6\u4e00\u65b9\u9762\u63d0\u4f9b\u4e86\u52a8\u6001\u52a0\u8f7d jsbundle \u7684\u529f\u80fd\uff0c\u4fbf\u4e8e\u5f00\u53d1\u4eba\u5458\u8fdb\u884c\u672c\u5730\u4ee3\u7801\u7684\u8c03\u8bd5\u3002"),(0,i.kt)("h3",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,i.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728 Taro Playground \u4ed3\u5e93\u7684 Releases \u9875\u9762\u8fdb\u884c\u5b89\u88c5\u5305\u4e0b\u8f7d","[11]","\uff0c\u4e5f\u53ef\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\u5b89\u88c5 APP\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://pic3.58cdn.com.cn/nowater/fangfe/n_v295dd481b6b2f446592350e3187716d03.png",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://wos.58cdn.com.cn/IjGfEdCbIlr/ishare/pic_d3137b5937U5d1XdWcU735Xd7b5a5a37.png",alt:null}))))),(0,i.kt)("p",null,"Taro \u5de5\u7a0b\u4e2d\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn dev:rn --qr")," \u542f\u52a8 bundler server\uff0c\u6253\u5370\u5305\u542b IP \u53ca\u7aef\u53e3\u4fe1\u606f\u7684\u4e8c\u7ef4\u7801\u3002\u901a\u8fc7 Taro Playground APP \u626b\u63cf\u8be5\u4e8c\u7ef4\u7801\uff0c\u5373\u53ef\u52a0\u8f7d jsbundle \u8fdb\u884c\u8c03\u8bd5\uff0c\u9700\u8981\u4fdd\u8bc1\u624b\u673a\u4e0e\u7535\u8111\u5904\u4e8e\u540c\u4e00\u4e2a\u5c40\u57df\u7f51\u4e2d\u3002"),(0,i.kt)("p",null,"\u5177\u4f53\u64cd\u4f5c\u53ef\u4ee5\u67e5\u770b\u5f55\u5c4f\uff1a"),(0,i.kt)("video",{controls:!0,width:"600",src:"https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/03e7ae6c0a8de6be1f665e23404aaa38.mp4"}),(0,i.kt)("h3",{id:"\u793a\u5217\u4ee3\u7801"},"\u793a\u5217\u4ee3\u7801"),(0,i.kt)("p",null,"Taro Playground \u9879\u76ee\u63d0\u4f9b\u4e86\u8f83\u5168\u9762\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u53c2\u8003\uff0c\u907f\u514d\u4e00\u4e9b\u53ef\u80fd\u9047\u5230\u7684\u5751\uff0c\u5982\u6709\u95ee\u9898\uff0c\u6b22\u8fce pr\u3002"),(0,i.kt)("img",((o={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",o.referrerPolicy="no-referrer",o.src="https://pic4.58cdn.com.cn/nowater/fangfe/n_v28c80c04fd8124114b58268d187f50a21.png",o.width="300px",o)),(0,i.kt)("img",((l={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",l.referrerPolicy="no-referrer",l.src="https://pic4.58cdn.com.cn/nowater/fangfe/n_v28658913ed1aa419da53a4c36da5dc526.png",l.width="300px",l)),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u591a\u65b9\u9762\u7684\u4f18\u5316\uff0c\u6781\u5927\u5730\u964d\u4f4e\u4e86\u4f7f\u7528 Taro \u5f00\u53d1 APP \u7684\u6210\u672c\u3002\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u53ea\u9700\u8981\u638c\u63e1 Taro \u548c React Native\uff0c\u518d\u52a0\u4e0a\u4e00\u4e9b\u914d\u7f6e\uff0c\u5373\u53ef\u5b8c\u6210 APP \u7684\u5f00\u53d1\u4e0e\u53d1\u5e03\u3002"),(0,i.kt)("p",null,'\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0c\u5982\u9047\u4efb\u4f55\u95ee\u9898\uff0c\u53ef\u6dfb\u52a0 "58\u6280\u672f\u5c0f\u79d8\u4e66" \u6216 "Taro \u5c0f\u52a9\u624b" \u4e3a\u597d\u53cb\uff0c\u5907\u6ce8 "Taro RN"\uff0c\u52a0\u5165\u5b98\u65b9\u4ea4\u6d41\u7fa4\u5bfb\u6c42\u5e2e\u52a9\u3002'),(0,i.kt)("img",((p={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",p.referrerPolicy="no-referrer",p.src="https://wos.58cdn.com.cn/IjGfEdCbIlr/ishare/pic_13XUU513XUVaU5U7U5Wc3559U75aXUVa.jpg",p.width="300px",p)),(0,i.kt)("img",((s={referrerPolicy:"no-referrer"}).referrerPolicy="no-referrer",s.referrerPolicy="no-referrer",s.src="https://pic8.58cdn.com.cn/nowater/fangfe/n_v282625210493c4a3fac202d6cf372458e.png",s.width="300px",s)),(0,i.kt)("p",null,"\u540e\u7eed\uff0c\u6211\u4eec\u8fd8\u5c06\u5e26\u6765\u652f\u6301 React Native \u7684 Taro UI \u4ee5\u53ca\u5305\u542b\u8be6\u7ec6\u6559\u7a0b\u7684\u6280\u672f\u5c0f\u518c\uff0c\u5c3d\u8bf7\u671f\u5f85\u3002"),(0,i.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u5728\u5f81\u96c6\u793e\u533a\u4f18\u79c0\u4f7f\u7528\u6848\u4f8b\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u63d0\u4ea4\u6848\u4f8b\u5230\u6848\u4f8b\u4ed3\u5e93\u4e2d","[12]","\u3002"),(0,i.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,i.kt)("p",null,"[1]"," \u58f3\u5de5\u7a0b\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-native-shell"},"https://github.com/NervJS/taro-native-shell")),(0,i.kt)("p",null,"[2]"," \u6a21\u677f\u6e90\u7801\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-project-templates/tree/v3.1/react-native"},"https://github.com/NervJS/taro-project-templates/tree/v3.1/react-native")),(0,i.kt)("p",null,"[3]"," GitHub Action \u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/actions"},"https://docs.github.com/cn/actions")),(0,i.kt)("p",null,"[4]"," GitHub Action \u52a0\u5bc6\u673a\u5236\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/actions/reference/encrypted-secrets"},"https://docs.github.com/cn/actions/reference/encrypted-secrets")),(0,i.kt)("p",null,"[5]"," Taro React Native Publish Action\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/shinken008/taro-native-publish"},"https://github.com/shinken008/taro-native-publish")),(0,i.kt)("p",null,"[6]"," fastlane\u5b98\u7f51\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools"},"https://docs.fastlane.tools")),(0,i.kt)("p",null,"[7]"," AppleID \u5bc6\u7801\u751f\u6210\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204397"},"https://support.apple.com/en-us/HT204397")),(0,i.kt)("p",null,"[8]"," \u4f7f\u7528 GitHub Action \u53d1\u5e03 iOS \u5e94\u7528\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/deploy-an-ios-app-to-testflight-or-the-app-store-using-github-actions-c4d7082b1430"},"https://betterprogramming.pub/deploy-an-ios-app-to-testflight-or-the-app-store-using-github-actions-c4d7082b1430")),(0,i.kt)("p",null,"[9]"," \u5b89\u5353\u7b7e\u540d\u6587\u4ef6\u751f\u6210\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/publish/app-signing#generate-key"},"https://developer.android.com/studio/publish/app-signing#generate-key")),(0,i.kt)("p",null,"[10]"," Taro Playground \u6e90\u7801\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground"},"https://github.com/wuba/taro-playground")),(0,i.kt)("p",null,"[11]"," Taro Playground APP \u4e0b\u8f7d\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wuba/taro-playground/releases"},"https://github.com/wuba/taro-playground/releases")),(0,i.kt)("p",null,"[12]"," Taro \u6848\u4f8b\u63d0\u4ea4\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-user-cases"},"https://github.com/NervJS/taro-user-cases")))}s.isMDXComponent=!0}}]);