(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),c=t.n(a),o=t("NmYn"),i=t.n(o),s=t("Wbzz"),r=t("Xrax"),n=t("k4MR"),b=t("TSYQ"),d=t.n(b),l=t("QH2O"),p=t.n(l),g=t("qKvR"),j=function(A){var e,t=A.title,a=A.theme,c=A.tabs,o=void 0===c?[]:c;return Object(g.b)("div",{className:d()(p.a.pageHeader,(e={},e[p.a.withTabs]=o.length,e[p.a.darkMode]="dark"===a,e))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:p.a.text},t)))))},E=t("BAC9"),m=function(A){var e=A.relativePagePath,t=A.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,c=t||a,o=c.baseUrl,i=c.subDirectory,r=o+"/edit/"+c.branch+i+"/src/pages"+e;return o?Object(g.b)("div",{className:"bx--row "+E.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:E.link,href:r},"Edit this page on GitHub"))):null},B=t("FCXl"),Q=t("9Hrx"),x=t("I8xM"),w=function(A){function e(){return A.apply(this,arguments)||this}return Object(Q.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,t=A.slug,a=t.split("/").filter(Boolean).slice(-1)[0],c=e.map((function(A){var e,c=i()(A,{lower:!0,strict:!0}),o=c===a,r=new RegExp(a+"/?(#.*)?$"),n=t.replace(r,c);return Object(g.b)("li",{key:A,className:d()((e={},e[x.selectedItem]=o,e),x.listItem)},Object(g.b)(s.Link,{className:x.link,to:""+n},A))}));return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:x.list},c))))))},e}(c.a.Component),u=t("MjG9"),h=t("CzIb");e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,c=A.Title,o=e.frontmatter,b=void 0===o?{}:o,d=e.relativePagePath,l=e.titleType,p=b.tabs,E=b.title,Q=b.theme,x=b.description,N=b.keywords,f=Object(h.a)().interiorTheme,Y=Object(s.useStaticQuery)("2456312558").site.pathPrefix,k=Y?a.pathname.replace(Y,""):a.pathname,O=p?k.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",C=Q||f;return Object(g.b)(n.a,{tabs:p,homepage:!1,theme:C,pageTitle:E,pageDescription:x,pageKeywords:N,titleType:l},Object(g.b)(j,{title:c?Object(g.b)(c,null):E,label:"label",tabs:p,theme:C}),p&&Object(g.b)(w,{slug:k,tabs:p,currentTab:O}),Object(g.b)(u.a,{padded:!0},t,Object(g.b)(m,{relativePagePath:d})),Object(g.b)(B.a,{pageContext:e,location:a,slug:k,tabs:p,currentTab:O}),Object(g.b)(r.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dtLM:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return r})),t.d(e,"default",(function(){return E}));var a=t("k1TG"),c=t("8o2o"),o=(t("q1tI"),t("7ljp")),i=t("013z"),s=t("T0C+"),r=(t("qKvR"),{}),n=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},b=n("PageDescription"),d=n("Row"),l=n("Column"),p=n("ArticleCard"),g={_frontmatter:r},j=i.a;function E(A){var e=A.components,t=Object(c.a)(A,["components"]);return Object(o.b)(j,Object(a.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"The Workshop is design to provide a quick way to try the methodology leveraging the tools that the ",Object(o.b)(s.a,{name:"tinyName",mdxType:"Globals"})," integrates.")),Object(o.b)(d,{mdxType:"Row"},Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(p,{color:"dark",title:"Setup Workshop Environment",href:"/workshop/setup",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMEAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABlo0kpxKZf//EABkQAQADAQEAAAAAAAAAAAAAAAEAAgMRMf/aAAgBAQABBQLQapoEdKM2JlxPX//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAHBAAAwABBQAAAAAAAAAAAAAAAAERIQIQIjGB/9oACAEBAAY/Apei6Z6cnnbKQz//xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAhQVFh/9oACAEBAAE/IaCvgzRKwEUmfE2PHCo+4dQ/ZocgRnDf/9oADAMBAAIAAwAAABBg7//EABgRAAIDAAAAAAAAAAAAAAAAAAABESEx/9oACAEDAQE/EFLSkf/EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QcYRs/8QAGxABAQEAAwEBAAAAAAAAAAAAAREAITFxYYH/2gAIAQEAAT8QSQE/Tz3AXTdDOf3tx4PCtM27QlHrIro9heNQplAAQ3//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"workshop",title:"workshop",src:"/static/6d1a289acf40045e85420535a9454c21/2e753/workshop.jpg",srcSet:["/static/6d1a289acf40045e85420535a9454c21/69549/workshop.jpg 288w","/static/6d1a289acf40045e85420535a9454c21/473e3/workshop.jpg 576w","/static/6d1a289acf40045e85420535a9454c21/2e753/workshop.jpg 1152w","/static/6d1a289acf40045e85420535a9454c21/74f4b/workshop.jpg 1728w","/static/6d1a289acf40045e85420535a9454c21/de5bb/workshop.jpg 2304w","/static/6d1a289acf40045e85420535a9454c21/514db/workshop.jpg 5994w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(p,{color:"dark",title:"Deploy an Application using CI Pipelines with Tekton",href:"/workshop/ci",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABWzUBZEf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAwETEBEz/9oACAEBAAEFAlQrVKylYjjj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIAAxEzkRAScv/aAAgBAQAGPwJFNIElb36zEupjXUTzz//EAB0QAAIABwEAAAAAAAAAAAAAAAABEDFBUaGx4fH/2gAIAQEAAT8hfTCUErnmh88YbUGf/9oADAMBAAIAAwAAABDjz//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EFf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAeEAACAQMFAAAAAAAAAAAAAAAAATEQEfBBYXHB0f/aAAgBAQABPxBoQ8yNt1kmLdDbg48hM3RSR//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ci tekton",title:"ci tekton",src:"/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg",srcSet:["/static/2bc0d80116900ec52da0b88a714ce5f3/69549/ci-tekton.jpg 288w","/static/2bc0d80116900ec52da0b88a714ce5f3/473e3/ci-tekton.jpg 576w","/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg 1152w","/static/2bc0d80116900ec52da0b88a714ce5f3/74f4b/ci-tekton.jpg 1728w","/static/2bc0d80116900ec52da0b88a714ce5f3/de5bb/ci-tekton.jpg 2304w","/static/2bc0d80116900ec52da0b88a714ce5f3/c4108/ci-tekton.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(p,{color:"dark",title:"Promote an Application using CD with GitOps and ArgoCD",href:"/workshop/cd",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHXpJ0YUP/EABoQAAICAwAAAAAAAAAAAAAAAAARAgMQMjP/2gAIAQEAAQUCr5sZDTH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAACEHH/2gAIAQEABj8CGMY//8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERIRBRgaH/2gAIAQEAAT8hpCnaHRB7PEz/AP/aAAwDAQACAAMAAAAQ6y//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAAMBAQAAAAAAAAAAAAABEQAhYXEQ/9oACAEBAAE/ENohqjwxlSa9wBWPcSnUha8MWtfn/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"cd argocd",title:"cd argocd",src:"/static/499b44442dcde7cceb39fd02d3690c73/2e753/cd-argocd.jpg",srcSet:["/static/499b44442dcde7cceb39fd02d3690c73/69549/cd-argocd.jpg 288w","/static/499b44442dcde7cceb39fd02d3690c73/473e3/cd-argocd.jpg 576w","/static/499b44442dcde7cceb39fd02d3690c73/2e753/cd-argocd.jpg 1152w","/static/499b44442dcde7cceb39fd02d3690c73/74f4b/cd-argocd.jpg 1728w","/static/499b44442dcde7cceb39fd02d3690c73/de5bb/cd-argocd.jpg 2304w","/static/499b44442dcde7cceb39fd02d3690c73/8702a/cd-argocd.jpg 3138w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(o.b)(d,{mdxType:"Row"},Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(p,{color:"dark",title:"Deploy a 3 tier Microservice using React, Node.js, and Java",href:"/workshop/inventory",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.30555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIBBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtVkJYX//EABUQAQEAAAAAAAAAAAAAAAAAACBB/9oACAEBAAEFAqf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAABBQAAAAAAAAAAAAAAAAAQESAhYXH/2gAIAQEABj8CpiTo/8QAGhAAAQUBAAAAAAAAAAAAAAAAAAEQESExQf/aAAgBAQABPyG6wIZcL5BMP//aAAwDAQACAAMAAAAQBw//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEBAAIDAQAAAAAAAAAAAAABEQBBECFRsf/aAAgBAQABPxCsgdO3dx8cUsN4q1psT7cEB4TP/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"inventory",title:"inventory",src:"/static/37f31c371142c010823e2994803b697f/2e753/inventory.jpg",srcSet:["/static/37f31c371142c010823e2994803b697f/69549/inventory.jpg 288w","/static/37f31c371142c010823e2994803b697f/473e3/inventory.jpg 576w","/static/37f31c371142c010823e2994803b697f/2e753/inventory.jpg 1152w","/static/37f31c371142c010823e2994803b697f/74f4b/inventory.jpg 1728w","/static/37f31c371142c010823e2994803b697f/f4244/inventory.jpg 1855w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)(l,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(p,{color:"dark",title:"App Modernization with modern DevOps",href:"/workshop/appmod",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"71.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwACBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHqIxGZ6X//xAAZEAADAQEBAAAAAAAAAAAAAAAAAQIRAxL/2gAIAQEAAQUCfSod9Ma9mkGn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABsQAQACAgMAAAAAAAAAAAAAAAEAAhEgYaHR/9oACAEBAAY/AstVrxCoKvU90//EAB0QAAIBBAMAAAAAAAAAAAAAAAERABAhMUFRYbH/2gAIAQEAAT8hMHNpicmZAW7GWs+qGDao/9oADAMBAAIAAwAAABAYP//EABgRAQEAAwAAAAAAAAAAAAAAAAEAESFB/9oACAEDAQE/EF3OfC//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QbpD/xAAbEAEAAgMBAQAAAAAAAAAAAAABETEAIUFRcf/aAAgBAQABPxBsUg7Urpi04xkY2Myx9PvLzdhhOrq3R7OISC+SYhoTy8h45//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"appmod",title:"appmod",src:"/static/d28ea17d4b68b02184d9e4f9be8ec6ee/2e753/appmod.jpg",srcSet:["/static/d28ea17d4b68b02184d9e4f9be8ec6ee/69549/appmod.jpg 288w","/static/d28ea17d4b68b02184d9e4f9be8ec6ee/473e3/appmod.jpg 576w","/static/d28ea17d4b68b02184d9e4f9be8ec6ee/2e753/appmod.jpg 1152w","/static/d28ea17d4b68b02184d9e4f9be8ec6ee/74f4b/appmod.jpg 1728w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}E.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workshop-index-mdx-3e61d537fe35cd1ec5f2.js.map