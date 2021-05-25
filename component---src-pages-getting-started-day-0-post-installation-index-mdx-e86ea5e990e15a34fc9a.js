(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"+KkB":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return h}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("XbGe"),b=a("T0C+"),i=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("PageDescription"),p=c("Tabs"),d=c("Tab"),u={_frontmatter:i},m=l.a;function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"Provides a walk-through of the provisioned environment and the steps to validate it is ready to\nbegin on-boarding developers.")),Object(r.b)("h2",null,"Explore the provisioned resources"),Object(r.b)("h3",null,Object(r.b)(b.a,{name:"ic",mdxType:"Globals"})," resources"),Object(r.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In the IBM Cloud console, open the ",Object(r.b)("a",{parentName:"li",href:"https://cloud.ibm.com/resources",title:"Resource list"},"Resource List")),Object(r.b)("li",{parentName:"ol"},"On the Resource List page, filter by your Resource Group by selecting the resource group from the ",Object(r.b)("inlineCode",{parentName:"li"},"Group")," dropdown (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(r.b)("li",{parentName:"ol"},"You should see these resources listed under the following sections:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Services"),": depending on the configuration could be quite a few (LogDNA, Sysdig, Activity Tracker, Watson Assistant, Watson Studio, PostgreSQL, MongoDB, etc)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Storage"),": possibly Cloud Object Storage")))),Object(r.b)("h3",null,"Cluster resources"),Object(r.b)("p",null,"Log in to the cluster and look at the console to see the resources that have been provisioned within the cluster."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the cluster console"),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(d,{label:"IBM Cloud",mdxType:"Tab"},Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(r.b)("a",{parentName:"li",href:"https://cloud.ibm.com/resources",title:"Resource list"},"Resource List")),Object(r.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group by selecting the resource group from the ",Object(r.b)("inlineCode",{parentName:"li"},"Group")," dropdown (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(r.b)("li",{parentName:"ul"},"Expand the ",Object(r.b)("strong",{parentName:"li"},"Clusters")," section and click on the appropriate cluster"),Object(r.b)("li",{parentName:"ul"},"Click the button to open the Kubernetes or OpenShift web console"))),Object(r.b)(d,{label:"Hybrid",mdxType:"Tab"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"```shell script\noc login {server_url} -u {username} -p {password}\noc console\n```\n")))))),Object(r.b)("br",null),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Navigate to the ",Object(r.b)("inlineCode",{parentName:"li"},"tools")," namespace/project."),Object(r.b)("li",{parentName:"ol"},"Look at the status of the pods in the cluster. All should be either in ",Object(r.b)("inlineCode",{parentName:"li"},"running")," or ",Object(r.b)("inlineCode",{parentName:"li"},"completed")," state."),Object(r.b)("li",{parentName:"ol"},"If LogDNA or Sysdig were bound to the cluster then a ",Object(r.b)("inlineCode",{parentName:"li"},"ibm-observe")," namespace/project should have been created containing\na pod for each node in the cluster")),Object(r.b)("h3",null,"Validate LogDNA"),Object(r.b)("p",null,"If LogDNA was provisioned and/or bound to the cluster, check that log data is flowing into ",Object(r.b)("a",{parentName:"p",href:"/tools/logdna"},"LogDNA")),Object(r.b)("h3",null,"Validate/complete the SysDig setup"),Object(r.b)("p",null,"Complete the ",Object(r.b)("a",{parentName:"p",href:"/admin/sysdig-setup"},"setup of Sysdig")," and ",Object(r.b)("a",{parentName:"p",href:"/tools/sysdig"},"check the monitoring data")," is flowing"),Object(r.b)("h3",null,"Validate the Developer Dashboard"),Object(r.b)("p",null,"Test opening the ",Object(r.b)("a",{parentName:"p",href:"/getting-started-day-1/dashboard/"},Object(r.b)(b.a,{name:"dashboard",mdxType:"Globals"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into the cluster from the command-line")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Run either or all of the CLI options to load the dashboard"),Object(r.b)(p,{mdxType:"Tabs"},Object(r.b)(d,{label:"oc",mdxType:"Tab"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"oc dashboard\n"))),Object(r.b)(d,{label:"kubectl",mdxType:"Tab"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubetl dashboard\n"))),Object(r.b)(d,{label:"IGC",mdxType:"Tab"},Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"igc dashboard\n")))))),Object(r.b)("h3",null,"Validate the installed tools"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log into the cluster from the command-line"),Object(r.b)("li",{parentName:"ol"},"Run the ",Object(r.b)("a",{parentName:"li",href:"/getting-started/cli"},Object(r.b)(b.a,{name:"igccli",mdxType:"Globals"}))," ",Object(r.b)("inlineCode",{parentName:"li"},"credentials")," command to list the credentials for the tools",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"oc credentials -n tools\n"))),Object(r.b)("li",{parentName:"ol"},"Use the url and credentials provided for each tool to validate the provided credentials")),Object(r.b)("h2",null,"Additional configuration"),Object(r.b)("p",null,"The following post installation setup is required. To get the developers enabled quickly, make sure you have\ncompleted at least post installation tasks. The customization is optional and down to development team needs."),Object(r.b)("h3",null,"Customize the Dashboard configuration"),Object(r.b)("p",null,"Perform the steps in ",Object(r.b)("a",{parentName:"p",href:"/admin/config-dashboard"},"Configure Dashboard")," to customize tiles and menu items for the tools\nthat are external to the cluster."),Object(r.b)("h3",null,"Set up user access"),Object(r.b)("p",null,"Configure the RBAC rules in the development cluster. This restricts who can change the parts of the cluster where\nthe tools are installed."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run the RBAC script ",Object(r.b)("inlineCode",{parentName:"li"},"./terraform/scripts/rbac.sh")," found in the ",Object(r.b)("inlineCode",{parentName:"li"},"ibm-garage-iteration-zero")," repository")),Object(r.b)("h3",null,"Create a CI namespace/project"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Log into the cluster from the command-line"),Object(r.b)("li",{parentName:"ol"},"Run the ",Object(r.b)("a",{parentName:"li",href:"/getting-started/cli"},Object(r.b)(b.a,{name:"igccli",mdxType:"Globals"}))," ",Object(r.b)("inlineCode",{parentName:"li"},"sync")," command to create the namespace/project",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"oc sync {project}\n")))),Object(r.b)("h3",null,"Setup a GitOps repo"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Follow the steps to ",Object(r.b)("a",{parentName:"li",href:"/tools/argocd#set-up-the-gitops-repo"},"create a GitOps repo"),"."),Object(r.b)("li",{parentName:"ol"},"Follow the steps to ",Object(r.b)("a",{parentName:"li",href:"/tools/argocd#hook-the-ci-pipeline-to-the-cd-pipeline"},"add configuration for the CI pipeline"),", using\nthe namespace created in the previous step.")),Object(r.b)("h3",null,"Test the pipeline"),Object(r.b)("p",null,"The best way to verify that the tools have been configured properly is to deploy a sample pipeline. Follow the\n",Object(r.b)("a",{parentName:"p",href:"/getting-started-day-1/deploy-app"},"deploy an app")," steps for one of the starter kits to ensure that all the tools have\nbeen configured properly."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Use the project/namespace created in the ",Object(r.b)("a",{parentName:"p",href:"#create-a-ci-namespaceproject"},"previous two steps")," when deploying the app"))}h.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),u=a.n(d),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(m.b)("div",{className:p()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+j.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=a("dI71"),N=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0,strict:!0}),r=o===n,i=new RegExp(n+"/?(#.*)?$"),c=a.replace(i,o);return Object(m.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=r,t),N.listItem)},Object(m.b)(b.Link,{className:N.link,to:""+c},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},o))))))},t}(o.a.Component),x=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,p=t.relativePagePath,d=t.titleType,u=s.tabs,j=s.title,g=s.theme,N=s.description,T=s.keywords,y=Object(v.a)().interiorTheme,w=Object(b.useStaticQuery)("223705900").site.pathPrefix,C=w?n.pathname.replace(w,""):n.pathname,k=u?C.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",P=g||y;return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:P,pageTitle:j,pageDescription:N,pageKeywords:T,titleType:d},Object(m.b)(h,{title:o?Object(m.b)(o,null):j,label:"label",tabs:u,theme:P}),u&&Object(m.b)(f,{slug:C,tabs:u,currentTab:k}),Object(m.b)(x.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-post-installation-index-mdx-e86ea5e990e15a34fc9a.js.map