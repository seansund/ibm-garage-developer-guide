(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{guOw:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return g}));var n=a("k1TG"),r=a("8o2o"),i=(a("q1tI"),a("7ljp")),l=a("013z"),o=a("T0C+"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},b=c("InlineNotification"),p=c("Tabs"),u=c("Tab"),m=c("PageDescription"),d=c("AnchorLinks"),h=c("AnchorLink"),O={_frontmatter:s},j=l.a;function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(j,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(b,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": An ",Object(i.b)("strong",{parentName:"p"},"environment administrator")," performs the steps on this page. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/plan-installation#roles"}),"Plan Installation > Roles")," for the overview of the roles involved.")),Object(i.b)(p,{mdxType:"Tabs"},Object(i.b)(u,{label:"Prerequisites",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Prepare to run Terraform to create a new cluster and install the Developer Tools")),Object(i.b)("p",null,"The ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," is installed by an environment administrator, who will run the scripts to create the environment in an IBM Cloud account. The scripts will run as the environment administrator’s user, so the user needs the permissions described in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/plan-installation"}),"Plan Installation"),". These instructions explain how to configure and run the Terraform ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/terraform"}),"infrastructure-as-code")," (IasC) scripts to create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"."),Object(i.b)("h3",null,"Prepare local system"),Object(i.b)("p",null,"To run the scripts, install the client tools needed to use the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/getting-started/prereqs"}),"Prerequisites"))),Object(i.b)("h3",null,"Test login"),Object(i.b)("p",null,"Optional: The environment administrator must be able to log into IBM Cloud, specifying the account, region, and resource group. That is effectively what the scripts will do when they run, using the environment administrator’s API key."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Log in to IBM Cloud using the CLI",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"ibmcloud login -a cloud.ibm.com -r <region> -g <resource-group>\n")))),Object(i.b)("h3",null,"Confirm resources"),Object(i.b)("p",null,"Optional: To help confirm that the account has the resources the scripts will require (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/plan-installation"}),"Plan Installation"),"), the environment administrator may log into the account view the resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/classic/network/vlans"}),"Existing VLANs")," — Verify that the two VLANs specified are in the list and that they are defined in the proper data center"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/account/resource-groups"}),"Existing resource groups")," — Having logged in using the environment’s resource group, it should certainly be in the list"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/clusters"}),"Existing Kubernetes clusters")," — See what clusters (Kubernetes and OpenShift) already exist in the resource group and confirm one does not already exist for the environment you want to create")),Object(i.b)("h3",null,"Confirm permissions"),Object(i.b)("p",null,"Optional: To help confirm that the scripts will have the permissions they’ll require (see the administrators access group in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/admin/plan-installation"}),"Plan Installation"),"), the environment administrator may log into the account and test creating a couple of resources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/kubernetes/catalog/cluster/create"}),"Create a cluster")," — Make it single-zone, and specify the proper data center and resource group"),Object(i.b)("li",{parentName:"ul"},"Create a namespace in the image registry"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/catalog/services/cloudant"}),"Create an instance of Cloudant")," — Select a paid plan and specify the proper region and resource group"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/observe/monitoring/create"}),"Create an instance of Sysdig")," — Select a paid plan and specify the proper region and resource group")),Object(i.b)("p",null,"As long as the user can create these resources successfully, the scripts should be able to as well. You may delete these test resources.")),Object(i.b)(u,{label:"Download",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Obtain the Terraform infrastructure-as-code (IasC) scripts that will create the tools environment")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Clone the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"}),"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd ibm-garage-iteration-zero\n"))))),Object(i.b)(u,{label:"API keys",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the keys the CLI uses to authenticate")),Object(i.b)("p",null,"A Kubernetes or OpenShift cluster is a PaaS resource hosted on top IaaS resources.\nAPI keys authenticate an ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli",title:"IBM Cloud CLI and Developer Tools"}),"IBM Cloud CLI"),"\nclient—such as a Terraform script—to create these resources programmatically. Two keys will be needed:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The first key authorizes creating Classic Infrastructure (IaaS) resources"),Object(i.b)("li",{parentName:"ul"},"The second key authorizes creating IBM Cloud (PaaS) resources")),Object(i.b)("p",null,"The following steps create the required keys and put them into a file called ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," property file looks like this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"classic.username=<CLASSIC_USERNAME>\nclassic.api.key=<CLASSIC_API_KEY>\nibmcloud.api.key=<IBMCLOUD_API_KEY>\n")))),Object(i.b)("p",null,"The installation scripts will use these keys to authenticate to IBM Cloud."),Object(i.b)("h3",null,"Step A. Create the credentials.properties file"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Inside the ",Object(i.b)("inlineCode",{parentName:"li"},"iteration-zero-ibmcloud")," folder, copy ",Object(i.b)("inlineCode",{parentName:"li"},"credentials.template")," to a file named ",Object(i.b)("inlineCode",{parentName:"li"},"credentials.properties"),".",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd iteration-zero-ibmcloud\ncp credentials.template credentials.properties\n")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file is already listed in the ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file so that the file containing\nyour private API keys will not be pushed to the server repository."),Object(i.b)("h3",null,"Step B. Set the Classic infrastructure API key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Follow these instructions to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-classic_keys",title:"Managing classic infrastructure API keys"}),"create a Classic infrastructure API key"),":"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the IBM Cloud console, go to the IBM Cloud API Keys page"),Object(i.b)("p",{parentName:"li"},"To open the IBM Cloud API Keys page, select ",Object(i.b)("strong",{parentName:"p"},"Manage -> Access (IAM)"),", then select the ",Object(i.b)("strong",{parentName:"p"},"IBM Cloud API keys")," tab.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If your account already has a classic infrastructure API key, it will appear in the list of keys as ",Object(i.b)("strong",{parentName:"p"},"Classic infrastructure API key"),". Otherwise, the page will have a ",Object(i.b)("strong",{parentName:"p"},"Create a classic infrastructure API key")," button on the top. To crate the key, press that button and close the dialog."),Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"968px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.444444444444443%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzklEQVQY043Mu07DMBSA4TwtEojLwguwsDAgcRtYGZB4DNRWLAixchEoSqvUxnFckjhx2vycpAIWBix95z86g6NUaWzu0CYb5G7Bf1/XdQPZMJmlKEsik39iXUEm+r1v6QNVHaQNvgnUTSt++31rlyuC6LuSf5cyopm2JHPDTFmmKhuapOanb1PNS6x4ek95Tdb7czwnTi3a1ajcr9mKD+eJCt/yl1IsqsDh9QMbx7fsnI/FhK3TEfuXdxxc3bN5MmJX7ttnY/YuJhzdPPIFqJUn7NcaI6oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"API Keys",title:"API Keys",src:"/static/5c2c0556e59dc6d972f4484169318d46/8b01c/apikeys.png",srcSet:["/static/5c2c0556e59dc6d972f4484169318d46/7fc1e/apikeys.png 288w","/static/5c2c0556e59dc6d972f4484169318d46/a5df1/apikeys.png 576w","/static/5c2c0556e59dc6d972f4484169318d46/8b01c/apikeys.png 968w"],sizes:"(max-width: 968px) 100vw, 968px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find ",Object(i.b)("strong",{parentName:"p"},"Classic infrastructure API key")," in the list and open its details."),Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"608px"}}),"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQ4y42Ti26rMAyG+/7Pd6bR9bJ2BRISoNBwTUj+44RTymGatEif4jjC/m2cXSwbpEULVnaB/+0Xs6/fnDskeUs0+BIKV15hB1qT0ej7DnocYCeDYegxkm30CE34e+9rGhV8/jwOQ/jG2QnPZbSeA3bDiCSTuDGB8qGQihwxF8iKO3heBrwt7zWYLCDonLAMt4RBNe0SUGuDnXPOSwQcZfLZvE0KSC4x/NvXkM9ZrFeIEQJ6hRRARX/Ao3dU5wOKwx6GJ0ApgCKDk3wDg0uvIciaENCQQp+1OB/xwSQuXOKQcORNB6WnwFOLW+1OpFTJNNvfApJCc4rQnz/QHiM89m+oSXFFeNvePoHkAkeEPaZz+jUn2CoMJVPf+tMeefQGk1ypTA7kjOAzXk1GLeAxHAF2m32r3j31LyXfP0/YxwyiqkG/A/1kMVi3MLpNyT6BfZU82U3AKb5gqCt0hYQS2YzMFruRAo5mEK2Ca5tZ7aKOBIzmVXK4eFT0VyVQFT9D967MqSUUvJtnb7IWqtM0x2al8FnGL8DGNtSaoqYX1OvXYGMzTz+BDeuS1y/lLzUf8FmtiQsfAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Classic Keys",title:"Classic Keys",src:"/static/d532ccb8217912372f627a41d130228e/1b824/classickeys.png",srcSet:["/static/d532ccb8217912372f627a41d130228e/7fc1e/classickeys.png 288w","/static/d532ccb8217912372f627a41d130228e/a5df1/classickeys.png 576w","/static/d532ccb8217912372f627a41d130228e/1b824/classickeys.png 608w"],sizes:"(max-width: 608px) 100vw, 608px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the values for the ",Object(i.b)("inlineCode",{parentName:"p"},"classic.username")," and ",Object(i.b)("inlineCode",{parentName:"p"},"classic.api.key")," properties."))),Object(i.b)("h3",null,"Step C. Set the IBM Cloud API key"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Follow these instructions to create an IBM Cloud API key:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey",title:"Managing user API keys"}),"Managing user API keys")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties")," file to set the value for the ",Object(i.b)("inlineCode",{parentName:"p"},"ibmcloud.api.key")," property.")))),Object(i.b)(u,{label:"Configuration",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Configure the properties describing your environment")),Object(i.b)("h3",null,"Configuring Properties files"),Object(i.b)("p",null,"The settings for creating the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," go in two properties files\nin the ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/settings")," directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"environment.tfvars")," — Properties for installing the environment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vlan.tfvars")," — Properties for creating the cluster")),Object(i.b)("p",null,"The next few steps will find the necessary resources and set them in the ",Object(i.b)("inlineCode",{parentName:"p"},"tfvars")," files.\nAlong the way, if any of these resources don’t already exist, you’ll need to create them.\nThere is a tool for optionally generating the VLAN variables. "),Object(i.b)("h3",null,"Environment variables"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars")," properties will be used to install the Development Tools environment."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Typical values look like this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'# The type of cluster that will be created/used (kubernetes or openshift)\ncluster_type="openshift"\n# Flag indicating if we are using an existing cluster or creating a new one\ncluster_exists="true"\n\n# The prefix that should be applied to the cluster name and service names (if not provided\n# explicitly). If not provided then the resource_group_name will be used as the prefix.\n#name_prefix="<name prefix for cluster and services>"\n#name_prefix="garage-cloud-surge"\n\n# The cluster name can be provided (particularly if using an existing cluster). The value\n# for cluster name used by the scripts will be set in the following order of presidence:\n# - "${cluster_name}"\n# - "${name_prefix}-cluster"\n# - "${resource_group_name}-cluster"\n#cluster_name="<cluster name>"\ncluster_name="garage-cloud-surge-ocp-cluster"\n\nresource_group_name="garage-cloud-surge"\nvlan_region="us-south"\n\n# Flag indicating if we are using an existing postgres server or creating a new one\npostgres_server_exists="false"\n')))),Object(i.b)("p",null),Object(i.b)("p",null,"Some of these values are given to you by the account manager:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"resource_group_name")," — The resource group the cluster and environment will be created in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vlan_region")," — The region the cluster and environment will be created in")),Object(i.b)("p",null,"The other variables have reasonable defaults that you can change if desired:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("inlineCode",{parentName:"p"},"cluster_name")," to specify any valid cluster name that is not already in use or leave unset")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("inlineCode",{parentName:"p"},"cluster_type")," to specify whether the cluster is ",Object(i.b)("strong",{parentName:"p"},"kubernetes")," or ",Object(i.b)("strong",{parentName:"p"},"openshift"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cluster_exists")," — Set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," to create a new cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cluster_type")," — Specify the new cluster’s type"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"kubernetes")," — Kubernetes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"openshift")," — OpenShift v3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ocp3")," — OpenShift v3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ocp4")," — OpenShift v4"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("del",{parentName:"li"},Object(i.b)("strong",{parentName:"del"},"crc")," — CodeReady Containers")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cluster_name")," — The name for the new cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"registry_namespace")," — The namespace that will be created with the IBM Container Registry. If not provided\nthe value will default to the ",Object(i.b)("inlineCode",{parentName:"p"},"resource_group_name"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"logdna_exists")," — “true” or “false” flag indicating that the logdna instance already exists and a new one\nshould not be provisioned")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"logdna_name")," — The name of the logdna instance, particularly if one already exists. If not provided the name\nwill be generated as ",Object(i.b)("inlineCode",{parentName:"p"},"{prefix-name || resource-group-name}-logdna"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"sysdig_exists")," — “true” or “false” flag indicating that the sysdig instance already exists and a new one\nshould not be provisioned")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"sysdig_name")," — The name of the sysdig instance, particularly if one already exists. If not provided the name\nwill be generated as ",Object(i.b)("inlineCode",{parentName:"p"},"{prefix-name || resource-group-name}-sysdig")))),Object(i.b)("h3",null,"VLANs"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties will be used to create the cluster that the Developer Tools will be installed into."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Typical values look like this:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'vlan_region="us-south"\nvlan_datacenter="dal10"\npublic_vlan_id="2366011"\nprivate_vlan_id="2366012"\n')))),Object(i.b)("p",null,"You must set all of these specifically for your cluster. Use the values provided by the account manager."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In ",Object(i.b)("inlineCode",{parentName:"li"},"vlan.tfvars"),", set the following properties:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vlan_region")," — The region that the cluster will be in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"vlan_datacenter")," — The zone in that region that the cluster will be in"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"public_vlan_id")," — The public VLAN that the cluster will use"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"private_vlan_id")," — The private VLAN that the cluster will use")))),Object(i.b)("h4",null,"Optional: Generate the properties"),Object(i.b)("p",null,"The IGC CLI can be used to generate these settings, to make the configuration as simple as possible."),Object(i.b)("p",null,"If your account has numerous VLANs and you want your Developer Tools cluster to use specific ones, then skip this step. This tool is for users who don’t know what these required settings should be and want a simple way to gather reasonable defaults for their particular account."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/getting-started/cli"}),"IGC CLI")," has a command to gather this information for you, in a format that is easy to cut/paste into the ",Object(i.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Install the IGC CLI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Log in to IBM Cloud using its CLI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Run the VLAN command"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"igc vlan\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Copy the output values from the CLI Command into your ",Object(i.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," files and ",Object(i.b)("strong",{parentName:"p"},"Save")," and continue")))),Object(i.b)(u,{label:"Run",mdxType:"Tab"},Object(i.b)(m,{mdxType:"PageDescription"},Object(i.b)("p",null,"Run the scripts that create the environment")),Object(i.b)("p",null,"Having configured the ",Object(i.b)("inlineCode",{parentName:"p"},"credentials.properties"),", ",Object(i.b)("inlineCode",{parentName:"p"},"environment.tfvars"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"vlan.tfvars")," properties files,\nwe are now ready to kick off the installation."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Launch a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"Cloud Garage Tools Docker image"}),"Developer Tools Docker container"),"."),Object(i.b)("p",{parentName:"li"},"  Run the following command to run the Docker container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n")),Object(i.b)("p",{parentName:"li"},"  This will install the Cloud Garage Tools Docker image and exec shell into the running container. The container will\nmount the filesystem’s ",Object(i.b)("inlineCode",{parentName:"p"},"./terraform/")," directory as ",Object(i.b)("inlineCode",{parentName:"p"},"/home/devops/src/"),". Once the Docker container has started and\nthe script has exec shelled into it, you will see an IBM Garage banner. This will help you identify you are running\ninside the Docker image that has just mounted your file system."),Object(i.b)("p",{parentName:"li"},"  For more information on the ",Object(i.b)("strong",{parentName:"p"},"Developer Tools Image")," see the following guide link below.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})),Object(i.b)("p",{parentName:"li"},"  The supplied Terraform script is ready to run using the settings in the properties files.\nYou optionally can extend or modify the scripts and tailor them for your project’s specific needs."),Object(i.b)("p",{parentName:"li"},"  Run this script in the container:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"./runTerraform.sh\n")),Object(i.b)("p",{parentName:"li"},"  This script will create the ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"}),"."),Object(i.b)("p",{parentName:"li"},"  If you executed the script previously for the current cluster configuration and the workspace directory still\nexists then you will be prompted to either keep or delete the workspace directory. Keep the workspace directory if\nyou want to use the state from the previous run as a starting point to either add or remove configuration. Delete\nthe workspace if you want to start with a clean install of the Toolkit."),Object(i.b)("p",{parentName:"li"},"  The script will verify some basic settings and prompt if you want to proceed. After you select ",Object(i.b)("strong",{parentName:"p"},"Y")," (for yes),\nthe Terraform Apply process will begin to create the infrastructure and services for your environment."),Object(i.b)("p",{parentName:"li"},"  Both of the prompts can be skipped via command-line arguments passed to the script. To bypass the workspace\nprompt, provided either ",Object(i.b)("inlineCode",{parentName:"p"},"--delete")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--keep")," to either delete or keep the workspace, respectively. To\nbypass the verification prompt provide ",Object(i.b)("inlineCode",{parentName:"p"},"--auto-approve")," and the script will automatically answer ",Object(i.b)("inlineCode",{parentName:"p"},"Yes")," to\nthe prompt and start the terraform process."),Object(i.b)("p",{parentName:"li"},"  Creating a new cluster takes about 1.5 hours on average (but can also take considerably longer)\nand the rest of the process takes about 30 minutes."),Object(i.b)(b,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",{parentName:"li"},"  You should now have your ",Object(i.b)(o.a,{name:"env",mdxType:"Globals"})," fully provisioned and configured. Enjoy!")))),Object(i.b)("h3",null,Object(i.b)(o.a,{name:"env",mdxType:"Globals"})),Object(i.b)("p",null,"Once the Terraform scripts have finished, you can see the resources that the scripts created in IBM Cloud:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud console, open the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://cloud.ibm.com/docs/overview?topic=overview-ui#dashboardview",title:"Managing resources in the resource list"}),"Resource List")),Object(i.b)("li",{parentName:"ul"},"On the Resource List page, filter by your Resource Group (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"appdev-team"),")"),Object(i.b)("li",{parentName:"ul"},"You should see these resources listed:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Clusters"),": 1, either Kubernetes or OpenShift"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Services"),": 5 or so, such as PostgreSQL, LogDNA, etc."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Storage"),": 1, an instance of Cloud Object Storage"))),Object(i.b)("li",{parentName:"ul"},"Select the cluster and open the Kubernetes dashboard or OpenShift web console. You should see:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Namespaces: ",Object(i.b)("inlineCode",{parentName:"li"},"tools"),", ",Object(i.b)("inlineCode",{parentName:"li"},"dev"),", ",Object(i.b)("inlineCode",{parentName:"li"},"test"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"staging")),Object(i.b)("li",{parentName:"ul"},"Deployments in the ",Object(i.b)("inlineCode",{parentName:"li"},"tools")," namespace: ",Object(i.b)("inlineCode",{parentName:"li"},"developer-dashboard"),", ",Object(i.b)("inlineCode",{parentName:"li"},"jenkins"),", etc.")))),Object(i.b)("p",null,"To get started with code use the following guides:"),Object(i.b)(d,{mdxType:"AnchorLinks"},Object(i.b)(h,{to:"/getting-started-day-1/deploy-app",mdxType:"AnchorLink"},"Deploy First App"),Object(i.b)(h,{to:"/tools",mdxType:"AnchorLink"},"Guides"),Object(i.b)(h,{to:"/tools/tools-image",mdxType:"AnchorLink"},"Developer Tools Image")),Object(i.b)("h3",null,"Possible issues"),Object(i.b)("p",null,"If you find that that the Terraform provisioning has failed, try re-running the ",Object(i.b)("inlineCode",{parentName:"p"},"runTerraform.sh")," script again.\nThe state will be saved and Terraform will try and apply the configuration to match the desired end state."),Object(i.b)("p",null,"If you find that some of the services have failed to create in the time allocated, you can try this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manually delete the service instances in your resource group"),Object(i.b)("li",{parentName:"ul"},"Delete the ",Object(i.b)("inlineCode",{parentName:"li"},"workspace")," directory (which will remove any state that has been created by Terraform)"),Object(i.b)("li",{parentName:"ul"},"Re-run the ",Object(i.b)("inlineCode",{parentName:"li"},"runTerraform.sh")," script",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"rm -rf workspace\n./runTerraform.sh\n")))))))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-installation-ibm-cloud-index-mdx-619452071f9eea348947.js.map