"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[5402],{7603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"frontend/Playwright/code-syntax","title":"Code Syntax","description":"Playwright Essentials","source":"@site/docs/frontend/5. Playwright/code-syntax.md","sourceDirName":"frontend/5. Playwright","slug":"/frontend/playwright/code-syntax","permalink":"/docs/frontend/playwright/code-syntax","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Code Syntax","displayed-sidebar":"frontend","sidebar_position":3,"authors":["tanishq"],"slug":"/frontend/playwright/code-syntax"},"sidebar":"frontend","previous":{"title":"Why Playwright Testing in VS Code is Easy","permalink":"/docs/frontend/playwright/it-is-easy"}}');var s=n(74848),a=n(28453);const r={title:"Code Syntax","displayed-sidebar":"frontend",sidebar_position:3,authors:["tanishq"],slug:"/frontend/playwright/code-syntax"},l="A Practical Guide to Playwright \u2728",o={},c=[{value:"Playwright Essentials",id:"playwright-essentials",level:2},{value:"Page Fixture \u2699\ufe0f",id:"page-fixture-\ufe0f",level:3},{value:"Assertions \ud83c\udfe2",id:"assertions-",level:3},{value:"Common Assertions:",id:"common-assertions",level:4},{value:"Custom Matchers:",id:"custom-matchers",level:4},{value:"Actions \ud83d\ude80",id:"actions-",level:3},{value:"Common Actions:",id:"common-actions",level:4},{value:"Combining Actions:",id:"combining-actions",level:4},{value:"Real-world Example: Notty App Test Suite \ud83d\udcd6",id:"real-world-example-notty-app-test-suite-",level:2},{value:"Testing Login Flow:",id:"testing-login-flow",level:3},{value:"Testing Note Creation:",id:"testing-note-creation",level:3},{value:"Testing Note Deletion:",id:"testing-note-deletion",level:3},{value:"Wrapping Up \ud83c\udf89",id:"wrapping-up-",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"a-practical-guide-to-playwright-",children:"A Practical Guide to Playwright \u2728"})}),"\n",(0,s.jsx)(t.h2,{id:"playwright-essentials",children:"Playwright Essentials"}),"\n",(0,s.jsx)(t.h3,{id:"page-fixture-\ufe0f",children:"Page Fixture \u2699\ufe0f"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"page"})," fixture is the backbone of Playwright tests. It provides a browser tab (or page) for running interactions. Essentially, it represents a single browser context and is isolated from other tests. This isolation ensures tests don\u2019t interfere with one another, making it perfect for parallel execution."]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"import { test } from '@playwright/test';\n \ntest('basic test', async ({ page }) => {\n  await page.goto('http://localhost:3000');\n  await page.click('button#start');\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Here, the ",(0,s.jsx)(t.code,{children:"page"})," object is injected into your test, allowing you to interact with the browser seamlessly."]}),"\n",(0,s.jsx)(t.p,{children:"Additionally, you can use multiple pages within a test by creating new browser contexts:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"const context = await browser.newContext();\nconst page = await context.newPage();\n"})}),"\n",(0,s.jsx)(t.p,{children:"This is particularly useful for scenarios like testing multiple users or simultaneous interactions."}),"\n",(0,s.jsx)(t.h3,{id:"assertions-",children:"Assertions \ud83c\udfe2"}),"\n",(0,s.jsxs)(t.p,{children:["Assertions in Playwright are your safety net, ensuring the app behaves as expected. With built-in ",(0,s.jsx)(t.code,{children:"expect"})," methods, you can validate a variety of conditions, such as element visibility, text content, or URL correctness."]}),"\n",(0,s.jsx)(t.h4,{id:"common-assertions",children:"Common Assertions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Visibility Checks:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page.getByText('Welcome')).toBeVisible();\n"})}),"\n",(0,s.jsx)(t.p,{children:'This ensures the element with the text "Welcome" is visible on the page.'}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Title Verification:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page).toHaveTitle(/Home Page/);\n"})}),"\n",(0,s.jsx)(t.p,{children:"Validates that the page\u2019s title matches the given regex."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"URL Validation:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page).toHaveURL('http://localhost:3000/dashboard');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Confirms that the browser navigated to the correct URL."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Element State:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Disabled Buttons:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Checked Checkboxes:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page.getByRole('checkbox')).toBeChecked();\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Text Content Matching:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await expect(page.getByTestId('message')).toHaveText('Operation successful!');\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"By combining assertions with actions, you can simulate real user workflows and ensure each step behaves as intended."}),"\n",(0,s.jsx)(t.h4,{id:"custom-matchers",children:"Custom Matchers:"}),"\n",(0,s.jsx)(t.p,{children:"You can also extend Playwright\u2019s assertion library with your own matchers, providing even more flexibility for validating unique scenarios."}),"\n",(0,s.jsx)(t.h3,{id:"actions-",children:"Actions \ud83d\ude80"}),"\n",(0,s.jsx)(t.p,{children:"Actions simulate user interactions, allowing you to replicate real-world scenarios with precision. Playwright provides a rich set of actions to interact with web elements:"}),"\n",(0,s.jsx)(t.h4,{id:"common-actions",children:"Common Actions:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Clicking Elements:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.getByRole('button', { name: 'Sign In' }).click();\n"})}),"\n",(0,s.jsx)(t.p,{children:"Whether it\u2019s a button, link, or any clickable element, this action mimics a user click."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Typing into Inputs:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.getByRole('textbox', { name: 'Username' }).fill('testuser');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Automatically clears the field before entering the provided value."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Hovering Over Elements:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.hover('.menu-item');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Useful for triggering hover states or dropdowns."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Dragging and Dropping:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.dragAndDrop('#source', '#destination');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Simulates a drag-and-drop action between two elements."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"File Uploads:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.setInputFiles('input[type=\"file\"]', 'path/to/file.txt');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Mimics the file upload process by selecting a file."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Scrolling:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.locator('#scrollable-element').scrollIntoViewIfNeeded();\n"})}),"\n",(0,s.jsx)(t.p,{children:"Ensures elements are within view before interacting."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"combining-actions",children:"Combining Actions:"}),"\n",(0,s.jsx)(t.p,{children:"Actions can be combined to create complex workflows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"await page.goto('http://localhost:3000');\nawait page.getByRole('textbox', { name: 'Search' }).fill('Playwright');\nawait page.getByRole('button', { name: 'Search' }).click();\nawait expect(page.getByText('Results for Playwright')).toBeVisible();\n"})}),"\n",(0,s.jsx)(t.p,{children:"Playwright\u2019s ability to chain actions makes it easy to simulate user journeys, ensuring your app handles them correctly."}),"\n",(0,s.jsx)(t.h2,{id:"real-world-example-notty-app-test-suite-",children:"Real-world Example: Notty App Test Suite \ud83d\udcd6"}),"\n",(0,s.jsx)(t.p,{children:'Here\u2019s a example of a Playwright test suite for a fictional app called "Notty" \u2013 a note-taking app:'}),"\n",(0,s.jsx)(t.h3,{id:"testing-login-flow",children:"Testing Login Flow:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"async function login(page, username: string, password: string) {\n  await page.goto('http://localhost:3000/login');\n  await page.getByRole('textbox', { name: 'Username' }).fill(username);\n  await page.getByRole('textbox', { name: 'Password' }).fill(password);\n  await page.getByRole('button', { name: 'Sign in' }).click();\n}\n \ntest('should login successfully', async ({ page }) => {\n  await login(page, 'testuser', 'password123');\n  await expect(page.getByRole('heading', { name: 'My Notes' })).toBeVisible();\n});\n \ntest('should throw error for invalid login', async ({ page }) => {\n  await login(page, 'wronguser', 'wrongpass');\n  await expect(page.getByText('Invalid username or password')).toBeVisible();\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testing-note-creation",children:"Testing Note Creation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"test('should create a new note', async ({ page }) => {\n  await login(page, 'testuser', 'password123');\n  await page.getByTestId('create-button').click();\n  await page.getByRole('textbox', { name: 'Title' }).fill('Test Note');\n  await page.getByTestId('quill-editor').locator('div').fill('This is a test note');\n  await page.getByRole('button', { name: 'Create Note' }).click();\n  await expect(page.getByText('New Note created successfully!')).toBeVisible();\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"testing-note-deletion",children:"Testing Note Deletion:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"test('should delete a note', async ({ page }) => {\n  await login(page, 'testuser', 'password123');\n  await page.getByTestId('delete-button').nth(2).click();\n  await expect(page.getByRole('heading', { name: 'Are you sure?' })).toBeVisible();\n  await page.getByRole('button', { name: 'Delete' }).click();\n  await expect(page.getByText('No note has been created')).toBeVisible();\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"wrapping-up-",children:"Wrapping Up \ud83c\udf89"}),"\n",(0,s.jsx)(t.p,{children:"Playwright is a powerful ally for modern web app testing. With its robust features, cross-browser support, and user-friendly API, it\u2019s perfect for creating reliable, maintainable test suites. By leveraging the power of page fixtures, assertions, and actions, you can create comprehensive tests that simulate real user experiences."}),"\n",(0,s.jsx)(t.p,{children:"Whether you\u2019re verifying a login flow or simulating a complex user journey, Playwright has your back. Happy testing!"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);