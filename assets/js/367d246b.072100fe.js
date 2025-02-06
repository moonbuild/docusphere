"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[5095],{70716:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"backend/httpx/Installation","title":"Installation","description":"Installation of HTTPX: A Comprehensive Guide","source":"@site/docs/backend/httpx/Installation.md","sourceDirName":"backend/httpx","slug":"/backend/httpx/Installation","permalink":"/docusphere/docs/backend/httpx/Installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Installation","displayed-sidebar":"backend","sidebar_position":2},"sidebar":"backend","previous":{"title":"General Overview","permalink":"/docusphere/docs/backend/httpx"},"next":{"title":"HTTPX Syntax","permalink":"/docusphere/docs/backend/httpx/code-syntax"}}');var i=s(74848),r=s(28453);const o={title:"Installation","displayed-sidebar":"backend",sidebar_position:2},l=void 0,a={},c=[{value:"<strong>Installation of HTTPX: A Comprehensive Guide</strong>",id:"installation-of-httpx-a-comprehensive-guide",level:2},{value:"<strong>1. Prerequisites</strong>",id:"1-prerequisites",level:3},{value:"<strong>2. Basic Installation</strong>",id:"2-basic-installation",level:3},{value:"<strong>3. Optional Dependencies</strong>",id:"3-optional-dependencies",level:3},{value:"<strong>a. HTTP/2 Support</strong>",id:"a-http2-support",level:4},{value:"<strong>b. Broader HTTP Protocol Support</strong>",id:"b-broader-http-protocol-support",level:4},{value:"<strong>c. All Optional Features</strong>",id:"c-all-optional-features",level:4},{value:"<strong>4. Verifying Installation</strong>",id:"4-verifying-installation",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"installation-of-httpx-a-comprehensive-guide",children:(0,i.jsx)(n.strong,{children:"Installation of HTTPX: A Comprehensive Guide"})}),"\n",(0,i.jsx)(n.p,{children:"HTTPX is a modern and versatile HTTP client for Python that supports both synchronous and asynchronous requests. Installing HTTPX is straightforward, but understanding the various installation options ensures you set up your environment correctly for your specific use case. Below is an in-depth guide to installing HTTPX, including prerequisites, optional dependencies, and troubleshooting tips."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"1-prerequisites",children:(0,i.jsx)(n.strong,{children:"1. Prerequisites"})}),"\n",(0,i.jsx)(n.p,{children:"Before installing HTTPX, ensure that your environment meets the following requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Python Version"}),": HTTPX requires Python 3.7 or higher. Verify your Python version by running:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"python --version\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you're using Python 2.x or an older version of Python 3, consider upgrading to a supported version."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"pip"}),": Ensure that ",(0,i.jsx)(n.code,{children:"pip"})," (Python's package manager) is installed and up-to-date. Update ",(0,i.jsx)(n.code,{children:"pip"})," using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install --upgrade pip\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"2-basic-installation",children:(0,i.jsx)(n.strong,{children:"2. Basic Installation"})}),"\n",(0,i.jsxs)(n.p,{children:["To install HTTPX, use ",(0,i.jsx)(n.code,{children:"pip"}),", the Python package manager. Run the following command to install the latest stable version of HTTPX:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install httpx\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command installs HTTPX with its core functionality, which includes support for both synchronous and asynchronous HTTP requests."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"3-optional-dependencies",children:(0,i.jsx)(n.strong,{children:"3. Optional Dependencies"})}),"\n",(0,i.jsx)(n.p,{children:"HTTPX provides several optional features that require additional dependencies. Depending on your use case, you may need to install these extras:"}),"\n",(0,i.jsx)(n.h4,{id:"a-http2-support",children:(0,i.jsx)(n.strong,{children:"a. HTTP/2 Support"})}),"\n",(0,i.jsxs)(n.p,{children:["HTTPX supports HTTP/2, but this feature requires the ",(0,i.jsx)(n.code,{children:"h2"})," library. To enable HTTP/2, install HTTPX with the ",(0,i.jsx)(n.code,{children:"http2"})," extra:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install httpx[http2]\n"})}),"\n",(0,i.jsx)(n.p,{children:"This installs the necessary dependencies for HTTP/2 protocol support, allowing you to communicate with servers that use HTTP/2."}),"\n",(0,i.jsx)(n.h4,{id:"b-broader-http-protocol-support",children:(0,i.jsx)(n.strong,{children:"b. Broader HTTP Protocol Support"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need broader HTTP protocol support (e.g., SOCKS proxies), install HTTPX with the ",(0,i.jsx)(n.code,{children:"socks"})," extra:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install httpx[socks]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This installs the ",(0,i.jsx)(n.code,{children:"socksio"})," library, enabling support for SOCKS proxies."]}),"\n",(0,i.jsx)(n.h4,{id:"c-all-optional-features",children:(0,i.jsx)(n.strong,{children:"c. All Optional Features"})}),"\n",(0,i.jsxs)(n.p,{children:["To install all optional dependencies at once, use the ",(0,i.jsx)(n.code,{children:"all"})," extra:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install httpx[all]\n"})}),"\n",(0,i.jsx)(n.p,{children:"This installs HTTPX along with all optional dependencies, including HTTP/2 and SOCKS proxy support."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"4-verifying-installation",children:(0,i.jsx)(n.strong,{children:"4. Verifying Installation"})}),"\n",(0,i.jsx)(n.p,{children:"After installation, verify that HTTPX is installed correctly by checking its version:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'python -c "import httpx; print(httpx.__version__)"\n'})}),"\n",(0,i.jsx)(n.p,{children:"This command should output the installed version of HTTPX. If no errors occur, the installation was successful."}),"\n",(0,i.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);