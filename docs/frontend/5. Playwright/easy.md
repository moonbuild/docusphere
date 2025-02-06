---
title: Why Playwright Testing in VS Code is Easy
displayed-sidebar : frontend
sidebar_position: 2
authors: [tanishq]
slug: /frontend/playwright/it-is-easy

---

## Introduction

Playwright's integration with **VS Code** simplifies end-to-end testing, making it accessible for both beginners and experienced developers. With built-in tools like **Pick Locator**, **Record New**, and **Record at Cursor**, Playwright removes the need to manually find locators, making test writing much faster and easier.

## No Need to Learn All Locators

One of the biggest challenges in UI automation testing is identifying the right locators for elements. Playwright in VS Code solves this problem with features like:

- **Pick Locator** – Simply hover over elements and let Playwright generate the locators for you.
- **Auto-suggested Locators** – Playwright intelligently picks the most reliable locator strategy (e.g., role-based locators, text selectors, etc.).

This eliminates the trial-and-error process required in other testing frameworks like Cypress, where users need to manually figure out locators.

## Simplified Assertions

Assertions in Playwright are straightforward and built into the framework, reducing the complexity of test validation. Playwright provides easy-to-read assertions such as:

```javascript
await expect(page.locator('text=Login Successful')).toBeVisible();
```

- No need to install extra assertion libraries.
- Works seamlessly with VS Code’s IntelliSense, reducing syntax errors.
- Auto-generated assertions from the **Record New** tool simplify test creation.

## Easier Test Writing Compared to Cypress

### 1. No Need for `cy.wait()`
- Playwright **automatically waits** for elements to be ready, whereas Cypress requires manual `cy.wait()` commands.
- Example in Cypress:
  ```javascript
  cy.get('button').should('be.visible');
  ```
  Requires additional waits for animations or network delays.
- Example in Playwright:
  ```javascript
  await page.getByRole('button').click();
  ```
  Playwright **intelligently waits** for the button to be actionable.

### 2. Cross-Browser Support Out of the Box
- Playwright allows running tests in **Chromium, Firefox, WebKit, and Edge** with a single setup.
- Cypress **only supports Chromium-based browsers** without third-party integrations.

### 3. Built-in Test Generator
- In VS Code, **Record New** generates test scripts automatically, requiring little to no manual scripting.
- Cypress lacks a built-in test recorder, requiring users to write tests from scratch.

## Conclusion

For more details, check out the official [Playwright documentation](https://playwright.dev/docs/intro).

