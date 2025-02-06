"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[3095],{60838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"frontend/Jester/Jest-Installation","title":"Jest Installation","description":"Installation for TypeScript","source":"@site/docs/frontend/4. Jester/Jest-Installation.md","sourceDirName":"frontend/4. Jester","slug":"/frontend/Jester/Jest-Installation","permalink":"/docs/frontend/Jester/Jest-Installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Jest Installation","displayed-sidebar":"frontend","sidebar_position":2},"sidebar":"frontend","previous":{"title":"General Overview","permalink":"/docs/backend/jester"},"next":{"title":"Syntax and functions","permalink":"/docs/frontend/Jester/code-syntax"}}');var i=t(74848),o=t(28453);const l={title:"Jest Installation","displayed-sidebar":"frontend",sidebar_position:2},r="Jest Installation Guide",a={},c=[{value:"Installation for TypeScript",id:"installation-for-typescript",level:2},{value:"1) Install Jest and TypeScript Dependencies",id:"1-install-jest-and-typescript-dependencies",level:3},{value:"2) Configure jest.config.ts Manually",id:"2-configure-jestconfigts-manually",level:3},{value:"3) Install ts-node dependency",id:"3-install-ts-node-dependency",level:3},{value:"4) Update Ts-config",id:"4-update-ts-config",level:3},{value:"Installation for JavaScript",id:"installation-for-javascript",level:2},{value:"1) Install Jest",id:"1-install-jest",level:3},{value:"2) Update package.json",id:"2-update-packagejson",level:3}];function d(e){const n={blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"jest-installation-guide",children:"Jest Installation Guide"})}),"\n",(0,i.jsx)(n.h2,{id:"installation-for-typescript",children:"Installation for TypeScript"}),"\n",(0,i.jsx)(n.h3,{id:"1-install-jest-and-typescript-dependencies",children:"1) Install Jest and TypeScript Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm i -D jest typescript ts-jest @types/jest\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-configure-jestconfigts-manually",children:"2) Configure jest.config.ts Manually"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import type { Config } from '@jest/types';\n\nconst config: Config.InitialOptions = {\n  preset: 'ts-jest',\n  testEnvironment: 'jsdom',  // Use 'jsdom' for React, 'node' for backend\n  verbose: true,\n  transform: {\n    '^.+\\\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],\n  },\n  moduleNameMapper: {\n    '^@/(.*)$': '<rootDir>/src/$1', // Ensure alias resolution\n  }\n};\n\nexport default config;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-install-ts-node-dependency",children:"3) Install ts-node dependency"}),"\n",(0,i.jsx)(n.p,{children:"ts-node is a TypeScript execution environment for Node.js. It allows you to run TypeScript files directly without needing to compile them into JavaScript first.\nRun the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm i -D ts-node\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-update-ts-config",children:"4) Update Ts-config"}),"\n",(0,i.jsx)(n.p,{children:"Ensure your tsconfig.json file contains the following options:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "jsx": "react-jsx", // Enables JSX support\n    "esModuleInterop": true, // Fix import issues\n    "moduleResolution": "node",\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["src/*"] // Ensure alias resolution\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"installation-for-javascript",children:"Installation for JavaScript"}),"\n",(0,i.jsx)(n.h3,{id:"1-install-jest",children:"1) Install Jest"}),"\n",(0,i.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm i --save-dev jest\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-update-packagejson",children:"2) Update package.json"}),"\n",(0,i.jsx)(n.p,{children:"Modify the scripts section in package.json to include Jest:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"scripts": {\n  "test": "jest"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"After writing the test, run the following command in your command line to execute the tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"npm test\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"}),(0,i.jsx)(n.br,{}),"\n","After running ",(0,i.jsx)(n.code,{children:"npm test"}),", Jest will detect files with extensions like ",(0,i.jsx)(n.code,{children:".spec"})," or ",(0,i.jsx)(n.code,{children:".test"}),". For example, ",(0,i.jsx)(n.code,{children:"your-file-name.spec.tsx"})," or ",(0,i.jsx)(n.code,{children:"your-file-name.test.tsx"}),". Make sure you have written all the test cases in these files."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);