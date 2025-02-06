"use strict";(self.webpackChunkapp_try=self.webpackChunkapp_try||[]).push([[1823],{30952:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"frontend/Cypress/3 code-syntax","title":"Code Syntax","description":"Learning the syntax of a new tool is best done through practical examples. Let\'s start by visiting example.com and performing some basic assertions.","source":"@site/docs/frontend/1. Cypress/3 code-syntax.md","sourceDirName":"frontend/1. Cypress","slug":"/frontend/Cypress/3 code-syntax","permalink":"/docusphere/docs/frontend/Cypress/3 code-syntax","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Code Syntax","displayed-sidebar":"frontend","sidebar_position":3},"sidebar":"frontend","previous":{"title":"Installation","permalink":"/docusphere/docs/frontend/Cypress/2 installation"},"next":{"title":"Code Workspace","permalink":"/docusphere/docs/frontend/Cypress/4 code-workspace"}}');var d=t(74848),c=t(28453);const i={title:"Code Syntax","displayed-sidebar":"frontend",sidebar_position:3},r="Cypress Syntax Documentation",l={},h=[{value:"Cypress Code",id:"cypress-code",level:2},{value:"Detailed Parameters for <code>cy.should()</code>",id:"detailed-parameters-for-cyshould",level:3}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.header,{children:(0,d.jsx)(s.h1,{id:"cypress-syntax-documentation",children:"Cypress Syntax Documentation"})}),"\n",(0,d.jsxs)(s.p,{children:["Learning the syntax of a new tool is best done through practical examples. Let's start by visiting ",(0,d.jsx)(s.a,{href:"https://example.com",children:(0,d.jsx)(s.code,{children:"example.com"})})," and performing some basic assertions."]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.img,{alt:"Example Web Page",src:t(26809).A+"",width:"661",height:"240"})}),"\n",(0,d.jsx)(s.p,{children:"In this example, we will:"}),"\n",(0,d.jsxs)(s.ol,{children:["\n",(0,d.jsxs)(s.li,{children:["Visit the ",(0,d.jsx)(s.code,{children:"example.com"})," webpage."]}),"\n",(0,d.jsx)(s.li,{children:'Check if the text "Example Domain" exists.'}),"\n",(0,d.jsxs)(s.li,{children:["Verify that this text is within an ",(0,d.jsx)(s.code,{children:"h1"})," tag."]}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"cypress-code",children:"Cypress Code"}),"\n",(0,d.jsx)(s.p,{children:"Below is the Cypress code to achieve the above steps:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-javascript",children:"\ndescribe('Example Domain Test', () => {\n  it('should visit example.com and check for \"Example Domain\" in h1 tag', () => {\n    // visit the example.com page\n    cy.visit('https://example.com');\n\n    cy.get('h1') //check if there is a h1 tag\n    .should('contain', 'Example Domain'); //assert if it contains text 'Example Domain'\n  });\n});\n"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.p,{children:["Got it! Here is the table formatted without using ",(0,d.jsx)(s.code,{children:"<br>"})," tags, making it compatible with Docusaurus:"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Function"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Description"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Usage Example"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Parameters"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.visit()"})}),(0,d.jsx)(s.td,{children:"Navigates to a given URL."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.visit('https://example.com')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"url"})," (string): The URL to navigate to."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get()"})}),(0,d.jsx)(s.td,{children:"Gets one or more DOM elements by selector."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"selector"})," (string): The selector to query the DOM."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.contains()"})}),(0,d.jsx)(s.td,{children:"Gets DOM elements containing the specified content."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.contains('h1', 'Welcome')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"selector"})," (string): The selector to query the DOM. ",(0,d.jsx)(s.code,{children:"content"})," (string): The content to search for."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.click()"})}),(0,d.jsx)(s.td,{children:"Clicks a DOM element."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button').click()"})}),(0,d.jsx)(s.td,{children:"None"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.type()"})}),(0,d.jsx)(s.td,{children:"Types text into a DOM element."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('input').type('Hello, World!')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"text"})," (string): The text to type into the element."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.should()"})}),(0,d.jsx)(s.td,{children:"Makes an assertion about the current subject."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should('be.visible')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"assertion"})," (string or function): The assertion to make. ",(0,d.jsx)(s.code,{children:"value"})," (any): The value to assert against."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.expect()"})}),(0,d.jsx)(s.td,{children:"Makes an assertion about a value."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.expect(true).to.be.true"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"actual"})," (any): The value to assert. ",(0,d.jsx)(s.code,{children:"expected"})," (any): The expected value."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.find()"})}),(0,d.jsx)(s.td,{children:"Finds descendant DOM elements of the current subject."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('ul').find('li')"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"selector"})," (string): The selector to query the descendants."]})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.first()"})}),(0,d.jsx)(s.td,{children:"Gets the first DOM element within a set of DOM elements."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('li').first()"})}),(0,d.jsx)(s.td,{children:"None"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.last()"})}),(0,d.jsx)(s.td,{children:"Gets the last DOM element within a set of DOM elements."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('li').last()"})}),(0,d.jsx)(s.td,{children:"None"})]})]})]}),"\n",(0,d.jsxs)(s.h3,{id:"detailed-parameters-for-cyshould",children:["Detailed Parameters for ",(0,d.jsx)(s.code,{children:"cy.should()"})]}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.code,{children:"cy.should()"})," function is highly versatile and can accept various parameters to make assertions. Here are some common parameters:"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Assertion"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Description"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Example"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"be.visible"})}),(0,d.jsx)(s.td,{children:"Asserts that the element is visible."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should('be.visible')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"be.hidden"})}),(0,d.jsx)(s.td,{children:"Asserts that the element is hidden."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should('be.hidden')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"be.disabled"})}),(0,d.jsx)(s.td,{children:"Asserts that the element is disabled."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should('be.disabled')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"have.text"})}),(0,d.jsx)(s.td,{children:"Asserts that the element has the specified text."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('h1').should('have.text', 'Welcome')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"have.value"})}),(0,d.jsx)(s.td,{children:"Asserts that the element has the specified value."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('input').should('have.value', 'testuser')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"have.class"})}),(0,d.jsx)(s.td,{children:"Asserts that the element has the specified CSS class."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('div').should('have.class', 'active')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"have.attr"})}),(0,d.jsx)(s.td,{children:"Asserts that the element has the specified attribute."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('a').should('have.attr', 'href', '/dashboard')"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"have.prop"})}),(0,d.jsx)(s.td,{children:"Asserts that the element has the specified property."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"cy.get('input').should('have.prop', 'disabled', true)"})})]})]})]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Function Assertions"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"You can pass a function to make custom assertions."}),"\n",(0,d.jsx)(s.li,{children:"Example:"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should(($btn) => { expect($btn).to.have.text('Click Me'); })\n"})}),"\n"]}),"\n",(0,d.jsxs)(s.li,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Chaining Assertions"}),":"]}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsxs)(s.li,{children:["You can chain multiple assertions using ",(0,d.jsx)(s.code,{children:"and"}),"."]}),"\n",(0,d.jsx)(s.li,{children:"Example:"}),"\n"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"cy.get('button').should('be.visible').and('have.text', 'Click Me')\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsxs)(s.p,{children:["For more detailed information, refer to the ",(0,d.jsx)(s.a,{href:"https://docs.cypress.io/",children:"official Cypress documentation"})]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},26809:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/exampleWebPage-8cba8c51d49a3834ec46f889a91cd577.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(96540);const d={},c=n.createContext(d);function i(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);