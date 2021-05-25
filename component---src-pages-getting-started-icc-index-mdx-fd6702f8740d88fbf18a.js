(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"+iZV":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("wx14"),c=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("XbGe"),r=(n("T0C+"),n("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},s=i("PageDescription"),b=i("InlineNotification"),u={_frontmatter:r},m=l.a;function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s,{mdxType:"PageDescription"},Object(o.b)("p",null,"Easily log in to an IBM Cloud account and cluster")),Object(o.b)("p",null,"The ICC command-line tool makes it easy to log into an IBM Cloud account and a cluster in that account. It is the equivalent of running this for Kubernetes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ibmcloud login <a whole bunch of paratemers>\nibmcloud ks cluster <some more parameters>\n")),Object(o.b)("p",null,"or this for OpenShift:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ibmcloud login <a whole bunch of paratemers>\noc login <some more parameters>\n")),Object(o.b)("p",null,"If you have multiple clusters, especially in multiple accounts, ICC makes it easy to switch your command line between clusters. All ICC requires is your API key for each account."),Object(o.b)("h2",null,"Install ICC"),Object(o.b)("p",null,"To install ICC, perform ",Object(o.b)("a",{parentName:"p",href:"/getting-started/dev-env-setup"},"Developer Tools Setup")," to install all of the CLIs including ICC."),Object(o.b)("h3",null,"Install yq"),Object(o.b)("p",null,"ICC (currently) requires ",Object(o.b)("inlineCode",{parentName:"p"},"yq"),", and it has to be v3 (v4 doesn’t have the commands ICC needs). Check to see if ",Object(o.b)("inlineCode",{parentName:"p"},"yq")," is currently installed and if it’s version 3:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ which yq\n/usr/local/bin/yq\n$ yq -V\nyq version 3.3.2\n")),Object(o.b)("p",null,"If you don’t have ",Object(o.b)("inlineCode",{parentName:"p"},"yq")," installed, follow either of these instructions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installing yq in ",Object(o.b)("a",{parentName:"li",href:"https://docs.pivotal.io/scdf-k8s/1-1/installing-command-line-tools.html#macos"},"Installing Command-Line Tools > For macOS"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Download the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/mikefarah/yq/releases/tag/3.4.1"},"latest v3 build")))),Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/yq@3"},"yq v3 using Homebrew"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ brew install yq@3\n"))," And follow the instructions to add the install directory to your path.")),Object(o.b)("h3",null,"ICC help"),Object(o.b)("p",null,"Once ICC (and yq) is installed, you can view help for how to use it:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc --help\nUsage: icc [nickname] [--account {ACCOUNT_FILTER}] [--resourceGroup {RG_FILTER}] [--generate [{ACCOUNT_FILTER}]] [--nickname [{cluster name}]]\n\n  Logs into an IBM Cloud cluster\n\nModes:\n  cluster login   - icc {nickname}\n  print config    - icc [--account {account name}] [--resourceGroup {resourceGroupName}]\n  generate config - icc --generate [{account name}]\n  update nickname - icc --nickname [{cluster name}]\n\nArgs:\n  nickname - the cluster nickname\n  --account, -a - filter to print the config for the provided account\n  --resourceGroup, -g - filter to print the config for the provided resource group\n  --generate - flag to generate the config from the account, optionally restricted to {account name}. The --generate process appends to the existing configuration\n  --nickname - update the nickname for a cluster, optionally passing the cluster name after the flag\n  --help, -h - display help\n")),Object(o.b)("h2",null,"Configure ICC"),Object(o.b)("p",null,"Once ICC is installed, before you can use it, you need to set it up:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get your API key for your IBM Cloud account. If you don’t have one, then ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/account?topic=account-userapikey#create_user_key"},"create an API key"),". Remember, ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/account?topic=account-manapikey#ibm-cloud-api-keys"},"your API key is uniquely for you"),", so keep it secret.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run ",Object(o.b)("inlineCode",{parentName:"p"},"icc --add-account")," to add you API key to ICC"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc --add-account\nPlease provide the nickname for the IBM Cloud account: my-account\nProvide the IBM Cloud API Key for the my-account account: <hidden>\nAccount information added for my-account\n\nNext steps:\n- Run '/Users/bwoolf/bin/icc --generate' to generate the cluster config from the account\n")),Object(o.b)("p",{parentName:"li"},"This creates the files ",Object(o.b)("inlineCode",{parentName:"p"},"~/ibmcloud-account.yaml")," and ",Object(o.b)("inlineCode",{parentName:"p"},"~/ibmcloud.yaml"),". The first file contains your API keys, so keep it secret.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Get the cluster metadata for the account by running ",Object(o.b)("inlineCode",{parentName:"p"},"icc --generate")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc --generate\nGenerate config for accounts: my-account\nLogging in to account: my-account\nProcessing provider: classic\nProcessing provider: vpc-gen2\nProcessing provider: satellite\nConfig file generated/updated: /Users/bwoolf/ibmcloud.yaml\n\nNext steps:\n- Run '/Users/bwoolf/bin/icc' to list the clusters\n- Run '/Users/bwoolf/bin/icc {nickname}' to log into a cluster\n- Run '/Users/bwoolf/bin/icc --nickname' to update the nickname for a cluster\n")))),Object(o.b)(b,{mdxType:"InlineNotification"},Object(o.b)("p",null,"If you have multiple accounts, run ",Object(o.b)("inlineCode",{parentName:"p"},"icc --add-account")," multiple times to add the different API Keys. Also, ",Object(o.b)("inlineCode",{parentName:"p"},"icc --generate")," can be run multiple times to refresh the list of available clusters. Any nicknames that have been added\nwill be preserved.")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"List the available clusters with ",Object(o.b)("inlineCode",{parentName:"p"},"icc")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc\nmy-cluster - my-account/my-resource-group/my-cluster\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Optionally, give a short nickname for your cluster by running ",Object(o.b)("inlineCode",{parentName:"p"},"icc --nickname")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc --nickname my-cluster\nProvide the new nickname for my-cluster: my-nickname\nNickname for my-cluster updated to my-nickname in /Users/bwoolf/ibmcloud.yaml\n\nicc\nmy-nickname - my-account/my-resource-group/my-cluster\n")))),Object(o.b)("h2",null,"Use ICC"),Object(o.b)("p",null,"You can now log in to a cluster by running ",Object(o.b)("inlineCode",{parentName:"p"},"icc [cluster name|cluster nickname]")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"icc my-cluster\nLogging into ibmcloud: us-south/my-resource-group\nLogging into OpenShift cluster my-cluster with server url https://x123-z.us-south.containers.cloud.ibm.com:31047\n")))}p.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,n){"use strict";var a=n("q1tI"),c=n.n(a),o=n("NmYn"),l=n.n(o),r=n("Wbzz"),i=n("Xrax"),s=n("k4MR"),b=n("TSYQ"),u=n.n(b),m=n("QH2O"),p=n.n(m),d=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,c=e.tabs,o=void 0===c?[]:c;return Object(d.b)("div",{className:u()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===a,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.a.text},n)))))},g=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,c=n||a,o=c.baseUrl,l=c.subDirectory,i=o+"/edit/"+c.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+g.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},j=n("dI71"),f=n("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,a=n.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var t,c=l()(e,{lower:!0,strict:!0}),o=c===a,i=new RegExp(a+"/?(#.*)?$"),s=n.replace(i,c);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(r.Link,{className:f.link,to:""+s},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},c))))))},t}(c.a.Component),N=n("MjG9"),C=n("CzIb");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,c=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,m=t.titleType,p=b.tabs,g=b.title,j=b.theme,f=b.description,k=b.keywords,v=Object(C.a)().interiorTheme,I=Object(r.useStaticQuery)("223705900").site.pathPrefix,x=I?a.pathname.replace(I,""):a.pathname,w=p?x.split("/").filter(Boolean).slice(-1)[0]||l()(p[0],{lower:!0}):"",T=j||v;return Object(d.b)(s.a,{tabs:p,homepage:!1,theme:T,pageTitle:g,pageDescription:f,pageKeywords:k,titleType:m},Object(d.b)(h,{title:c?Object(d.b)(c,null):g,label:"label",tabs:p,theme:T}),p&&Object(d.b)(y,{slug:x,tabs:p,currentTab:w}),Object(d.b)(N.a,{padded:!0},n,Object(d.b)(O,{relativePagePath:u})),Object(d.b)(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-icc-index-mdx-fd6702f8740d88fbf18a.js.map