(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),p=a("NmYn"),l=a.n(p),b=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),r=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,i=e.tabs,p=void 0===i?[]:i;return Object(u.b)("div",{className:r()(m.a.pageHeader,(t={},t[m.a.withTabs]=p.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,p=i.baseUrl,l=i.subDirectory,c=p+"/edit/"+i.branch+l+"/src/pages"+t;return p?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("9Hrx"),A=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),p=i===n,c=new RegExp(n+"/?(#.*)?$"),o=a.replace(c,i);return Object(u.b)("li",{key:e,className:r()((t={},t[A.selectedItem]=p,t),A.listItem)},Object(u.b)(b.Link,{className:A.link,to:""+o},e))}));return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:A.list},i))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,p=t.frontmatter,s=void 0===p?{}:p,r=t.relativePagePath,d=t.titleType,m=s.tabs,h=s.title,N=s.theme,A=s.description,k=s.keywords,C=Object(y.a)().interiorTheme,x=Object(b.useStaticQuery)("2456312558").site.pathPrefix,v=x?n.pathname.replace(x,""):n.pathname,T=m?v.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=N||C;return Object(u.b)(o.a,{tabs:m,homepage:!1,theme:I,pageTitle:h,pageDescription:A,pageKeywords:k,titleType:d},Object(u.b)(j,{title:i?Object(u.b)(i,null):h,label:"label",tabs:m,theme:I}),m&&Object(u.b)(f,{slug:v,tabs:m,currentTab:T}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:r})),Object(u.b)(g.a,{pageContext:t,location:n,slug:v,tabs:m,currentTab:T}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tOYb:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a("k1TG"),i=a("8o2o"),p=(a("q1tI"),a("7ljp")),l=a("013z"),b=a("T0C+"),c=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(p.b)("div",t)}},s=o("PageDescription"),r=o("AnchorLinks"),d=o("AnchorLink"),m=o("InlineNotification"),u={_frontmatter:c},j=l.a;function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(p.b)(j,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(p.b)(s,{mdxType:"PageDescription"},Object(p.b)("p",null,"Use IBM Cloud Pak for Applications to build new cloud-native applications")),Object(p.b)("p",null,"This guide assumes the following:"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"You are using a ",Object(p.b)(b.a,{name:"env",mdxType:"Globals"})," that has already been installed."),Object(p.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment.")),Object(p.b)("p",null,"This guide consists of the following sections:"),Object(p.b)(r,{mdxType:"AnchorLinks"},Object(p.b)(d,{to:"#cp4apps-dashboard",mdxType:"AnchorLink"},"CP4Apps Dashboard"),Object(p.b)(d,{to:"#cp4apps-dev-tools",mdxType:"AnchorLink"},"CP4Apps Dev Tools"),Object(p.b)(d,{to:"#create-a-new-app-using-the-appsody-cli",mdxType:"AnchorLink"},"Create a new app using the Appsody CLI"),Object(p.b)(d,{to:"#create-a-new-app-using-codewind",mdxType:"AnchorLink"},"Create a new app using Codewind"),Object(p.b)(d,{to:"#build-an-app-with-a-tekton-pipeline",mdxType:"AnchorLink"},"Build an app with a Tekton pipeline"),Object(p.b)(d,{to:"#scale-to-zero-serverless",mdxType:"AnchorLink"},"Scale to zero with Serverless")),Object(p.b)("h2",null,"CP4Apps dashboard"),Object(p.b)("p",null,"Open the Cloud Pak for Applications dashboard."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Open the OpenShift web console")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Click on the App Launcher and select “Cloud Pak for Applications”"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.166666666666668%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVQY02OQk5bk5eHm5GBnY2Pj4OBgYWEGMtnZ2RlggIWFRUBAgJODg4eHh4+Xl4uDjYudjZmRESRnGRRbXN+Skl8Sm5qVkp2fklOUXlje2t7R1d0NxO2dnTOmTy+vqJSQlpeWUZCSVZTTMlbUNZXTNBSTUWDwaJjZu3pX37q9kzcd6Fm7r3nhxu6lW588ffH3z58f/////vv3////x46ftHPxNjG307d0MiqcbFkxx7xoipaNJ4NWSJaQdaCYQ7iiXwqvQwSDkQ+zvmdiVXt597SCjmlF7ZNLK2tT0zJd3H1sHVytbJ3UdIxUtI3UDK019MwYBEw85GwDBPSdRE09pa18BQxd5eyDWFWsGOVNGWWNmWVNtC2ddSwctQwttfRMtfTNdI0stA0s9ExttQzMGXj1nRhVrZhULBmVzBmBpIolkM2qbsOqYcesas1v4Kpn5WJi5WBm42RgYm1gaqNvYq1jaAE0SFPPFAC8eWHhYJNr8gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4Apps Launcher",title:"CP4Apps Launcher",src:"/static/8746823c7aa4e73de14f7e48bc0d542c/3cbba/icp4apps-launcher.png",srcSet:["/static/8746823c7aa4e73de14f7e48bc0d542c/7fc1e/icp4apps-launcher.png 288w","/static/8746823c7aa4e73de14f7e48bc0d542c/a5df1/icp4apps-launcher.png 576w","/static/8746823c7aa4e73de14f7e48bc0d542c/3cbba/icp4apps-launcher.png 1152w","/static/8746823c7aa4e73de14f7e48bc0d542c/bdae8/icp4apps-launcher.png 1602w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(p.b)("p",null,"In the CP4Apps dashboard, familiarize yourself with the console pages."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Explore the Instance, Docs, and Guides pages"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABYlAAAWJQFJUiTwAAACX0lEQVQoz31R21LaUBTNkw++6OjoH/g/MhYesBae+bqqQLgkSAK5cL/WKQIqIReSlpYQEhpwsCuJ+tKZrkn2WXudvc85e2/i+Pj47Oxsb29vf3//4OAA7uHh4cnJyenp6dHREfF/xOPxRCIRjUYvLy9hY7HYl6urz9FooITD4dD5Ob6Li0+RSOQiFPLcdxDr9XowGJim+fr6ut1up9Opoqrb3Q6uZVmapu18joDn5+fVagUeKAABv9FoaNoMimM7kqxIwweHo19cd7G0pNHQrTDgv+bzsSSbdf5l+uTudhvX3Ww2hGWtXNfFEYvFYrk0bcexwYffFzPNsm3Htk1ZMn8Y1mrlrP8sDf03XMSZMEtCkqTJZDLzoXlQNaw/5wGXZVkzDM3f8riua7qhKAqCUSABaTQafb2+SabShcJdkWFhWYYVxUqpzDEMS1EFsVKhCwWGLZFkhmFZjucpih6Px14yljSZQQ5NI7uIvWwu3253OI4vc3wuR2Wy2WQy1Wq18nkqmUrVavVkMo3+vd18i3vJDCy2r29uyUw2lwOlVVXVPczw+3xmGAaIYehIJPB0lI3DkMMLIi8IRYbheaFaqwmCiAiEqoqHYA0UX1C8mx8fH2v1Rq/fx1O7ne63+/tms9VsNDudLoggiji6Xm+Iogi31W5XqlWQXq9P4IDB4IEks3d3RbSrzHGweDNaQNEFhimxbIktldBIfNjieAEKSK/Xe2sYJFQelIDJgcBK7wjcwH7I3qiwYIbz+RydCLoSlOTPGXPVgzo/gJwP8paMvj/5wCtwOAh0cFgkB/f8i7+P6rNzvv06pgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CP4Apps Landing",title:"CP4Apps Landing",src:"/static/ef7771b0193595ecb2ebe01fbf1484c2/3cbba/icp4apps-landing.png",srcSet:["/static/ef7771b0193595ecb2ebe01fbf1484c2/7fc1e/icp4apps-landing.png 288w","/static/ef7771b0193595ecb2ebe01fbf1484c2/a5df1/icp4apps-landing.png 576w","/static/ef7771b0193595ecb2ebe01fbf1484c2/3cbba/icp4apps-landing.png 1152w","/static/ef7771b0193595ecb2ebe01fbf1484c2/b5ea2/icp4apps-landing.png 1318w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(p.b)("h2",null,"CP4Apps Dev Tools"),Object(p.b)("p",null,"Set up the dev tools."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the CP4Apps dashboard, on the Home page, go to the Let’s get started! section")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Press Setup Dev Tools to see the instructions we’ll follow below"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABe0lEQVQoz3VRXW+CQBD0//+fNn1r+9Iq3wd6wJ0gH6IgFkwbATmUjhAfaurkstnb3dnLzE32+68wilRVQ9ymqUHMdZI4jmtacxzGl6ikadr3/eVy6f9isstzRQFXd102nUlPzy9xvFZU7fXtXdP0mSRLsloU5f/kpmmOx+PpdBJCfP/8tG1b17UQLeqonNq2E13/AJM839u2Q217FYRLz4/i2GUcOaV2EISGQTab7UMynsKzzQA8VVf1mLQDxqRu6qqqjtW1h4B407zbQfJgjzVfUFlRJVnBIcQyTUs3CAwjpkUQiSnLqq7jNofAKzlNM00zQINJmEbj43Oq6Qa2MM6xD9MYHzZDnMMYp7azWFB801Wzi8LSQxNq4Tl6/mp1neJLTPv+CsmhPIxCIAoyYSriBB8wCsTlfD7jR+AAclS6rkNldAQR13vDQE6ShFIahmE3AC44jhMEwUiIoohz7nlelmX3ZOwuy5IxBg5yMQCLiqI4DwBf3HBH/gWkGF5KQGYwLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Setup CP4Apps Dev Tools",title:"Setup CP4Apps Dev Tools",src:"/static/d638b709661077edefabda195de4042d/3cbba/icp4apps-devtools.png",srcSet:["/static/d638b709661077edefabda195de4042d/7fc1e/icp4apps-devtools.png 288w","/static/d638b709661077edefabda195de4042d/a5df1/icp4apps-devtools.png 576w","/static/d638b709661077edefabda195de4042d/3cbba/icp4apps-devtools.png 1152w","/static/d638b709661077edefabda195de4042d/7dc98/icp4apps-devtools.png 1200w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(p.b)("p",null,"Install Codewind and Appsody."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.eclipse.org/codewind/vsc-getting-started.html"}),"Install Codewind for VS Code IDE"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.eclipse.org/codewind/eclipse-getting-started.html"}),"Install Codewind for Eclipse IDE"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://appsody.dev/docs/getting-started/installation"}),"Install the Appsody CLI")))),Object(p.b)("p",null,"We’ve installed both Codewind and Appsody to show you how to use both. As you’ll see, they have many features in common."),Object(p.b)("h2",null,"Create a new app using the Appsody CLI"),Object(p.b)("p",null,"Now that we’ve installed the Appsody CLI, we’ll configure it and use it to implement an app."),Object(p.b)("h3",null,"Configure the Appsody CLI"),Object(p.b)("p",null,"The CP4Apps installation in your OpenShift cluster includes an instance of Kabanero Enterprise. In the CP4Apps dashboard, the Instance page shows details about this Kabanero Enterprise instance. Configure your Appsody CLI to access this instance."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the CP4Apps dashboard, go to the Instance page")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the Collection Hub section, copy the Appsody URL (i.e. {Appsody-URL})")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Add the repository in Kabanero Enterprise to your local Appsody CLI’s configuration"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody repo add kabanero-0.2.1 {Appsody-URL}\n")),Object(p.b)("p",{parentName:"li"},"  For example:"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody repo add kabanero-0.2.1 https://github.com/kabanero-io/collections/releases/download/0.2.1/kabanero-index.yaml\n")))),Object(p.b)("p",null,"Make the repo in Kabanero Enterprise the default, as shown by the astrix (",Object(p.b)("inlineCode",{parentName:"p"},"*"),") in the list of repos."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Set the default repo and list them"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ appsody repo set-default kabanero-0.2.1\n$ appsody repo list\n\nNAME                    URL\n*kabanero-0.2.1         https://github.com/kabanero-io/collections/releases/download/0.2.1/kabanero-index.yaml\nincubator               https://github.com/appsody/stacks/releases/latest/download/incubator-index.yaml\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"List the technology stacks included in the repo"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ appsody list kabanero-0.2.1\n\nREPO            ID                      VERSION         TEMPLATES               DESCRIPTION\nkabanero-0.2.1  java-microprofile       0.2.18          *default                Eclipse MicroProfile on Open Liberty & OpenJ9 using Maven\nkabanero-0.2.1  java-spring-boot2       0.3.15          *default, kotlin        Spring Boot using OpenJ9 and Maven\nkabanero-0.2.1  nodejs                  0.2.5           *simple                 Runtime for Node.js applications\nkabanero-0.2.1  nodejs-express          0.2.7           scaffold, *simple       Express web framework for Node.js\nkabanero-0.2.1  nodejs-loopback         0.1.5           *scaffold               LoopBack 4 API Framework for Node.js\n")),Object(p.b)("p",{parentName:"li"},"  Notice that the stacks listed are the same as the list of Collections back on the Instance page."))),Object(p.b)("h3",null,"Create an application"),Object(p.b)("p",null,"Now that we’ve configured our Appsody CLI, let’s use it to create an application."),Object(p.b)("p",null,"Create an application named ",Object(p.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")," using Appsody and the Kabanero Enterprise application stack in our cluster."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Create an empty project directory named ",Object(p.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p ~/projects/nodejs-express-{initials}\ncd ~/projects/nodejs-express-{initials}\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Initialize the project"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express\n")))),Object(p.b)("p",null,"To run the application, you don’t need to have node.js or the Java SDK installed on your workstation. The application will run in a container that includes all of the tools."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Start the application",Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody run\n")))),Object(p.b)("p",null,"Whenever any of the application files are edited, Kabanero Enterprise detects the change and automatically restarts the application."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Using your favorite editor, edit ",Object(p.b)("inlineCode",{parentName:"p"},"app.js"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Change the response to ",Object(p.b)("inlineCode",{parentName:"p"},"Hello Garage"),"."))),Object(p.b)("p",null,"Notice that the change is detected and the application automatically restarted."),Object(p.b)(m,{mdxType:"InlineNotification"},Object(p.b)("p",null,"Each Appsody stack comes with instrumentation that you can access with the following endpoints:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Application endpoint: http://localhost:3000/"),Object(p.b)("li",{parentName:"ul"},"Health endpoint: http://localhost:3000/health"),Object(p.b)("li",{parentName:"ul"},"Liveness endpoint: http://localhost:3000/live"),Object(p.b)("li",{parentName:"ul"},"Readiness endpoint: http://localhost:3000/ready"),Object(p.b)("li",{parentName:"ul"},"Metrics endpoint: http://localhost:3000/metrics"),Object(p.b)("li",{parentName:"ul"},"Dashboard endpoint: http://localhost:3000/appmetrics-dash (development only)"))),Object(p.b)("p",null,"While the application is running, experiment with using its instrumentation endpoints."),Object(p.b)("p",null,"When you’re through with the application, stop it."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Open another shell and switch to the same application directory (e.g. `",Object(p.b)("inlineCode",{parentName:"p"},"~/projects/nodejs-express-{initials}"),")`")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Stop the application"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody stop\n")))),Object(p.b)("h2",null,"Create a new app using Codewind"),Object(p.b)("p",null,"Now that we’ve installed the Codewind plugin, we’ll configure it and use it to implement an app."),Object(p.b)("h3",null,"Configure the Codewind plugin"),Object(p.b)("p",null,"The CP4Apps installation in your OpenShift cluster includes an instance of Kabanero Enterprise. In the CP4Apps dashboard, the Instance page shows details about this Kabanero Enterprise instance. Configure your Codewind plugin to access this instance."),Object(p.b)("p",null,"Set the Collection Hub URL as a Template Source in Codewind:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"If using the VS Code IDE, see ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.eclipse.org/codewind/mdt-vsc-workingwithtemplates.html"}),"Configuring template sources for VS Code"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"If using the Eclipse IDE, See ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.eclipse.org/codewind/mdteclipseworkingwithtemplates.html"}),"Configuring template sources for Eclipse")))),Object(p.b)("h3",null,"Create an application"),Object(p.b)("p",null,"Now that we’ve configured our Codewind plugin, let’s use it to create an application."),Object(p.b)("p",null,"Create an application named ",Object(p.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")," using Codewind and the Kabanero Enterprise application stack in our cluster."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Select Projects (Local), then select New Project")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Select the “Kabanero Node.js Express simple template (Appsody Stacks - kabanero-0.2.1)” template from the list")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Specify a name, such as ",Object(p.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")))),Object(p.b)("p",null,"The application will start."),Object(p.b)("p",null,"To work with the source code, right click on Projects and select Open CodeWind Workspace."),Object(p.b)("p",null,"Experiment with using Codewind to perform actions on your running application."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the CodeWind view, right click on your application to see the actions the plugin can perform"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVQoz1WQ2W7bMBBF9Q99LFLb2ixL0b5YIiUvMmlttiQv8h47TpqlSNG4QD+hL/3r0lUf2sHh5QVmhsQM5dg2SqbZNIcQmn/C+j8Mw/BcL0uzMBzZjqOZZstW6cByPZeSxU5b78JgiMOQFHYEodVo0K3WlWaTZRiiLvBP58fD6X6zP+SLJW8avGd7AFC8YkiqNRmMIc7640mAUqeHQBgRfJQoXZ9XTLuH5vtzdfc4257K3SEsC6kPPOBRN934w2Bnze+U1UVZfVPX7wR9e9E3V4TyVcifxHDq5wsnLbtpEZQzFQ9paF2bRVGSJAEhiFCEEB6NUEgOwgQ8jlzXUxUtA/HX6uXL8nk3XKyCfAbSOIig71OSdMvwHC3xHYHMWyN0OiJ5lNwkS/ToT36df/w8fn+Diwcze3LLfb8AEFybOY5vc22iLMsRrU3tidI0ozlWNi9wlsRlDsejhiFzwARkYeSHZrNFVsswHMNyf/UfSAYAuK7Ww8EwiRMylGpagq7y7TZl63LYg3gQmMqtIYumLOqyWJsaXRIAhMV8GaWT0TjWLEe1bFnT2E8fKTOq0uMbAW+e8fYVb1+sqNLxUkU1lRzOzLgqHt7Lz5dgfqJBxMKE89MbI/wN+YmK3PXvjDMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"CodeWind Options",title:"CodeWind Options",src:"/static/379564a6e723cf046c78ab8c0c57f12c/3cbba/codewind.png",srcSet:["/static/379564a6e723cf046c78ab8c0c57f12c/7fc1e/codewind.png 288w","/static/379564a6e723cf046c78ab8c0c57f12c/a5df1/codewind.png 576w","/static/379564a6e723cf046c78ab8c0c57f12c/3cbba/codewind.png 1152w","/static/379564a6e723cf046c78ab8c0c57f12c/d9278/codewind.png 1446w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Perform each of the actions on your application:"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"Open App"),Object(p.b)("li",{parentName:"ul"},"Open Project Overview, verify the ports and status"),Object(p.b)("li",{parentName:"ul"},"Open Container Shell, explore the filesystem"),Object(p.b)("li",{parentName:"ul"},"Open Application Monitor, use the application and see the traffic metrics"),Object(p.b)("li",{parentName:"ul"},"Open Performance Dashboard and run a load test, see the traffic metrics"),Object(p.b)("li",{parentName:"ul"},"Restart in Debug mode, insert a break point in ",Object(p.b)("inlineCode",{parentName:"li"},"app.js")," and run the app to stop the application in debug view")))),Object(p.b)("h2",null,"Build an app with a Tekton pipeline"),Object(p.b)("p",null,"To deploy an app using Tekton, we’ll need:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"a project in OpenShift to deploy the app to"),Object(p.b)("li",{parentName:"ul"},"a Git repo for the app’s code with a webhook that triggers the Tekton pipeline"),Object(p.b)("li",{parentName:"ul"},"the code for the app that goes in the Git repo")),Object(p.b)("p",null,"When the code is pushed to the git repo, the pipeline will get triggered."),Object(p.b)("h3",null,"Create OpenShift project"),Object(p.b)("p",null,"Create a project or use an existing one. Set the OpenShift Container Platform CLI to use the project."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Find your project in OpenShift named ",Object(p.b)("inlineCode",{parentName:"p"},"dev-{initials}")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"If it doesn’t already exist, create it",Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc new-project dev-{initials}\n"))))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Change context to your project"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc project dev-{initials}\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Verify project context"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"oc project -q\n")))),Object(p.b)("h3",null,"Connect the pipeline to Git"),Object(p.b)("p",null,"Create a Git repository for your app and connect it to the Tekton pipeline."),Object(p.b)("p",null,"First, create the Git repo."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In your MOOC team’s GitHub organization, create a Git repo named ",Object(p.b)("inlineCode",{parentName:"p"},"nodejs-express-{initials}")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"For example, ",Object(p.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-one/nodejs-express-cs.git"))))),Object(p.b)("p",null,"Second, open the Tekton dashboard."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the CP4Apps dashboard, go to the Instance page")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the Tools section, click on the Tekton URL to open the Tekton dashboard"),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"If prompted, log in using OpenShift")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"If prompted, allow access"))))),Object(p.b)(m,{mdxType:"InlineNotification"},Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"In the Tekton dashboard, select the Pipelines page")),Object(p.b)("p",null,"Notice that Kabanero Enterprise includes pipelines for building apps based on different technologies: MicroProfile, Spring Boot, Node.js, and Express.js. When a pipeline runs, it’ll run in a certain Kubernetes namespace (a.k.a. OpenShift project). Each of the pipeline’s tasks will run in a new container and pod. A task’s steps all run in the same container.")),Object(p.b)("p",null,"Third, create the webhook. The Kabanero Enterprise instance already includes several pipelines. Create a webhook in the Git repo that triggers the proper pipeline."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the Tekton dashboard, select the Webhooks page")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Press Add Webhook")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the Create Webhook form, enter the following values:"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"120.13888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC1UlEQVQ4y6VUO2/UQBB2CUVSgkBKTaiuBREkEEHQQKSkhBL+BLSIkoaCAtFQIBr+AX3aO+6iu3DOPfy4h89ee9evO3t3zWf7zlxCUCT4NB7Nrveb2Z2dWSU7DSkl9HQ6PTo66na79Xq90WioqpqdB6UkVKhcCCGqSdh/Jf8zFMdxOp2OpmldVXUJwRTnXAiOeBeTGWO6rpumCb5t22EY+gXiOLqYnCRJHMfQeUyRmVbUN8hwRLUxs7yU+JnjyzNCoFmW8kzBJityKuTECYyJZ1oU4tCFG3Dipy4k4IWk5dCmi5RLBUxKqZuDBGGsT/wTzVY1u2+4hSbqcNbTSXeQ65NiHmtsJpNUKriGNE0RmfM0SblD55bNZk5gu6HjQSIYxItmJKjEcUMWYMdSiaKojEwIEWmSMWpNJ4N+z9A1w0AqNV0bDod9lzhBgDwyRj1GKQltLrhS1kBxPUKiLpIkXCIKo0LKQRQXmOfffJ7wRGby/4rEsqxWq9VsNtvtNsp4MBjg/PC9WEM5LG/kFBk/3BU8z8PJsUlUTrBCWTPIC/R6IyzJmAUTmcN4NpsZhoGl0eq0xYGXduURYZCm5VXBBTRszMIR3AXnoXIHOycje9gq2gNhQR6NRr1eb1Cg3++XNvoZO8JZ6ApYn5PXmxnkcodRjvxmosr6A1icF0mZJ7QUfI9ME/FQGwjqOHaRLobSOCMoqbORuZAsWED8MCkNiOfH1J+zMPGj34IhFueRy7Dj8Zj6oap7re64pU5a6rj5c9TuWc1j80fH6A7J1BNTV1iuhJ4QkaSnnyHcHUdjQrhAe8LmEg8Lijd/z/AbFYxf+Tq5/oaVT1y9nl25ml27ntVq2fbNbGMzu3efF/+ffXt+6c3lG++3ax9qW++2Nt5uHuqHSu4RAt9w1zmWD3bl7kO5fyCf7smdu/LFy7Qgv/r++tbH20++7O1/PXj0+fGdTzuNceMXWOg7OyJ0HM8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Create Webhook",title:"Create Webhook",src:"/static/4923deeebde889c1fa8a243f158da7f7/3cbba/create-webhook3.png",srcSet:["/static/4923deeebde889c1fa8a243f158da7f7/7fc1e/create-webhook3.png 288w","/static/4923deeebde889c1fa8a243f158da7f7/a5df1/create-webhook3.png 576w","/static/4923deeebde889c1fa8a243f158da7f7/3cbba/create-webhook3.png 1152w","/static/4923deeebde889c1fa8a243f158da7f7/0b124/create-webhook3.png 1728w","/static/4923deeebde889c1fa8a243f158da7f7/dad10/create-webhook3.png 1828w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Name"),": ",Object(p.b)("inlineCode",{parentName:"li"},"nodejs-express-{initials}"),", such as ",Object(p.b)("inlineCode",{parentName:"li"},"nodejs-express-cs")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Repository URL"),": ",Object(p.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-{name}/nodejs-express-{initials}.git"),", such as ",Object(p.b)("inlineCode",{parentName:"li"},"https://github.com/mooc-team-one/nodejs-express-cs.git")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Access Token"),": Select ",Object(p.b)("inlineCode",{parentName:"li"},"github.com-mooc-access-token")," (no need to create a new access token)"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Namespace"),": Select ",Object(p.b)("inlineCode",{parentName:"li"},"kabanero")," (not your own namespace)"),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Pipeline"),": Select ",Object(p.b)("inlineCode",{parentName:"li"},"nodejs-express-build-deploy-pipeline")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Service Account"),": Select ",Object(p.b)("inlineCode",{parentName:"li"},"kabanero-operator")),Object(p.b)("li",{parentName:"ul"},Object(p.b)("strong",{parentName:"li"},"Docker Registry"),": ",Object(p.b)("inlineCode",{parentName:"li"},"docker-registry.default.svc:5000/dev-{initials}"),", such as ",Object(p.b)("inlineCode",{parentName:"li"},"docker-registry.default.svc:5000/dev-cs"))))),Object(p.b)(m,{mdxType:"InlineNotification"},Object(p.b)("p",null,"The webhook doesn’t just notify Tekton when the Git repo’s contents have changed. The webhook also specifies what pipeline to run, what namespace to run it in, the ",Object(p.b)("a",Object(n.a)({parentName:"p"},{href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"}),"Kubernetes service account")," to use to run it, and the registry for the tasks’ container images.")),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Press Create to close the form and create the webhook")),Object(p.b)("h3",null,"Configure the application deployment"),Object(p.b)("p",null,"Add some code to the local repo."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Generate the Appsody manifest"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody deploy --generate-only\n"))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Edit the generated file, ",Object(p.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  namespace: dev-{initials}\n"))))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Check the files into Git"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git init\ngit add .\ngit commit -m "first commit"\n')))),Object(p.b)("h3",null,"Push the app and trigger the pipeline"),Object(p.b)("p",null,"Configure the local repo to map to the git renote repo you created earlier and sync them."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"Add the remote repo URL and push",Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git remote add origin git@github.com:mooc-team-{id}/nodejs-express-{initials}.git\ngit push -u origin master\n")))),Object(p.b)("p",null,"When you push the changes to the server, that triggers the Tekton pipeline."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"In the Tekton dashboard, select the PipelineRuns page"),Object(p.b)("p",{parentName:"li"},"  ",Object(p.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(p.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABS0lEQVQoz5VRS07DMBD1ddhzBc6ExIo9F4GbVGLBgi5QVVWpgISkSRNix56xPR4mCa1AIESfnix/5s28GStsuu3Ta1FqZk6J/0b6TmV7kz+/aeP4dChAiBQ/EydGTw7jrwQfV0W839BDFhdryvdR7ZquqWtr3YzBeYej3kI8rHKkYSwRL+/o/Dpd3KSzK75dkFpn+XL5mGXbZsJgMYTgfSAi2YidGKP3nmgUU+K6NduXEkKySEre5qAZGKiuO617ANzve7np+75t28GC7mWoCcFp/c7Rg0OFiF3XSZ1ZDJ42G6523La8WjGAVA4pJQc+LwpjjLiQdCkEAK+01pJY6tMEGRgAOZesTU1Dx8+TTga5OmD06ElJsrIspbidMA0pOBwp3Q9O6IXz/KZ9OFKJwEwAscgsEcaOD0Zow9fQn1RVVYlt8Te3fRT/hx/+iHptBo9NrAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(p.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"PipelineRuns",title:"PipelineRuns",src:"/static/694de0a297151d1905fd83b2acecd27b/3cbba/pipelinerun-starts.png",srcSet:["/static/694de0a297151d1905fd83b2acecd27b/7fc1e/pipelinerun-starts.png 288w","/static/694de0a297151d1905fd83b2acecd27b/a5df1/pipelinerun-starts.png 576w","/static/694de0a297151d1905fd83b2acecd27b/3cbba/pipelinerun-starts.png 1152w","/static/694de0a297151d1905fd83b2acecd27b/0b124/pipelinerun-starts.png 1728w","/static/694de0a297151d1905fd83b2acecd27b/f5222/pipelinerun-starts.png 1968w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(p.b)("p",{parentName:"li"},"  The page shows the pipeline running."))),Object(p.b)(m,{mdxType:"InlineNotification"},Object(p.b)("p",null,"Click on a PipelineRun to see its details. In its list of Tasks, expand one to see its steps. Select a step to see its details: logs, status, and details.")),Object(p.b)("h2",null,"Scale to zero (Serverless)"),Object(p.b)("p",null,"Use the Git repo created for Tekton to deploy the app using Knative."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Edit the generated file, ",Object(p.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"Set the variable ",Object(p.b)("inlineCode",{parentName:"li"},"createKnativeService")," to ",Object(p.b)("inlineCode",{parentName:"li"},"true"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  createKnativeService: true\n"))))),Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"Push the change to Git"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add app-deploy.yaml\ngit commit -m "make it serverless"\ngit push origin\n')))),Object(p.b)("p",null,"Watch the pipeline run in the Tekton dashboard."),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},Object(p.b)("p",{parentName:"li"},"When the Tekton pipeline is finished, get the URL of the Knative service"),Object(p.b)("pre",{parentName:"li"},Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ oc get ksvc\n\nNAME                URL                                                                                                                               LATESTCREATED             LATESTREADY               READY   REASON\nnodejs-express-cs   http://nodejs-express-cs.dev-cs.mooc-surge-ocp-cluster-0143c5dd31acd8e030a1d6e0ab1380e3-0001.us-east.containers.appdomain.cloud   nodejs-express-cs-gfvfz   nodejs-express-cs-gfvfz   True\n")))))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-index-mdx-89afeba7eff434cd42b9.js.map