(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),b=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,i=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),v=a("9Hrx"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0,strict:!0}),o=r===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,r);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+c},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),y=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,d=t.titleType,m=s.tabs,j=s.title,v=s.theme,f=s.description,k=s.keywords,x=Object(w.a)().interiorTheme,T=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,D=m?I.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",C=v||x;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:C,pageTitle:j,pageDescription:f,pageKeywords:k,titleType:d},Object(u.b)(O,{title:r?Object(u.b)(r,null):j,label:"label",tabs:m,theme:C}),m&&Object(u.b)(N,{slug:I,tabs:m,currentTab:D}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(g.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:D}),Object(u.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rpLq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return m}));var n=a("k1TG"),r=a("8o2o"),o=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=i("PageDescription"),s=i("InlineNotification"),p={_frontmatter:b},d=l.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Homework for students in the MOOC, Session 1 Part 2")),Object(o.b)("p",null,"This is the homework tasks for the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/homework/teams"}),"Garage OpenShift and Cloud Pak MOOC"),". Week 2 focuses on extending the application from week 1."),Object(o.b)("h2",null,"Session 1, Week 2 — The Day 2 Developer Experience"),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Before you proceed, make sure you have signed up for the MOOC development environment. It is a paid IBM Cloud account with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/overview"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Be sure you have already done the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/homework/teams"}),"Welcome to your MOOC team")," tasks"),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/getting-started/cli"}),"IBM Garage for Cloud CLI")," (again) to ensure you have the latest version"))),Object(o.b)("p",null,"Week 2 of the MOOC focuses on the Day 2 Developer Experience: How to use the Developer Tools envionment to perform the software delivery lifecycle (SDLC)."),Object(o.b)("p",null,"This homework assumes that you have:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Reviewed the Playback from the Week 2 Monday session"),Object(o.b)("li",{parentName:"ul"},"Seen a demo of each of the homework tasks below"),Object(o.b)("li",{parentName:"ul"},"Seen demos and discussion about what is expected from the homework")),Object(o.b)(s,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": Support is provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"#catalyst-project")," Slack channel (in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://ibm-garage.slack.com"}),"IBM Garage for Cloud Slack Org")," team). This channel will also be used to share any common issues found.")),Object(o.b)("h3",null,"Homework tasks"),Object(o.b)("p",null,"The homework for Week 2 helps you understand the tasks in the Day 2 Developer Experience. Day 1 focuses on being able to use the environment well enough to develop and deploy a basic cloud-native application. Day 2 focuses on using the SDLC to iteratively develop, deliver, operate, secure, and manage applications. As a team executes the key agile ceremonies using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/garage/method/cloud/"}),"Garage Method"),", it’s important for developers and architects to understand what is involved in moving software components consistently and reliably from ",Object(o.b)("em",{parentName:"p"},"dev")," to ",Object(o.b)("em",{parentName:"p"},"test")," and on to ",Object(o.b)("em",{parentName:"p"},"production"),". A good understanding of common Day 2 activities is a critical skill for cloud-native development teams."),Object(o.b)("p",null,"This week’s homework involves a number of tasks that are more advanced than those from week 1, so take your time and do some research on the topic before jumping into the task."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Task"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Link"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Time"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Re-read the Developer Guide"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"There have been updates from the first week. Focus on Tools Guides for the homework below and the guides for Inventory Micro App Part 1 and 2."),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/overview"}),"Developer Guide")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Review your image registry"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the Image Registry guide, follow the ",Object(o.b)("em",{parentName:"td"},"Give it a try")," section"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/tools/image-registry#give-it-a-try"}),"Image Registry")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"15 mins")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Review your app’s code quality"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the SonarQube guide, follow the ",Object(o.b)("em",{parentName:"td"},"Give it a try")," section"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/tools/code-analysis#give-it-a-try"}),"Code Analysis")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 mins")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View your app’s logs"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the LogDNA guide, follow the ",Object(o.b)("em",{parentName:"td"},"Give it a try")," section"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/tools/log-management#give-it-a-try"}),"Log Management")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Monitor your app"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using the SysDig guide, follow the ",Object(o.b)("em",{parentName:"td"},"Give it a try")," section"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/tools/monitoring#give-it-a-try"}),"Monitoring")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Using GitOps to deploy your Inventory app’s components to ",Object(o.b)("inlineCode",{parentName:"td"},"test")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/practical/inventory-part2#using-cd-to-deliver-to-test"}),"Inventory Part 2 - CD")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"45 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secure your Inventory app"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/practical/inventory-part2#securing-the-solution-with-app-id"}),"Inventory Part 2 - Secure App")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add a cloud database to you Inventory service"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/practical/inventory-part2#add-a-cloudant-integration-to-your-backend-service"}),"Inventory Part 2 - Database")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"45 min")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Install Dev tools on CRC"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Install and configure the Developer Tools into Red Hat CodeReady Containers"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/admin/installation-crc"}),"Install CRC")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 hr")))),Object(o.b)("p",null,"Once you have completed these tasks, you will have completed the homework for both the Day 1 Developer Experience and the Day 2 Developer Experience. For Day 1, you created your first app and CI pipeline, and then extended that into a 3-tier polyglot solution. For Day 2, you worked with your application’s logs, monitored your app, and moved your code from ",Object(o.b)("em",{parentName:"p"},"dev")," to ",Object(o.b)("em",{parentName:"p"},"test"),"."),Object(o.b)("p",null,"What is very clear is that the Developer Tools envionment—an application architeture that combines a Red Hat OpenShift or Kubernetes cluster with powerful cloud services, packaged with a development environment with a CI/CD pipeline incorporating best-of-breed open source tools—gives you a powerful development platform that enables you to build any form of cloud-native application. These skills form the foundation not only to develop applications for Kubernetes and OpenShift, but to develop applications that leverage the IBM Cloud Paks as well. Keep an out for the ",Object(o.b)("em",{parentName:"p"},"IBM Cloud Pak Developers Guide"),", coming in 2020."),Object(o.b)("h3",null,"Homework Review Week 2"),Object(o.b)("p",null,"The homework review will take the form of a show-and-tell and a retrospective. The show-and-tell includes a description of tasks that didn’t go so well. It will close with a retrospective for the attendees who have completed the homework tasks. We are looking for feedback from three perspectives:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"What went well?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"What needs improvement?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Next steps?"))),Object(o.b)("p",null,"Please use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reetro-io.herokuapp.com/board/5dc4fca0074a5400170d9c93/5dd0c5f09e2836001750eeb3"}),"online retrospective")," board during the live Homework session to evaluate the session. As students enter feedback, we’ll all be able to see it on this shared screen."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-homework-tasks-week-2-index-mdx-e18654e46ec23d8fde52.js.map