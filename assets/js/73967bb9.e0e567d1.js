"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[5272],{87532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/Vitest/getting-started","title":"Getting Started","description":"To integrate Vitest into your Vite project, you need to configure it in your vite.config.ts file and set up the necessary scripts in your package.json. This guide will walk you through the process.","source":"@site/docs/frontend/2. Vitest/getting-started.mdx","sourceDirName":"frontend/2. Vitest","slug":"/frontend/vitest/getting-started","permalink":"/docs/frontend/vitest/getting-started","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Getting Started","displayed-sidebar":"frontend","sidebar_position":2,"slug":"/frontend/vitest/getting-started","authors":["tanishq"]},"sidebar":"frontend","previous":{"title":"General Overview","permalink":"/docs/frontend/vitest"},"next":{"title":"Code Syntax","permalink":"/docs/frontend/vitest/code-syntax"}}');var i=n(74848),r=n(28453),a=n(65537),l=n(79329);const o={title:"Getting Started","displayed-sidebar":"frontend",sidebar_position:2,slug:"/frontend/vitest/getting-started",authors:["tanishq"]},c="Configuring Vitest in Vite",u={},d=[{value:"Step 1: Install Vitest",id:"step-1-install-vitest",level:2},{value:"Step 2: Configure Vitest in <code>vite.config.ts</code>",id:"step-2-configure-vitest-in-viteconfigts",level:2},{value:"Explanation:",id:"explanation",level:3},{value:"Step 3: Set Up Vitest UI in <code>package.json</code>",id:"step-3-set-up-vitest-ui-in-packagejson",level:2},{value:"Explanation:",id:"explanation-1",level:3},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Step 4: Run Vitest",id:"step-4-run-vitest",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"configuring-vitest-in-vite",children:"Configuring Vitest in Vite"})}),"\n",(0,i.jsxs)(t.p,{children:["To integrate Vitest into your Vite project, you need to configure it in your ",(0,i.jsx)(t.code,{children:"vite.config.ts"})," file and set up the necessary scripts in your ",(0,i.jsx)(t.code,{children:"package.json"}),". This guide will walk you through the process."]}),"\n",(0,i.jsx)(t.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(t.h2,{id:"step-1-install-vitest",children:"Step 1: Install Vitest"}),"\n",(0,i.jsxs)(t.p,{children:["To get started with Vitest, you need to have a Vite project set up. Alternatively you can also get started and run your tests using the ",(0,i.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=vitest.explorer",children:"VS Code Extension"}),". You can install Vitest using the following:"]}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(l.A,{value:"npm",label:"npm",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -D vitest\n"})})}),(0,i.jsx)(l.A,{value:"yarn",label:"yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn add -D vitest\n"})})}),(0,i.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:" pnpm add -D vitest\n"})})}),(0,i.jsx)(l.A,{value:"bun",label:"bun",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"bun add -D vitest\n"})})})]}),"\n",(0,i.jsx)(t.p,{children:"Once installed, you can create a basic test file and run it using Vitest."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Vitest requires Vite >=v5.0.0 and Node >=v18.0.0"})}),"\n",(0,i.jsxs)(t.h2,{id:"step-2-configure-vitest-in-viteconfigts",children:["Step 2: Configure Vitest in ",(0,i.jsx)(t.code,{children:"vite.config.ts"})]}),"\n",(0,i.jsxs)(t.p,{children:["Next, you need to configure Vitest in your ",(0,i.jsx)(t.code,{children:"vite.config.ts"})," file. Open the file and add the following configuration:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n  test: {\n    globals: true,\n    environment: 'jsdom',\n    include: ['src/**/*.{test,spec}.{js,ts}'],\n  },\n});\n"})}),"\n",(0,i.jsx)(t.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"globals: true"}),": This option allows you to use global methods like ",(0,i.jsx)(t.code,{children:"describe"}),", ",(0,i.jsx)(t.code,{children:"it"}),", and ",(0,i.jsx)(t.code,{children:"expect"})," without importing them in each test file."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"environment: 'jsdom'"}),": This sets the testing environment to ",(0,i.jsx)(t.code,{children:"jsdom"}),", which is suitable for testing frontend code."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"include"}),": This specifies the pattern for test files. Adjust this pattern according to your project structure."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"step-3-set-up-vitest-ui-in-packagejson",children:["Step 3: Set Up Vitest UI in ",(0,i.jsx)(t.code,{children:"package.json"})]}),"\n",(0,i.jsxs)(t.p,{children:["To use the Vitest UI, you need to add a script in your ",(0,i.jsx)(t.code,{children:"package.json"})," file. Open the file and add the following script:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "vitest",\n    "test:ui": "vitest --ui"\n  }\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"explanation-1",children:"Explanation:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"test"}),": This script runs Vitest in the command line interface (CLI)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:["test",":ui"]}),": This script runs Vitest with the user interface (UI), providing a visual dashboard for your tests."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,i.jsx)(t.p,{children:"Vitest uses a syntax similar to Jest, making it easy to write and understand tests. Here's a simple example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="multiply.js"',children:"export function multiply(a, b) {\n  return a * b\n}\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="multiply.test.js"',children:"import { describe, it, expect } from 'vitest';\n\ndescribe('Math Operations', () => {\n  it('Multily 10 * 5 to equal 50', () => {\n    expect(multiply(10,5)).toBe(50);\n  });\n});\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"It's just basic example, won't be using it for actual test below."})}),"\n",(0,i.jsx)(t.h2,{id:"step-4-run-vitest",children:"Step 4: Run Vitest"}),"\n",(0,i.jsx)(t.p,{children:"You can now run Vitest using the following commands:"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(l.A,{value:"npm",label:"npm",default:!0,children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})})}),(0,i.jsx)(l.A,{value:"yarn",label:"yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"yarn test\n"})})}),(0,i.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:" pnpm run test\n"})})}),(0,i.jsx)(l.A,{value:"bun",label:"bun",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"bun run test\n"})})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"npm run test",src:n(81843).A+"",width:"992",height:"546"})}),"\n",(0,i.jsx)(t.p,{children:"To run tests with the UI:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run test:ui\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"npm run test",src:n(61204).A+"",width:"1366",height:"768"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.p,{children:["For more detailed information, check out the ",(0,i.jsx)(t.a,{href:"https://vitest.dev/",children:"official Vitest documentation"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>V});var s=n(96540),i=n(34164),r=n(65627),a=n(56347),l=n(50372),o=n(30604),c=n(11861),u=n(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,d]=g({queryString:n,groupId:i}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),x=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),i=l[n].value;i!==s&&(c(t),a(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(b,{...t,...e})]})}function V(e){const t=(0,m.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},81843:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/vitestter-d6b237809000441bf466190f5d3fcd2d.gif"},61204:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/vitestui-33d1885e1aefa82abf296e517bcab84d.gif"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);