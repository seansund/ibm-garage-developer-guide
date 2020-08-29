(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{G2OU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return j}));var n=a("k1TG"),i=a("8o2o"),o=(a("q1tI"),a("7ljp")),b=a("013z"),l=a("T0C+"),p=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=c("PageDescription"),r=c("InlineNotification"),d=c("Tabs"),m=c("Tab"),u=c("AnchorLinks"),g=c("AnchorLink"),O={_frontmatter:p},h=b.a;function j(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(h,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use Tekton to automate your continuous integration process")),Object(o.b)("h2",null,"Overview"),Object(o.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion."),Object(o.b)("p",null,"Tekton is a new emerging CI tool that has been built to support Kubernetes and OpenShift from the ground up."),Object(o.b)("h2",null,"What is Tekton"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tekton.dev/"}),"Tekton")," is a powerful yet flexible Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details."),Object(o.b)("h3",null,"Tekton 101"),Object(o.b)("iframe",{width:"80%",height:"315",src:"https://www.youtube.com/embed/TWxKD9dLpmk",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(o.b)("p",null,"Tekton provides open-source components to help you standardize your CI/CD tooling and processes across vendors, languages, and deployment environments. Industry specifications around pipelines, releases, workflows, and other CI/CD components available with Tekton will work well with existing CI/CD tools such as Jenkins, Jenkins X, Skaffold, and Knative, among others."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Read the this this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/tools/continuous-integration-tekton-crc#what-is-tekton"}),"Overview of Tekton"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For more information read up about it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"}),"Tekton Tutorial"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"For more information read up about it ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"}),"App Build Tutorial with Tekton")))),Object(o.b)("p",null,"The IBM Cloud is standardizing on using Tekton in both IBM Cloud DevOps\nservice and IBM Cloud Pak for Applications. OpenShift 4.2 will also natively\nsupport it."),Object(o.b)("p",null,"This guide will focus on using Tekton when the Development tools have been\ninstalled in Redhat OpenShift, IBM Kubernetes Managed services and ",Object(o.b)("strong",{parentName:"p"},"Red Hat\nCode Ready Containers")," to give you choice for you Continuous Integration\ncloud native development toolset."),Object(o.b)(r,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," This guide will help you set up the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/starterkits"}),Object(o.b)(l.a,{name:"templates",mdxType:"Globals"}))," with  ",Object(o.b)("strong",{parentName:"p"},"Tekton")," and requires that you have installed Tekton with ",Object(o.b)("strong",{parentName:"p"},"Red Hat Code Ready Containers 4.2")," or have installed open source Tekton into the The IBM Kubernetes Cluster.")),Object(o.b)("h3",null,"Common App Tasks"),Object(o.b)("p",null,"The following gives a description of each ",Object(o.b)("inlineCode",{parentName:"p"},"Task")," that is commonly used in a\n",Object(o.b)("inlineCode",{parentName:"p"},"Pipeline"),". The ",Object(o.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(o.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Verify pact")," (",Object(o.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(o.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(o.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(o.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(o.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will\nupdate the build number in designated git repo and trigger ArgoCD for\ndeployment to ",Object(o.b)("strong",{parentName:"li"},"test")," namespace")),Object(o.b)("h3",null,"Install Tekton"),Object(o.b)("p",null,"Tekton can be installed in both RedHat Openshift and IBM Kubernetes manage\nservice and RedHat Code Ready Containers. To install the necessary\ncomponents follow the steps below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/admin/overview"}),"IBM Garage for Cloud Developer Tools")," on your\nmanaged OpenShift,CRC or IKS development cluster on the IBM Cloud. This will\nhelp configure the tools and ",Object(o.b)("inlineCode",{parentName:"li"},"secrets")," and ",Object(o.b)("inlineCode",{parentName:"li"},"configMap")," to make working with\nIBM Cloud so much easier.")),Object(o.b)(d,{mdxType:"Tabs"},Object(o.b)(m,{label:"OpenShift 3.11",mdxType:"Tab"},Object(o.b)("h3",null,"IBM Cloud Pak for Applications 3.0.1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Tekton on OpenShift 3.11",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-applications"}),"IBM Cloud Paks for Applications 3.0.1")," on the OpenShift Cluster from the\nIBM Cloud Catalog Software tab"))))),Object(o.b)(m,{label:"OpenShift 4.x",mdxType:"Tab"},Object(o.b)("h3",null,"Install on OpenShift 4.x"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you have installed the IBM Garage for Cloud Developer Tools into your\ncluster this will automatically install the operator for you.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install Tekton on OpenShift 4 including CodeReady Containers (CRC)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Install via operator hub Administrator perspective view, click\n",Object(o.b)("strong",{parentName:"li"},"Operator Hub")," search for ",Object(o.b)("inlineCode",{parentName:"li"},"OpenShift Pipelines")," and install operator"))))),Object(o.b)(m,{label:"Kubernetes",mdxType:"Tab"},Object(o.b)("h3",null,"Install Tekton on IBM Kubernetes Managed Service"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Tekton via Knative add-on (can be found in the ",Object(o.b)("strong",{parentName:"li"},"Add On")," tab in\nthe Kubernetes managed service dashboard)\n, it includes\nTekton support by default and the Webhook extension."),Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tektoncd/dashboard#install-dashboard"}),"Tekton Dashboard")," follow the instructions in the ",Object(o.b)("inlineCode",{parentName:"li"},"README.md")),Object(o.b)("li",{parentName:"ul"},"Add Ingress endpoint for the ",Object(o.b)("strong",{parentName:"li"},"Tekton Dashboard")," add a host name that uses\nthe IKS cluster subdomain",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"  apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    name: tekton-dashboard\n    namespace: tekton-pipelines\n  spec:\n    rules:\n    - host: tekton-dashboard.showcase-dev-iks-cluster.us-south.containers.appdomain.cloud\n      http:\n        paths:\n        - backend:\n            serviceName: tekton-dashboard\n            servicePort: 9097\n"))),Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tektoncd/experimental/tree/master/webhooks-extension#install-webhook-extension"}),"Tekton Webhook Extension"))))),Object(o.b)("h3",null,"Setup Tekton"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install Tekton pipelines and tasks into the ",Object(o.b)("inlineCode",{parentName:"li"},"dev")," namespace following the\ninstructions in the repository ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-tekton-tasks/blob/master/README.md"}),"ibm-garage-tekton-tasks")),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("inlineCode",{parentName:"li"},"Tasks"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -f ibm-garage-tekton-tasks/tasks/ -n dev\n"))),Object(o.b)("li",{parentName:"ul"},"Install the ",Object(o.b)("inlineCode",{parentName:"li"},"Pipelines"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl create -f ibm-garage-tekton-tasks/pipelines/ -n dev\n")))),Object(o.b)("h3",null,"Configure namespace for development"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Install the Tekton CLI ",Object(o.b)("inlineCode",{parentName:"p"},"tkn")," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"https://github.com/tektoncd/cli"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create a new namespace (ie ",Object(o.b)("inlineCode",{parentName:"p"},"dev-{initials}"),") and copy all config and secrets"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"igc namespace -n {new-namespace}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Set your ",Object(o.b)("inlineCode",{parentName:"p"},"new-namespace")," the current namespace context"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"oc project {new-namespace}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The template ",Object(o.b)("inlineCode",{parentName:"p"},"Pipelines")," provided support for ",Object(o.b)("inlineCode",{parentName:"p"},"Java")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Node.js")," based apps. You can configure your own custom ",Object(o.b)("inlineCode",{parentName:"p"},"Tasks")," for other runtimes. There are a number of default ",Object(o.b)("inlineCode",{parentName:"p"},"Tasks")," to get you started they are detailed above. To create an application use one of the provided ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/starterkits"}),Object(o.b)(l.a,{name:"templates",mdxType:"Globals"}))," these templates work seamlessly with the ",Object(o.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Pipelines")," provided."))),Object(o.b)("h3",null,"Register the App with Tekton"),Object(o.b)("p",null,"With Tetkon enabled and your default ",Object(o.b)("inlineCode",{parentName:"p"},"Tasks")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Pipelines")," installed into\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," namespace. You can now configure your applications to be built, packaged, tested and deployed to your OpenShift or Kubernetes development cluster."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Connect to the pipeline. (See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/cli"}),"IGC CLI")," for details about how the ",Object(o.b)("inlineCode",{parentName:"p"},"pipeline")," command works.)"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n dev-{initials} --tekton\n")))),Object(o.b)("h3",null,"Verify the pipeline"),Object(o.b)("p",null,"To validate your pipeline have been correctly configured, and has triggered a\n",Object(o.b)("inlineCode",{parentName:"p"},"PipelineRun"),"\nuse the following ",Object(o.b)("strong",{parentName:"p"},"Tekton")," dashboards or ",Object(o.b)("inlineCode",{parentName:"p"},"tkn")," CLI to validate it ran\ncorrectly without errors."),Object(o.b)(d,{mdxType:"Tabs"},Object(o.b)(m,{label:"OpenShift 4.x",mdxType:"Tab"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Review you ",Object(o.b)("strong",{parentName:"p"},"Pipeline")," in the OpenShift 4.x Console\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6klEQVQY04VQS07DMBD1/e/CDZB6ALYsWRCJAmrrxonrz/j3GI9JirrhyaM4nvH7WFlrMdB4NV73+g+1VtRSZD+/HHB6foISqvZbg3ZHexB4FCMihBCQc97vqEnf8LkQvlbC0UQsPiHxYB8SB1wbwd//IvuGzRAxsV0WqECZmw25VPnG4EAx3J+BESML8XDheIWFghvP1Ji0n3enIsJ9pdcESmV38XElXNjxzWe4OKIYY+Rix2nWeJ00Jl1gwxDoRJt7Icx5HHAoHOcMbRMsR4+piMt1tXDOC+HZeLx9e7xfkhD2fo8u7rl+AHIB1iF/pBiDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pipelinerun",title:"Pipelinerun",src:"/static/b9f14d105bd04e3cddc427d9b8f046f1/3cbba/pipeline.png",srcSet:["/static/b9f14d105bd04e3cddc427d9b8f046f1/7fc1e/pipeline.png 288w","/static/b9f14d105bd04e3cddc427d9b8f046f1/a5df1/pipeline.png 576w","/static/b9f14d105bd04e3cddc427d9b8f046f1/3cbba/pipeline.png 1152w","/static/b9f14d105bd04e3cddc427d9b8f046f1/0b124/pipeline.png 1728w","/static/b9f14d105bd04e3cddc427d9b8f046f1/4ea69/pipeline.png 2304w","/static/b9f14d105bd04e3cddc427d9b8f046f1/dd77a/pipeline.png 2484w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Review your ",Object(o.b)("strong",{parentName:"p"},"Tasks"),"\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA0ElEQVQoz5WSaw7CIBCEuf9hvIG38KeJT9RSLfIq0BZGoLGpURPdZPKRLAyzBMJkD2UctFJQSV3XIcaIXyvGUKjXK9TLBciRd7gLBSlFkiymwzAU038UwoDQ9yDS+JTQwzkHP0tXNiK+8s0kjOsn01GSU3HOi4wxZWTv/Xf6kX1KM108E+H3BqeKouE37OkOt2bkpTrjdKGgZwpWM2wPG9TXeupprSfDeREhBJRWMK1Bm+S8Q2tbWGthnS3r/By5n/nsfU3IGCvj5pH+rU+/4QECeiNOg/7XvwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Tasks",title:"Tasks",src:"/static/43ac10b40fa67d0ebd944161e29cdbca/3cbba/tasks.png",srcSet:["/static/43ac10b40fa67d0ebd944161e29cdbca/7fc1e/tasks.png 288w","/static/43ac10b40fa67d0ebd944161e29cdbca/a5df1/tasks.png 576w","/static/43ac10b40fa67d0ebd944161e29cdbca/3cbba/tasks.png 1152w","/static/43ac10b40fa67d0ebd944161e29cdbca/0b124/tasks.png 1728w","/static/43ac10b40fa67d0ebd944161e29cdbca/4ea69/tasks.png 2304w","/static/43ac10b40fa67d0ebd944161e29cdbca/f0987/tasks.png 2490w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Review your ",Object(o.b)("strong",{parentName:"p"},"Steps"),"\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABaElEQVQoz51Ry0rDQBTNJ1QXtlgIWB9ZWD9AFBVsodiF4N6dP+CPCO4Ff8DWqh+hG5eWPqh9WjHJJGnTSSZNm2NmpKWCIO2Fy5y5c+6ZM3cky7JgGIZIQggGAwoeQRBM1wmerU9xgF88yXEoiEngUAe2bYMYBL1eD/2+DZ3o4BfaHBs6TNMUHCPkcx7nmJYpeJzD+6R2p4WX12eUKyXUG3UUq2/4/OqGTQaqjQoa7brAtWb1B4dCrY8mKu9lqJoquKVaEZquQtc1SNnsCRRFQTK5DVmWUbgviCdwJx7z4LgOaPiKKaYUjDG4zBV15jKxp3QA13UhHaUPEJdXEV2JIhKJIJe7E4Lj8RiLhJTOppDYSmBjcxPRWAz5h0dx4I9G00HPk1ImvQ9lLY6d9QTiy0vI396E9nz4Hvvzl/91eHlxjtPUIc5Sx8js7eLp+gpo1eA7dDFBTdXQ7XRCRx5GwyFmJzeP0CS+AXwNiaSX2/kmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Steps",title:"Steps",src:"/static/c5055673e16d6d6c72b473519809cd64/3cbba/steps.png",srcSet:["/static/c5055673e16d6d6c72b473519809cd64/7fc1e/steps.png 288w","/static/c5055673e16d6d6c72b473519809cd64/a5df1/steps.png 576w","/static/c5055673e16d6d6c72b473519809cd64/3cbba/steps.png 1152w","/static/c5055673e16d6d6c72b473519809cd64/0b124/steps.png 1728w","/static/c5055673e16d6d6c72b473519809cd64/f7471/steps.png 1776w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))))),Object(o.b)(m,{label:"Opensource Tekton Dashboard",mdxType:"Tab"},Object(o.b)("p",null,"If you are running Tekton with IBM Cloud Pak for Applications or Knative with\nKubernetes managed service your dashboard view will look similar to below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Review your ",Object(o.b)("strong",{parentName:"li"},"Pipeline"),Object(o.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQoz41Su0oDQRTdn7C0FMHGyh+wsrSxE4tU1ipiI1glaGMjgq3YCYIKCloKgvgCIQSNooJgs5tkd7Pz3JnjnclDYyI4u5d57J1zzzl3g+fyB9JMojOse6xtra3tC5eBH9m9eyCo1QUSZsA1wLmAEjmUNH49aDjM/vguGDDOIaTyAIzi/ukCDy+XqDdihFENYa1O6wSNOEWtHiNjAlxKcKEoX4LRXsgcTBAJmoNqtYooihCFIeKkicpbGW+fr9AKkNyCkR1pmqLZzNCgIlwQAcUgCVQI4UNpgyYJ8oCcGGqtvRxjgJvHO5xcHeH0+hjnt/uovN96WTo3oNdfVtq2507k9D2nYhpBkiQEZLx+d2H7cAlzpREU1scwvTpE+8V2sXxgk76bRYoUMcyyrNsxx3DrYAmzxVEUNsYxszaMneOVNqDpXuxv1A/AOI7JVGoII1+Uwe5ZEQvbk1jemcL85gT2zkstQGv+x9ABOtOVUt4P5kyXGRncCqlEzz85iF0PoAPqHGgCzHP7p6RBin8DfgHEGvcBRv9R9AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"PipelineRun",title:"PipelineRun",src:"/static/9f446c196dfa2c4a625858139fc1d00f/3cbba/pipeline-os.png",srcSet:["/static/9f446c196dfa2c4a625858139fc1d00f/7fc1e/pipeline-os.png 288w","/static/9f446c196dfa2c4a625858139fc1d00f/a5df1/pipeline-os.png 576w","/static/9f446c196dfa2c4a625858139fc1d00f/3cbba/pipeline-os.png 1152w","/static/9f446c196dfa2c4a625858139fc1d00f/0b124/pipeline-os.png 1728w","/static/9f446c196dfa2c4a625858139fc1d00f/6a339/pipeline-os.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(o.b)(m,{label:"Tekton CLI",mdxType:"Tab"},Object(o.b)("p",null,"If you are running ",Object(o.b)("strong",{parentName:"p"},"Tekton")," with IBM Cloud Pak for Applications or Knative\nwith Kubernetes managed service your dashboard view will look similar to below."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Review your ",Object(o.b)("strong",{parentName:"li"},"Pipeline"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun list\n"))),Object(o.b)("li",{parentName:"ul"},"Review ",Object(o.b)("strong",{parentName:"li"},"Pipeline")," details",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tkn pipelinerun describe {pipeline-name}\n")))))),Object(o.b)("h3",null,"Running Application"),Object(o.b)("p",null,"Once the ",Object(o.b)("strong",{parentName:"p"},"Tekton")," pipeline has successfully completed you can validate your\napp has been successfully deployed."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open the OpenShift Console and select the {new-namespace} project and click on ",Object(o.b)("strong",{parentName:"p"},"Workloads"),"\n",Object(o.b)("span",Object(n.a)({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(o.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.138888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz6WQW09TURBGD1TaUkTiA0SU8GyESmktvZCI8uRfMyHx1QjYFlD+jS/E0gRKEwjEhEsvnO7dc13OOanQAOHFSVZm59sz357ZxvT0S17NzDI59YJnE89JjI0TjY0yEo1jDEWE4fsYwwxFRognngpjxOIJYqMJIk+iGNmVT7wrfCCdX+Hz2hdKlR02ShXKWz+obP98mJ1dypK/ftsQNlnfLPG9vEWpvI2RKa6Szr0nW/xIo9Hgf8OYSy3xOpkhuZjj116Vs5ai/qcpWdNUzqO0tEtTO3SEttDqWhjJdJ43C0u8TRf4XTvAdOBSituWh3J8lO3R7ROcQy3U/VDryflUuZwI2nICwwLBlIHx/n4N87rD5cU5Pa2wLUuW8B/gNpTnUzctam0tDwwYzi/mOTish0Vaa1zXxfM8fN+/4V+Etn3NFY67Nkdiajt9w2DlhUyRvWqNK1P+zuzdaw4fkpWa1wpXGhnQb2plACMwm0vlSGWXqcrKqmfRMbvhhI40DmLZNlrubcl37wIC/S9pVz2LiM+H+wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(o.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/static/a25b80e0df63b105bb82931ba91f5301/3cbba/openshiftconsole.png",srcSet:["/static/a25b80e0df63b105bb82931ba91f5301/7fc1e/openshiftconsole.png 288w","/static/a25b80e0df63b105bb82931ba91f5301/a5df1/openshiftconsole.png 576w","/static/a25b80e0df63b105bb82931ba91f5301/3cbba/openshiftconsole.png 1152w","/static/a25b80e0df63b105bb82931ba91f5301/0b124/openshiftconsole.png 1728w","/static/a25b80e0df63b105bb82931ba91f5301/6a339/openshiftconsole.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Get the hostname for the application from ingress"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"kubectl get ingress --all-namespace\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"You can use the the ",Object(o.b)("inlineCode",{parentName:"p"},"igc")," command to get the name of the deployed application"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"igc ingress -n {new-namespace}\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Use the application URL to open it your browser for testing"))),Object(o.b)("p",null,"Once you become familiar with deploying code into OpenShift using ",Object(o.b)("strong",{parentName:"p"},"Tekton\n"),", read up about how you can manage code deployment with ",Object(o.b)("inlineCode",{parentName:"p"},"Continuous\n Delivery")," with ",Object(o.b)("inlineCode",{parentName:"p"},"ArgoCD")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Artifactory")),Object(o.b)(u,{mdxType:"AnchorLinks"},Object(o.b)(g,{to:"/getting-started-day-1/artifact-management",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(o.b)(g,{to:"/getting-started-day-1/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tools-tekton-index-mdx-71b50dbd0baa74795277.js.map