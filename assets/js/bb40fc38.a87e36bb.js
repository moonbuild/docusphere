"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[4827],{31850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"frontend/Vitest/testing-react-query","title":"Testing Tanstack Query","description":"A guide to testing the useNotes hook using Vitest and @testing-library/react.","source":"@site/docs/frontend/2. Vitest/testing-react-query.mdx","sourceDirName":"frontend/2. Vitest","slug":"/frontend/Vitest/testing-react-query","permalink":"/docusphere/docs/frontend/Vitest/testing-react-query","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Testing Tanstack Query","description":"A guide to testing the useNotes hook using Vitest and @testing-library/react.","displayed-sidebar":"frontend","sidebar_position":5},"sidebar":"frontend","previous":{"title":"Code Workspace","permalink":"/docusphere/docs/frontend/Vitest/code-workspace"},"next":{"title":"Testing Tanstack Router","permalink":"/docusphere/docs/frontend/Vitest/testing-routes"}}');var i=n(74848),o=n(28453);const r={title:"Testing Tanstack Query",description:"A guide to testing the useNotes hook using Vitest and @testing-library/react.","displayed-sidebar":"frontend",sidebar_position:5},a=void 0,c={},l=[{value:"Overview",id:"overview",level:2},{value:"Setting up TanStack Query Testing in React 18",id:"setting-up-tanstack-query-testing-in-react-18",level:2},{value:"Explanation of Assertions",id:"explanation-of-assertions",level:2},{value:"1. <strong>Fetching Notes Successfully</strong>",id:"1-fetching-notes-successfully",level:3},{value:"2. <strong>Creating a Note Successfully</strong>",id:"2-creating-a-note-successfully",level:3},{value:"3. <strong>Updating a Note Successfully</strong>",id:"3-updating-a-note-successfully",level:3},{value:"Why <code>renderHook</code> is Essential in React 18",id:"why-renderhook-is-essential-in-react-18",level:2},{value:"\ud83d\udccc GitHub Repository",id:"-github-repository",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["This document provides an in-depth explanation of test cases written for the ",(0,i.jsx)(t.code,{children:"useNotes"})," hook using ",(0,i.jsx)(t.strong,{children:"Vitest"})," and ",(0,i.jsx)(t.strong,{children:"@testing-library/react"}),". It covers assertions for fetching, creating, and updating notes, along with an explanation of ",(0,i.jsx)(t.code,{children:"renderHook"})," in React 18."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Know more about ",(0,i.jsx)(t.a,{href:"/docusphere/docs/frontend/react-testing-library",children:"React Testing Library"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"For more test cases and implementation details, check out the complete repository:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/tanishq-cloud/Notty",children:(0,i.jsx)(t.img,{src:"https://img.shields.io/badge/View%20on-GitHub-blue?logo=github",alt:"GitHub"})})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"setting-up-tanstack-query-testing-in-react-18",children:"Setting up TanStack Query Testing in React 18"}),"\n",(0,i.jsxs)(t.p,{children:["Before testing the ",(0,i.jsx)(t.code,{children:"useNotes"})," hook, we need to properly set up the ",(0,i.jsx)(t.strong,{children:"TanStack Query"})," (React Query) provider to ensure a new QueryClient instance is created for each test."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="Setting up wrapper"',children:"import { QueryClient, QueryClientProvider } from '@tanstack/react-query';\nimport { vi } from 'vitest';\nimport notesService from '@/services/notes.service';\n\nvi.mock('@/services/notes.service');\n\ndescribe('useNotes hook', () => {\n  let queryClient;\n\n  beforeEach(() => {\n    queryClient = new QueryClient({\n      defaultOptions: {\n        queries: {\n          retry: false,\n        },\n      },\n    });\n  });\n\n  const wrapper = ({ children }) => (\n    <QueryClientProvider client={queryClient}>\n      {children}\n    </QueryClientProvider>\n  );\n\n  // Tests follow...\n});\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This setup ensures that each test has an isolated instance of ",(0,i.jsx)(t.code,{children:"QueryClient"}),", preventing state leakage between tests."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"explanation-of-assertions",children:"Explanation of Assertions"}),"\n",(0,i.jsxs)(t.h3,{id:"1-fetching-notes-successfully",children:["1. ",(0,i.jsx)(t.strong,{children:"Fetching Notes Successfully"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"it('should fetch notes successfully', async () => {\n  const mockNotes = [\n    { id: 1, title: 'Test Note 1', content: 'Content 1' },\n    { id: 2, title: 'Test Note 2', content: 'Content 2' }\n  ];\n\n  vi.mocked(notesService.getNotes).mockResolvedValue(mockNotes);\n\n  const { result } = renderHook(() => useNotes(), { wrapper });\n\n  await waitFor(() => {\n    return result.current.notes !== undefined;\n  });\n\n  expect(result.current.isLoading).toBe(false);\n  expect(result.current.isError).toBe(false);\n  expect(result.current.notes).toEqual(mockNotes);\n});\n"})}),"\n",(0,i.jsxs)(t.h3,{id:"2-creating-a-note-successfully",children:["2. ",(0,i.jsx)(t.strong,{children:"Creating a Note Successfully"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'it(\'should create a note successfully\', async () => {\n  const newNote = { note_id: 1, title: "Test Note", body: "<p>Note body</p>", author: 1, created: new Date().toISOString(), modified: new Date().toISOString() };\n\n  vi.mocked(notesService.createNote).mockResolvedValue(newNote);\n  vi.mocked(notesService.getNotes).mockResolvedValue([newNote]);\n\n  const { result } = renderHook(() => useNotes(), { wrapper });\n\n  await result.current.createMutation.mutateAsync(newNote);\n\n  await waitFor(() => {\n    expect(notesService.createNote).toHaveBeenCalledWith(newNote);\n    expect(result.current.createMutation.isSuccess).toBe(true);\n  });\n});\n'})}),"\n",(0,i.jsxs)(t.h3,{id:"3-updating-a-note-successfully",children:["3. ",(0,i.jsx)(t.strong,{children:"Updating a Note Successfully"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"it('should update a note successfully', async () => {\n  const existingNote = { id: 1, title: 'Original Title', content: 'Original Content' };\n  const updatedData = { title: 'Updated Title' };\n\n  vi.mocked(notesService.updateNote).mockResolvedValue({\n    ...existingNote,\n    ...updatedData\n  });\n  vi.mocked(notesService.getNotes).mockResolvedValue([{\n    ...existingNote,\n    ...updatedData\n  }]);\n\n  const { result } = renderHook(() => useNotes(), { wrapper });\n\n  await result.current.updateMutation.mutateAsync({\n    noteId: existingNote.id,\n    updatedData\n  });\n\n  await waitFor(() => {\n    expect(notesService.updateNote).toHaveBeenCalledWith(existingNote.id, updatedData);\n    expect(result.current.updateMutation.isSuccess).toBe(true);\n  });\n});\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsxs)(t.h2,{id:"why-renderhook-is-essential-in-react-18",children:["Why ",(0,i.jsx)(t.code,{children:"renderHook"})," is Essential in React 18"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Purpose"}),": ",(0,i.jsx)(t.code,{children:"renderHook"})," is used to test React hooks in isolation. It allows you to render a hook and interact with its return values and effects."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Significance"}),":","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Tests hook logic without rendering a full component."}),"\n",(0,i.jsx)(t.li,{children:"Verifies state management, side effects, and mutations."}),"\n",(0,i.jsx)(t.li,{children:"Helps isolate behavior, making debugging easier."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"-github-repository",children:"\ud83d\udccc GitHub Repository"}),"\n",(0,i.jsxs)(t.p,{children:["For more test cases and the complete implementation, visit the ",(0,i.jsx)(t.a,{href:"https://github.com/tanishq-cloud/Notty",children:"GitHub repository"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);