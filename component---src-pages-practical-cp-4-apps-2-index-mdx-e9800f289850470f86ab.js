(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{FvS5:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a("k1TG"),p=a("8o2o"),b=(a("q1tI"),a("7ljp")),c=a("013z"),i=a("T0C+"),o=(a("qKvR"),{}),r=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)}},l=r("PageDescription"),s=r("AnchorLinks"),d=r("AnchorLink"),m={_frontmatter:o},O=c.a;function u(e){var t=e.components,a=Object(p.a)(e,["components"]);return Object(b.b)(O,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(l,{mdxType:"PageDescription"},Object(b.b)("p",null,"Use IBM Cloud Pak for Applications to integrate microservices")),Object(b.b)("p",null,"For this homework, you will use two existing applications and deploy them as a set of microservices using the CP4Apps workflow."),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABpElEQVQoz2WQXWsTQRSG9397pSD0RhFE0QtB0CJFKaGVxibQ1KSNSXab7Cab2Ux2dz53vmfX/gQnVLDgc3POwPue95yJsrPzeJYsVmmFm6s4L2e3ZHqjfWt0QFlrjTHqEVIpb6VtjfI+Ahv4dfGiF79Jk83J6tn54hMmQdJARLdVtbxLAAC8aSjnjDFCqOB4+EtNewkbDqN1mn84ffnl4n1If/ft6OTsIyqRCOY9riDJspxxbkXDIQyNlOp3Z29TG/9I8eg6qus6W27yDDBGQ1MASAgxxqar+GpwmcQQh8RtXgyGyTKRnGtjWqfae19TGrUHvBSCUiqV7LrOOtdZezoZP//ek4wgjJWWGyx2qFmXuAvWMMBYinEUqvc+pB0ff07TNDwJZVqQ/hy/GnSK14Q5tnr68/r1KGNvb540etufZL1RQgmJwn8655qmmYzH4YRg1trce91f1EcXkiFY1nS/m0F4lxQi2U8RY/N1NVmWNcIH8wOHVf7irNEZqOeAU4yEENZ12rZB4Uz3oAqXIoT+mR8TFFW53+9AURTgwPZ/8jz/A88oywlbD1k5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Backend Demo",title:"Frontend Backend Demo",src:"/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png",srcSet:["/static/d7e4bd08eece95700746227611ce7769/7fc1e/cp4apps-front-back.png 288w","/static/d7e4bd08eece95700746227611ce7769/a5df1/cp4apps-front-back.png 576w","/static/d7e4bd08eece95700746227611ce7769/3cbba/cp4apps-front-back.png 1152w","/static/d7e4bd08eece95700746227611ce7769/0b124/cp4apps-front-back.png 1728w","/static/d7e4bd08eece95700746227611ce7769/4ea69/cp4apps-front-back.png 2304w","/static/d7e4bd08eece95700746227611ce7769/ebc9b/cp4apps-front-back.png 5160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(b.b)("p",null,"This guide assumes the following:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"You are using a ",Object(b.b)(i.a,{name:"env",mdxType:"Globals"})," that has already been installed."),Object(b.b)("li",{parentName:"ol"},"Cloud Pak for Applications has already been installed in the environment."),Object(b.b)("li",{parentName:"ol"},"You already completed ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/practical/cp4apps"}),"CP4Apps homeworks"),".")),Object(b.b)("p",null,"This guide consists of the following sections:"),Object(b.b)(s,{mdxType:"AnchorLinks"},Object(b.b)(d,{to:"#deploy-existing-backend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing backend as Appsody app"),Object(b.b)(d,{to:"#deploy-existing-frontend-as-appsody-app",mdxType:"AnchorLink"},"Deploy existing frontend as Appsody app"),Object(b.b)(d,{to:"#verify-deployed-microservice-solution",mdxType:"AnchorLink"},"Verify deployed microservice solution")),Object(b.b)("h2",null,"Deploy existing backend as Appsody app"),Object(b.b)("p",null,"Create a backend app from an Appsody template, set it up for Appsody, and connect the repo to a pipeline."),Object(b.b)("p",null,"First, create a backend app from an existing template."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Go to the template ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kabanero-demo/appsody-backend"}),"https://github.com/kabanero-demo/appsody-backend"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Complete the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template"}),"GitHub create repository from template")," process"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(b.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}")))),Object(b.b)("p",{parentName:"li"},"The new repository will be created in your selected organization.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(b.b)("p",null,"Second, set up the cloned template with Appsody."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Initialize the backend as an Appsody Express.js app"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use Appsody to run the backend"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody run -p 3001:3000 -p 9230:9229 -p 8081:8080\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Test the running backend, accessible at ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3001"}),"http://localhost:3001")," (port 3000 will be use later for frontend)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Add deployment manifest"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody deploy --generate-only\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Edit the generated file, ",Object(b.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Specify the namespace to deploy the application into",Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"metadata:\n  namespace: dev-{initials}\n"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Commit and push the new Appsody-related files"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'git add .\ngit commit -m "Add appsody files"\ngit push\n')))),Object(b.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/practical/cp4apps#build-an-app-with-a-tekton-pipeline"}),"Tekton Pipelines Homework"))),Object(b.b)("h2",null,"Deploy existing frontend as Appsody app"),Object(b.b)("p",null,"Create a frontend app from an Appsody template, set it up for Appsody and connect it to the backend, and connect the repo to a pipeline."),Object(b.b)("p",null,"First, create a frontend app from an existing template."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Repeat the steps above to create a repo from a template:"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Template"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/kabanero-demo/appsody-frontend"}),"https://github.com/kabanero-demo/appsody-frontend"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Owner"),": Select the GitHub organization for your team")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"Repository name"),": Use a name like ",Object(b.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"))))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Clone the new Github repo locally"))),Object(b.b)("p",null,"Second, set up the cloned template with Appsody and connect it to the backend."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Initialize the frontend as an Appsody Express.js app"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody init kabanero-0.2.1/nodejs-express none\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Use Appsody to run the frontend"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"appsody run\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Test the running frontend, accessible at ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," (port 3001 is used by the backend)"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Make sure the backend is running with Appsody and exposed on port 3001")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Test the app by adding a new user")))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Repeat the steps above from the backend using the command ",Object(b.b)("inlineCode",{parentName:"p"},"appsody deploy --generate-only")," to add the Appsody deployment manifest file ",Object(b.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," and set the target namespace to ",Object(b.b)("inlineCode",{parentName:"p"},"dev-{initials}"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Also in ",Object(b.b)("inlineCode",{parentName:"p"},"app-deploy.yaml"),", add an environment variable to link the frontend service to the backend service"),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"spec:\n  env:\n    - name: APPSODY_BACKEND_DEFAULT_URL\n      value: http://appsody-backend-{initials}:3000/\n")),Object(b.b)("p",{parentName:"li"},"  (On the server, the frontend and backend will both listen on port 3000 (in different pods).)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Commit and push your changes to Git"))),Object(b.b)("p",null,"Third, connect the repo to the Tekton pipeline."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Create a webhook for your GitHub repo to trigger a Tekton pipeline, as described in ",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/practical/cp4apps#build-an-app-with-a-tekton-pipeline"}),"Tekton Pipelines Homework"))),Object(b.b)("h2",null,"Verify deployed microservice solution"),Object(b.b)("p",null,"The webhooks should have triggered the pipelines to deploy the frontend and backend to your OpenShift project. Let’s verify the apps are in OpenShift and running correctly."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"In the OpenShift web console, navigate to your project and its deployments")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Verify there are two applications corresponding to the frontend (",Object(b.b)("inlineCode",{parentName:"p"},"appsody-frontend-{initials}"),") and backend (",Object(b.b)("inlineCode",{parentName:"p"},"appsody-backend-{initials}"),") services"),Object(b.b)("p",{parentName:"li"},"  ",Object(b.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.416666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAABYlAAAWJQFJUiTwAAACMUlEQVQoz4VSS2/TQBA2ihryOLRKyrGnFETSvOw2dpyXW1DVEyd+KFSopI9AEfwNhKBA0tiO7fXu2uv12mZciSNiNDuaWe3Mfvt9K9Xr9b29vd3dJ7VabWdnZ3t7u1KpbG0Vi49LhUJB+mvlUqlarZbL5RJ4qVQsFiXpkdTqHjbbcqurNJ4dKOp4NHsxnBxrY0MfG6o+GwwnA93Qpifj2YmqT6GEqI2MifFSHU2l3uGofzTuKPp+S353MSeELFcrx0MuYUHIGItYFEWcw8orxsIHhxJc0s5eG6evxsdnsmZ8+vwlyzI4nKRpLBKw9B8mhOCcS8rk9Eg/lrVZW9ZvFrdpkiCEwjDM/mcwQjroq4C82TlqPO9dzK8Aqu/7AB5G2LYNCUSMcRAEEE3ThASi53kAUGrLWvdQh7jf7F0uPgqAzTkM5iKJH2DTIIRHQgbvwJSKJA0Yo0EAOxJQld/cGzxtyfP3lww52LFjSuKAcoKJ63BKmI8ijCOSO+yHPophCtwMzYo66cjDRrN/9eYt9XzbtJnnCOQGzsZbrSJvs/l1R8x16Nj3376GG8u++279/BGvl3kzdDa7g0ZLvj4/ZyS0zE2IUIyRwL4gOKM4sE3uOQlGaPk7cjfUWqP7ZWqucp0VbdpWhvBHrhe3JM7WLsEBiJxLCSpnIsaex3KczLVtiL7rOJaZCCEd9NSuPIR/AoRff7gFriwc4Qh4yWDFIgXygDLOc/qQ74PClFLQAgj7Ax+17eY9P5L1AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Backend Console",title:"Frontend Backend Console",src:"/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png",srcSet:["/static/a11c72cd5454b1afac20d057b698449c/7fc1e/ocp-console-front-back.png 288w","/static/a11c72cd5454b1afac20d057b698449c/a5df1/ocp-console-front-back.png 576w","/static/a11c72cd5454b1afac20d057b698449c/3cbba/ocp-console-front-back.png 1152w","/static/a11c72cd5454b1afac20d057b698449c/0b124/ocp-console-front-back.png 1728w","/static/a11c72cd5454b1afac20d057b698449c/d4943/ocp-console-front-back.png 2058w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Access the route for the frontend service and register a new user"),Object(b.b)("p",{parentName:"li"},"  ",Object(b.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(b.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVQoz41Ry27aQBTlZ6pEkRJDKYSCskpYRanyS911kUW/octKXbRS1UWkLIDUHo9f4NhgY0xIysPGrxkbmoU9yUCaVUOUq6PRvTP36Ny5J1cuMXmGKZWr78uVWp45qtZOjuof6vWTw8OD/cou83avUGQK7/byxUq1Vizt0yRfKG3v7L7Z2smxHOR4yAJeAECHQOM5lb2Umg251RB/s1AQoSgKksRD4eOnz1++fuNlqcFxTZZjAcjdvzLIvdDWp463Sgl5vMtlhKywDrJGmqYBwiGOcbKI4gQ9nSnJFnd3eLGgTyhJaO8zymmWhXGiW9dAuerZ14pudq2h0NHFq66gdkW1NxxP8XK5Uv6fTEcIMP7jzLW+DdtaCypNXv510Tpvgp49knXDvh3Hy78byIR4EZq43nTuyZrR1gyxo0tq9xIqo8ls5geOH9BfbFImfoRuZ65qWIY9UkwLmn2xb3XMgWYO9MFw7M5fIGc+Qh7CThjGKD7r8cfc91Pw4+eNSffmRhGdazOZELptf40QxX1vLjsTxZ3cBAEtKdMLEd5EXi38Kdb+EWoyBcn+OfpoK217AAhrNucgz1VXAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(b.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Frontend Route",title:"Frontend Route",src:"/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png",srcSet:["/static/49e782ef08c49a9078b6a4a3609683ae/7fc1e/frontend-running.png 288w","/static/49e782ef08c49a9078b6a4a3609683ae/a5df1/frontend-running.png 576w","/static/49e782ef08c49a9078b6a4a3609683ae/3cbba/frontend-running.png 1152w","/static/49e782ef08c49a9078b6a4a3609683ae/0b124/frontend-running.png 1728w","/static/49e782ef08c49a9078b6a4a3609683ae/4ea69/frontend-running.png 2304w","/static/49e782ef08c49a9078b6a4a3609683ae/61c60/frontend-running.png 2368w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-practical-cp-4-apps-2-index-mdx-e9800f289850470f86ab.js.map