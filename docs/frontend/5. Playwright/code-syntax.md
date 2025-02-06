---
title: Code Syntax
displayed-sidebar : frontend
sidebar_position: 3
authors: [tanishq]
slug: /frontend/playwright/code-syntax
---
# A Practical Guide to Playwright ✨
 
## Playwright Essentials
 
### Page Fixture ⚙️
The `page` fixture is the backbone of Playwright tests. It provides a browser tab (or page) for running interactions. Essentially, it represents a single browser context and is isolated from other tests. This isolation ensures tests don’t interfere with one another, making it perfect for parallel execution.
 
Example:
```typescript
import { test } from '@playwright/test';
 
test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.click('button#start');
});
```
Here, the `page` object is injected into your test, allowing you to interact with the browser seamlessly.
 
Additionally, you can use multiple pages within a test by creating new browser contexts:
```typescript
const context = await browser.newContext();
const page = await context.newPage();
```
This is particularly useful for scenarios like testing multiple users or simultaneous interactions.
 
### Assertions 🏢
Assertions in Playwright are your safety net, ensuring the app behaves as expected. With built-in `expect` methods, you can validate a variety of conditions, such as element visibility, text content, or URL correctness.
 
#### Common Assertions:
1. **Visibility Checks:**
   ```typescript
   await expect(page.getByText('Welcome')).toBeVisible();
   ```
   This ensures the element with the text "Welcome" is visible on the page.
 
2. **Title Verification:**
   ```typescript
   await expect(page).toHaveTitle(/Home Page/);
   ```
   Validates that the page’s title matches the given regex.
 
3. **URL Validation:**
   ```typescript
   await expect(page).toHaveURL('http://localhost:3000/dashboard');
   ```
   Confirms that the browser navigated to the correct URL.
 
4. **Element State:**
   - **Disabled Buttons:**
     ```typescript
     await expect(page.getByRole('button', { name: 'Submit' })).toBeDisabled();
     ```
   - **Checked Checkboxes:**
     ```typescript
     await expect(page.getByRole('checkbox')).toBeChecked();
     ```
 
5. **Text Content Matching:**
   ```typescript
   await expect(page.getByTestId('message')).toHaveText('Operation successful!');
   ```
 
By combining assertions with actions, you can simulate real user workflows and ensure each step behaves as intended.
 
#### Custom Matchers:
You can also extend Playwright’s assertion library with your own matchers, providing even more flexibility for validating unique scenarios.
 
### Actions 🚀
Actions simulate user interactions, allowing you to replicate real-world scenarios with precision. Playwright provides a rich set of actions to interact with web elements:
 
#### Common Actions:
1. **Clicking Elements:**
   ```typescript
   await page.getByRole('button', { name: 'Sign In' }).click();
   ```
   Whether it’s a button, link, or any clickable element, this action mimics a user click.
 
2. **Typing into Inputs:**
   ```typescript
   await page.getByRole('textbox', { name: 'Username' }).fill('testuser');
   ```
   Automatically clears the field before entering the provided value.
 
3. **Hovering Over Elements:**
   ```typescript
   await page.hover('.menu-item');
   ```
   Useful for triggering hover states or dropdowns.
 
4. **Dragging and Dropping:**
   ```typescript
   await page.dragAndDrop('#source', '#destination');
   ```
   Simulates a drag-and-drop action between two elements.
 
5. **File Uploads:**
   ```typescript
   await page.setInputFiles('input[type="file"]', 'path/to/file.txt');
   ```
   Mimics the file upload process by selecting a file.
 
6. **Scrolling:**
   ```typescript
   await page.locator('#scrollable-element').scrollIntoViewIfNeeded();
   ```
   Ensures elements are within view before interacting.
 
#### Combining Actions:
Actions can be combined to create complex workflows:
```typescript
await page.goto('http://localhost:3000');
await page.getByRole('textbox', { name: 'Search' }).fill('Playwright');
await page.getByRole('button', { name: 'Search' }).click();
await expect(page.getByText('Results for Playwright')).toBeVisible();
```
 
Playwright’s ability to chain actions makes it easy to simulate user journeys, ensuring your app handles them correctly.
 
## Real-world Example: Notty App Test Suite 📖
 
Here’s a example of a Playwright test suite for a fictional app called "Notty" – a note-taking app:
 
### Testing Login Flow:
```typescript
async function login(page, username: string, password: string) {
  await page.goto('http://localhost:3000/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}
 
test('should login successfully', async ({ page }) => {
  await login(page, 'testuser', 'password123');
  await expect(page.getByRole('heading', { name: 'My Notes' })).toBeVisible();
});
 
test('should throw error for invalid login', async ({ page }) => {
  await login(page, 'wronguser', 'wrongpass');
  await expect(page.getByText('Invalid username or password')).toBeVisible();
});
```
 
### Testing Note Creation:
```typescript
test('should create a new note', async ({ page }) => {
  await login(page, 'testuser', 'password123');
  await page.getByTestId('create-button').click();
  await page.getByRole('textbox', { name: 'Title' }).fill('Test Note');
  await page.getByTestId('quill-editor').locator('div').fill('This is a test note');
  await page.getByRole('button', { name: 'Create Note' }).click();
  await expect(page.getByText('New Note created successfully!')).toBeVisible();
});
```
 
### Testing Note Deletion:
```typescript
test('should delete a note', async ({ page }) => {
  await login(page, 'testuser', 'password123');
  await page.getByTestId('delete-button').nth(2).click();
  await expect(page.getByRole('heading', { name: 'Are you sure?' })).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByText('No note has been created')).toBeVisible();
});
```
 
## Wrapping Up 🎉
Playwright is a powerful ally for modern web app testing. With its robust features, cross-browser support, and user-friendly API, it’s perfect for creating reliable, maintainable test suites. 