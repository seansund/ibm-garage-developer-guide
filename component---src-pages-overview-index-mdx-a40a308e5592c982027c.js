(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),l=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,b=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=a("dI71"),y=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,r);return Object(u.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(u.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(u.b)("div",{className:y.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:y.list},r))))))},t}(r.a.Component),N=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=s.tabs,h=s.title,j=s.theme,y=s.description,w=s.keywords,A=Object(v.a)().interiorTheme,x=Object(l.useStaticQuery)("223705900").site.pathPrefix,T=x?n.pathname.replace(x,""):n.pathname,k=m?T.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",C=j||A;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:d},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:m,theme:C}),m&&Object(u.b)(f,{slug:T,tabs:m,currentTab:k}),Object(u.b)(N.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p})),Object(u.b)(b.a,null))}},fPf4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return O}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("XbGe"),l=a("T0C+"),b=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=c("PageDescription"),p=c("Accordion"),d=c("AccordionItem"),m=c("AnchorLinks"),u=c("AnchorLink"),g={_frontmatter:b},h=i.a;function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(h,Object(n.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Get familiar with using the ",Object(o.b)(l.a,{name:"longName",mdxType:"Globals"}))),Object(o.b)(l.a,{name:"longName",mdxType:"Globals"})," is an open-source collection of assets that provide an environment for developing cloud-native applications for deployment within ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," and ",Object(o.b)(l.a,{name:"kube",mdxType:"Globals"}),". It embodies ",Object(o.b)(l.a,{name:"method",mdxType:"Globals"})," principles and practices for consistently developed applications, incorporating best practices that increase developer velocity for efficient delivery of business value.",Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/u3PTRqkd94k",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("h2",null,Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," objectives"),Object(o.b)("p",null,"There are a number of objectives behind providing the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"}),". The three main goals of the ",Object(o.b)(l.a,{name:"tinyName",mdxType:"Globals"})," are provided below:"),Object(o.b)("h3",null,"1. Accelerate time to business value"),Object(o.b)("p",null,"One goal of the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," is to prepare the development environment quickly and allow the development\nteam to start delivering business function on day one of the first iteration using enterprise cloud-native practices. After all,\nthe point of cloud-native development is to deliver business value to end users and the development and operations infrastructure\nare provided in service to that goal."),Object(o.b)("p",null,"Through the automation provided by the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," we can provision an environment in minutes through automation\nthat is fully configured and ready for a development team to start working immediately. With the other components of\nthe ",Object(o.b)(l.a,{name:"tinyName",mdxType:"Globals"}),", developers can begin with a rich DevOps framework with a focus on “build to manage” techniques to\nhelp build production-ready applications."),Object(o.b)("h3",null,"2. Reduce risk through consistent delivery models from start to production"),Object(o.b)("p",null,"The ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," encapsulates many of the available best practices for cloud-native development including\nDevOps and “Build to Manage” practices. They have been provided through the ",Object(o.b)(l.a,{name:"tinyName",mdxType:"Globals"})," in this way so that\ndevelopers and SREs can benefit from these practices without requiring any additional effort and so that they can be applied\nconsistently from project to project."),Object(o.b)("h3",null,"3. Quickly ramp up development teams on ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," and ",Object(o.b)(l.a,{name:"kube",mdxType:"Globals"})),Object(o.b)("p",null,"Containerized platforms like ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," and ",Object(o.b)(l.a,{name:"kube",mdxType:"Globals"})," provide a great deal of functionality and\nflexibility for application teams. However, these platforms can at time seem unapproachable for developers and SREs new to the environment\ngiven all the different concepts and components. The ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," aims to help with the learning curve in two\ndifferent ways:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Provide tools and techniques to “round off the corners” of the more complex aspects of working in a containerized environment"),Object(o.b)("li",{parentName:"ol"},"Provide a learning journey that incrementally introduces the concepts of a containerized environment in terms of practical scenarios, not abstract theory")),Object(o.b)("h2",null,"Guided walk-though"),Object(o.b)("p",null,"If you’d like to have a guided walkthrough of what the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," provides, check out this ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=LcWboN1T7Zk"},"video demonstration")," of\nthe ",Object(o.b)(l.a,{name:"tinyName",mdxType:"Globals"})," in action."),Object(o.b)("h2",null,"Components of the ",Object(o.b)(l.a,{name:"longName",mdxType:"Globals"})),Object(o.b)("p",null,"As the name suggests, the ",Object(o.b)(l.a,{name:"longName",mdxType:"Globals"})," provides a collection of tools that can be used in part or in\nwhole to support the activities of software development life-cycle. The following provides a listing of the assets that\nmake up the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"}),":"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"701px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAADNUlEQVQ4y22TW4/aRhTH+ZZ9idSHRMoHaKVWTYBtq82uorxFVS9SokaV2katks1utBuIWO74hm2w8QUDBhvwBRaWZcfcBnM6WGmVqn346cz/XP46o9HE5P4KNGcD2jBiF0Wilf4SqIYLFdkBRvV3hEjTihfVSM/uw8y/iKkDjA03xE033DbdLeyj4e2wNtjgVEnHFwUlPC8pkKZb+Lyk4rO8jCV7iQ1/R0zxloD/RifEOLMbFyw7wffsB3zXvcv3rIfVbo9oK66PJwfGDH3Wt2b3HcM58M1x3G37cVMyE4o6vGcM5192XZToOLdx00Vxoz+LxySHXyietG64tQlnF75QfWmqjRsrAtJ8GUSXL10X08e4ygDmGbQVuAXm6NW8Sn91NZ2YnutsxyM/IHFxM7teEMM6KJ4CsiOvJE88zEm59avLV3CSO4HT/BtgrWoNCcx3vXQKuJe/A/3brzDK52CpqcfNdmdULBZBlmWgKAps24aYNKztGq5MDKVAuap/8yZ/Ejz/8xm8eP0z/uXkBWSVHL+Wqk+FP17CxQ/f49RPP4att2ew0pRD1x85lXIZWJbdEsLpdBrGxL6wOyueAtOig7rHf0t0yFtVIBFEmwfeEeo3TOHprFKCGVUCxNKA6DJMefZwvgiuer0eaLoGdt+GIAjIhk5tV+/X9htu2A51V+/r8bbXfmw4xiPDaT7Rhs3Pr7janYUgPVmKjUeBIB2R8/Gkbnwy9meJ+eT28QptjtD14sgbjI72hqD6KsietFKN5sNaXm+WU9yAzdTtalayCEO+qHhcUbGoy5pNZ+t2JSPa9KXoMxlyj4Ji588pu/iOsVW2YxNDYU1eOZQ9caa31AdiXl5nTnNQOC9HlFI0lN5RUEkzkD0rAPWejXTubZHkWOCyIuz7068z0KB1iHHd1oFgmV/zVifB686nRvMmbprooN2+TbZa86RpBknH2SUdF5K93jLKdUit07lNttvzpGHMop49mjZNxpQBRuR3IN0huNuN5mIU4ZC8H6Jad47e0wa6KKtING9Q0wuj2j99H0HmUUwdrsHw8H9xMbT8EBoWgizbhgxjgNSdR7l97X9nCH8BUP5v+0TgdogAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Cloud-Native Toolkit",title:"Cloud-Native Toolkit",src:"/static/93764abd3f079bbab6678c8798d49f80/ed6d3/cntk-in-the-toolkit.png",srcSet:["/static/93764abd3f079bbab6678c8798d49f80/7fc1e/cntk-in-the-toolkit.png 288w","/static/93764abd3f079bbab6678c8798d49f80/a5df1/cntk-in-the-toolkit.png 576w","/static/93764abd3f079bbab6678c8798d49f80/ed6d3/cntk-in-the-toolkit.png 701w"],sizes:"(max-width: 701px) 100vw, 701px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#guides"},Object(o.b)("strong",{parentName:"a"},"Guides"))," - this set of documentation that weaves the various toolkit components together with a perspective on how to apply cloud-native practices to deliver business solutions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/getting-started-day-0/infrastructure-as-code"},Object(o.b)("strong",{parentName:"a"},"Infrastucture as Code"))," - Terraform scripts and GitOps configuration to provision and manage the environment"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/getting-started/cli"},Object(o.b)("strong",{parentName:"a"},"CLI"))," - a simple node-based CLI that installs as a plugin to the ",Object(o.b)("inlineCode",{parentName:"li"},"kubectl")," and ",Object(o.b)("inlineCode",{parentName:"li"},"oc")," CLIs and provides commands to simplify common"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/getting-started-day-1/dashboard"},Object(o.b)("strong",{parentName:"a"},"Developer Dashboard"))," - Dashboard component and ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," console extensions to simplify common developer activities"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/getting-started-day-1/continuous-integration"},Object(o.b)("strong",{parentName:"a"},"DevOps pipelines"))," - continuous integration pipelines for Tekton and Jenkins"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/starterkits"},Object(o.b)("strong",{parentName:"a"},"Starter Kits and Code Patterns"))," - software repositories that can be used to quickly get started building applications using common patterns, or to serve as a reference to enhance existing patterns"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/learning/intermediate"},Object(o.b)("strong",{parentName:"a"},"Learning Journey"))," - activation material to teach practitioners how to apply cloud-native practices in real-world scenarios using the ",Object(o.b)(l.a,{name:"tinyName",mdxType:"Globals"}))),Object(o.b)("h2",null,Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(l.a,{name:"devenv",mdxType:"Globals"})),Object(o.b)("p",null,"The ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(l.a,{name:"devenv",mdxType:"Globals"})," includes several features that support ",Object(o.b)(l.a,{name:"method",mdxType:"Globals"})," best practices\nfor consistent and rapid development of cloud-native applications:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Cluster"),": A ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," or ",Object(o.b)(l.a,{name:"kube",mdxType:"Globals"})," cluster that both hosts the tools and itself is a deployment target for application builds"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SDLC"),": Deployment target environments that support the application development lifecycle: ",Object(o.b)("em",{parentName:"li"},"dev"),", ",Object(o.b)("em",{parentName:"li"},"test"),", and ",Object(o.b)("em",{parentName:"li"},"staging")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Backend services"),": Cloud services commonly required by cloud-native applications for monitoring, security, and persistence"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CI/CD"),": A prebuilt, ready-to-run continuous delivery pipeline incorporating best-of-breed open source software tools"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)(l.a,{name:"templates",mdxType:"Globals"})),": Prebuilt code templates for common application components and tasks incorporating best practices that developers can add to their codebase as needed"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Dashboard"),": A centralized console to help developers use the environment’s capabilities")),Object(o.b)("p",null,"Typically a ",Object(o.b)("a",{parentName:"p",href:"/admin"},"Cloud System Admin")," (or a ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/culture/practice-building-effective-squads/"},"squad lead"),") installs and sets\nup a new ",Object(o.b)(l.a,{name:"devenv",mdxType:"Globals"})," after the ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/think/inception"},"inception workshop"),",\nproviding a place for the developers to start developing the\n",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/think/inception/practice_minimum_viable_product"},"minimum viable product (MVP)"),".\nThe objective is to reduce the time required for a team to configure and prepare their development environment. The key\nbenefit is to make the end-to-end ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"},"CI/CD development lifecycle"),"\nconsistent across each platform and make the out-of-the-box developer experience as simple as possible."),Object(o.b)("p",null,"The installation is performed using ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/terraform"},"Terraform")," scripts structured as ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cloud-native-toolkit/garage-terraform-modules"},"modular components"),"\nso unneeded tools can be easily disabled or new tools added. The combination of tools selected are proven in the\nindustry to deliver real value for modern cloud-native development."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/rht-labs/labs-ci-cd"},"Red Hat Open Innovation Labs CI/CD components")," embodies a very similar approach to how they deliver success with OpenShift."),Object(o.b)("h3",null,"Environment components"),Object(o.b)("p",null,"After installation, the ",Object(o.b)(l.a,{name:"env",mdxType:"Globals"})," consists of the following components and developer tools:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)(l.a,{name:"ocp",mdxType:"Globals"})," or ",Object(o.b)(l.a,{name:"iks",mdxType:"Globals"})," development cluster"),Object(o.b)("li",{parentName:"ul"},"A collection of continuous delivery tools deployed into the cluster"),Object(o.b)("li",{parentName:"ul"},"A set of backend services")),Object(o.b)("p",null,"This diagram illustrates the ",Object(o.b)(l.a,{name:"env",mdxType:"Globals"}),":"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1091px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVQ4y1WTXW/URhSG/YP5EVVvuIla9YILJIpagRBIhV5QtbQg1GS1QMlGRKFp2Oyu48mu1+Nve/w99py3x6Zp1ZHGHtlnnnnPe85YTdtCJbHJo5C01kjTFFHgIw19+LsdgvUakStQrRZw9goPXqYck6EsCpRliaqqUJQljW/f98kCCL9sM/P8OiPw0E2DK9XiiQLqv86x++JL9O4G9evvIEOF408lXLlH1/cwxoBo3DY9EEYRWV0/4EJp8zGtiXSHIs9wIXb48eMGZZZBrlboWLkfxgiki6Qi5CLEwHHdMMAMGo7XUulIRN6erOB0BqqVwdBT1bQIEg5sG/RlgZrVtqwkYRtUxeumgi1reOcOSl+i5YNGoJAtqTXb4+5Y4bMD9FloetZd2WeInn0FKeUEG+3Iy4oBJyhe3ueDWhBHcqIo2LPR84FVAmZK2ZOSrN9mT/lnwW6AmtBFffY7tu4eDQePI69qZP4e+mIOpfLpoKauofJ8AvacgdY9GQZ7nkfWnSe3kV6+NcPsEemBMx8Ls7lC9u2DaY3tn9CzRxjxuuv+hRRc5RuFPGks0AScKhv4Rp7MqXeXaF/dQ2Rf4dPDx5PCerdBPH+BjmFKqUlZwypvgCP8f8C21ljG78ymOCedKWxP5xPoTRbhubzGIkvwzdUSxBu7mxQZPh4wrv+Z/wF7TTixfzbnu8PPfYjP40Pk4wcGnQR7HCzmMHpgEFeVW27gooxN3bGXo3fGjB3Xj8UkK+d+aqp+6FRr6iShrmspzhR3UkEqTqhIc2qTlJq2oiiOaOc4JDf2eKsoKAsK05S2W4e2nk1ZmpG1Wi4hC67e0RuEd+5N6r5++AJelOFyK/HT7HT6Nne+h6+v0X64QHT3/vTt1uIQR37ArbXEr+sDVGUDi6XHvTG2t1qLy7d/CO4xsRau4Psp4iQT9rUret2L47MjEeeRSKUvVu+PBfsmFvZaBHku/MAV708PRRhGzt/t58uAF7qGpAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"catalyst provisioned environment",title:"catalyst provisioned environment",src:"/static/2354738b5a10390f285ea2e55d4b7cca/921a2/catalyst-provisioned-environment.png",srcSet:["/static/2354738b5a10390f285ea2e55d4b7cca/7fc1e/catalyst-provisioned-environment.png 288w","/static/2354738b5a10390f285ea2e55d4b7cca/a5df1/catalyst-provisioned-environment.png 576w","/static/2354738b5a10390f285ea2e55d4b7cca/921a2/catalyst-provisioned-environment.png 1091w"],sizes:"(max-width: 1091px) 100vw, 1091px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("map",{name:"image-map",id:"image-map"},Object(o.b)("area",{target:"",alt:"Continuous Integration",title:"Continuous Integration",href:"/getting-started-day-1/continuous-integration",coords:"271,250,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Git Ops",title:"Git Ops",href:"/getting-started-day-0/git-ops",coords:"378,89,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Artifact Management",title:"Artifact Management",href:"/getting-started-day-1/artifact-management",coords:"591,60,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Image Registry",title:"Image Registry",href:"/getting-started-day-1/image-registry",coords:"697,41,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Code Inspection",title:"Code Inspection",href:"/getting-started-day-1/code-analysis",coords:"164,354,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Contract Testing",title:"Contract Testing",href:"/getting-started-day-1/contract-testing",coords:"271,401,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Continuous Delivery",title:"Continuous Delivery",href:"/getting-started-day-2/continuous-delivery",coords:"592,251,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Dashboard",title:"Dashboard",href:"/getting-started-day-1/dashboard",coords:"146,472,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Monitoring",title:"Monitoring",href:"/getting-started-day-2/monitoring",coords:"878,607,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Log Management",title:"Log Management",href:"/tools/logdna",coords:"1011,607,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"API Support",title:"API Support",href:"/tools/contract-testing-with-pact/",coords:"424,472,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"CLI",title:"CLI",href:"/getting-started/cli",coords:"71,321,30",shape:"circle"}),Object(o.b)("area",{target:"",alt:"Vault",title:"Vault",href:"/getting-started-day-2/#secret-management",coords:"484,72,30",shape:"circle"})),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1091px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNElEQVQozxVRX0/acBTtx1zYx9jLXvawZC/LEqPLprBZWipQCoVZFKmlyB8FCWDUYVE0tFSnDkEdrs6fEu9ZPclJbu659ybnXG6GjwV0fhZbwffTkBglRRKoHXxHcUmkRUGk2rcPlBUXaD4s0YY4RxXpMy0IEqlSmNpLMxSJSCQIAu1EPlFelYlbkpWA0+8Dt7+na7pB9XIRuOyhUd/CulEAnia4+uUimkhi7PRwOziCupxF93DP3zmDWdxAtVjAo72P40MLXEpaDBS6l3gApkZ+lWpmiUZDjwyzQrnVFfLYE52eX1A0GqXh+JpuJn8prabo6OSYRp5HZrFIVZ+P/x7Jdl3ivouRgHc9QkFdny4lM1Q1TJx0T5FdMaBpyxiPx+haFkRRRK93BNu2IcsyGo0G+o4DXc9Dy+qw3Sv83N8Fx4fDgZvRENvN7jSR1uiHP2x9nEEmISPq13ZqFqUVFVFBwhc/jrmqiXREQmQ1izebBpSEgqSi4G05DymfAxea/xpwXQc+pllNo87+LuHPhFqtFum5HD2cO+TaNslyjM7uhjR+YLScTtNe75A8gMrlMm0Wy3TrMXIvzolTdP31WbOF+3rj2aiU0Nru4Nm/3my3YeTWMLkawfatxRMxeGyCFzGdSaPj239BuVJFreA/7+4OzsAFF+T5VzXThFWr38cTMtMyeXbQOWZaVmOxeJw5gwHz82KhYMjvHzDLshjP86y0UWJ922bJlMrUeIztNOrMKJjsPxT/CIGheG9uAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"catalyst provisioned environment drawio catalog only",title:"catalyst provisioned environment drawio catalog only",src:"/static/d0427ed6d0390bbfd910a717326e6f14/921a2/catalyst-provisioned-environment.drawio-catalog-only.png",srcSet:["/static/d0427ed6d0390bbfd910a717326e6f14/7fc1e/catalyst-provisioned-environment.drawio-catalog-only.png 288w","/static/d0427ed6d0390bbfd910a717326e6f14/a5df1/catalyst-provisioned-environment.drawio-catalog-only.png 576w","/static/d0427ed6d0390bbfd910a717326e6f14/921a2/catalyst-provisioned-environment.drawio-catalog-only.png 1091w"],sizes:"(max-width: 1091px) 100vw, 1091px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The diagram shows the components in the environment: the cluster, the deployment target environments, the cloud services, and the tools."),Object(o.b)(p,{mdxType:"Accordion"},Object(o.b)(d,{title:"Logo Usage Reference",mdxType:"AccordionItem"},Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Logo"),Object(o.b)("th",{parentName:"tr",align:null},"Usage Reference"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Artifactory"),Object(o.b)("td",{parentName:"tr",align:null},"is an Open Source product maintained by ",Object(o.b)("a",{parentName:"td",href:"https://jfrog.com/brand-guidelines/"},"JFrog"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Jenkins"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source project ",Object(o.b)("a",{parentName:"td",href:"https://www.jenkins.io/artwork/"},"Jenkins"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"SonarQube"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source project maintained by ",Object(o.b)("a",{parentName:"td",href:"https://www.sonarsource.com/logos/"},"SonarSource"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Nexus Repository"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source project maintained by ",Object(o.b)("a",{parentName:"td",href:"https://www.sonatype.com/nexus-repository-oss"},"SonaType"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Trivy"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source project maintained by ",Object(o.b)("a",{parentName:"td",href:"https://www.aquasec.com/brand/"},"Aqua"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"InteliJ"),Object(o.b)("td",{parentName:"tr",align:null},"IDE from ",Object(o.b)("a",{parentName:"td",href:"https://www.jetbrains.com/company/brand/"},"JetBrains"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"VSCode"),Object(o.b)("td",{parentName:"tr",align:null},"Free IDE maintained by ",Object(o.b)("a",{parentName:"td",href:"https://code.visualstudio.com/"},"Microsoft"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Jaeger"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source tool maintained by ",Object(o.b)("a",{parentName:"td",href:"https://www.jaegertracing.io/get-in-touch/"},"Jaeger Community"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"ArgoCD"),Object(o.b)("td",{parentName:"tr",align:null},"Open Source tool maintained by ",Object(o.b)("a",{parentName:"td",href:"https://argoproj.github.io/projects/argo-cd/"},"ArgoCD Community"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"OpenShift and CodeReady"),Object(o.b)("td",{parentName:"tr",align:null},"Workspaces are products from ",Object(o.b)("a",{parentName:"td",href:"https://developers.redhat.com/products/codeready-workspaces/overview"},"Red Hat"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"LogDNA"),Object(o.b)("td",{parentName:"tr",align:null},"IBM Cloud service supplied by ",Object(o.b)("a",{parentName:"td",href:"https://logdna.com/"},"LogDNA"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Sysdig"),Object(o.b)("td",{parentName:"tr",align:null},"IBM Cloud service supplied by ",Object(o.b)("a",{parentName:"td",href:"https://sysdig.com/"},"Sysdig"))))))),Object(o.b)("p",null,"The tools to provision an environment using the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"})," can the customized to provision a particular\nset of tools fit for the environment. The Toolkit provides a default installation to provision a ",Object(o.b)(l.a,{name:"devenv",mdxType:"Globals"}),"\nas a starting point. Any of the available components listed on the ",Object(o.b)("a",{parentName:"p",href:"/admin/terraform"},"Terraform modules")," page can be used\nto prepare the environment."),Object(o.b)("h4",null,"Development cluster"),Object(o.b)("p",null,"The heart of the ",Object(o.b)(l.a,{name:"devenv",mdxType:"Globals"})," is a cluster:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/container-service"},"IBM Cloud-managed Kubernetes")," or ",Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/openshift"},"Red Hat OpenShift")," cluster"),Object(o.b)("li",{parentName:"ul"},"Cluster namespace that encapsulates the tooling installed in the cluster: ",Object(o.b)("em",{parentName:"li"},"tools")),Object(o.b)("li",{parentName:"ul"},"A collection of SRE tools and services")),Object(o.b)("h4",null,"Continuous delivery tools"),Object(o.b)("p",null,"The following best-of-breed open source software tools are installed in the cluster’s ",Object(o.b)("em",{parentName:"p"},"tools")," namespace:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Capability"),Object(o.b)("th",{parentName:"tr",align:"left"},"Tool"),Object(o.b)("th",{parentName:"tr",align:null},"Bitnami"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Continuous Integration"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/jenkins"},"Jenkins CI")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Jenkins is a common tool for Continuous Integration")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Continuous Integration"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/tekton"},"Tekton CI")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Tekton is an emerging tool for Continuous Integration with Kubernetes and OpenShift")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"API Contract Testing"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/contract-testing-with-pact"},"Pact")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Pact enables API contract testing")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Code Analysis"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/sonarqube"},"SonarQube")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"SonarQube can scan code and display the results in a dashboard")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Container Image Registry"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/ibm-cloud-container-registry"},"IBM Cloud Container Registry")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Stores container images to be deployed")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Artifact Management"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/artifactory"},"Artifactory")),Object(o.b)("td",{parentName:"tr",align:null},"Yes"),Object(o.b)("td",{parentName:"tr",align:null},"Artifactory is an artifact storage and Helm chart repository")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Continuous Delivery"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/argocd"},"ArgoCD")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"ArgoCD support Continuous Delivery with GitOps")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Web IDE"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://developers.redhat.com/products/codeready-workspaces/overview"},"Code Ready Workspace")),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"IDE for editing and managing code in a web browser")))),Object(o.b)("h4",null,"Backend services"),Object(o.b)("p",null,"The following ",Object(o.b)(l.a,{key:"ic",mdxType:"Globals"})," services can be created and bound to the cluster:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Capability"),Object(o.b)("th",{parentName:"tr",align:"left"},"Service"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Log Management"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/logdna"},"Log Analysis with LogDNA")),Object(o.b)("td",{parentName:"tr",align:null},"Manage and analyze app logs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Monitoring"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/tools/sysdig"},"Cloud Monitoring with Sysdig")),Object(o.b)("td",{parentName:"tr",align:null},"Monitor app and platform resources")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"User Authentication"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/programming/security/"},"App ID")),Object(o.b)("td",{parentName:"tr",align:null},"Verify identities of clients accessing app end points")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Relational Data Storage"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/programming/databases"},"Databases For PostgreSQL")),Object(o.b)("td",{parentName:"tr",align:null},"Stores relational data structured as schemas for SQL querying")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Schemaless Data Storage"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"/programming/databases"},"Cloudant")),Object(o.b)("td",{parentName:"tr",align:null},"NoSQL database for JSON documents")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Binary Data Storage"),Object(o.b)("td",{parentName:"tr",align:"left"},Object(o.b)("a",{parentName:"td",href:"https://cloud.ibm.com/objectstorage/create"},"Cloud Object Storage")),Object(o.b)("td",{parentName:"tr",align:null},"Storage service commonly used for binary content")))),Object(o.b)("h2",null,"Getting Started"),Object(o.b)("p",null,"Get to know the ",Object(o.b)(l.a,{name:"shortName",mdxType:"Globals"}),":"),Object(o.b)(m,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(u,{to:"/getting-started",mdxType:"AnchorLink"},"Getting Started"),Object(o.b)(u,{to:"/getting-started-day-1/deploy-app",mdxType:"AnchorLink"},"Deploy Your First App"),Object(o.b)(u,{to:"/tools",mdxType:"AnchorLink"},"Tools Guides"),Object(o.b)(u,{to:"/starterkits",mdxType:"AnchorLink"},Object(o.b)(l.a,{name:"templates",mdxType:"Globals"})),Object(o.b)(u,{to:"/admin",mdxType:"AnchorLink"},"Installation"),Object(o.b)(u,{to:"/arch/environment",mdxType:"AnchorLink"},"Architectures")))}O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-a40a308e5592c982027c.js.map