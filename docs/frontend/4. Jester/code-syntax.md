---
title: Syntax and functions
displayed-sidebar : frontend
sidebar_position: 3

---
# Jest Syntax for Testing TypeScript  

## General Syntax  
Jest tests in TypeScript typically follow this structure:  

```ts
// Import the function/module to be tested
import { functionToTest } from "./module";

// Define a test suite using `describe`
describe("Test Suite Name", () => {
    
    // Define individual test cases using `test` or `it`
    test("should return expected output", () => {
        
        // Arrange: Set up the input and expected output
        const input = 5;
        const expectedOutput = 25;

        // Act: Call the function
        const result = functionToTest(input);

        // Assert: Check if the output matches expectation
        expect(result).toBe(expectedOutput);
    });
});
```

## Alternative Syntax  
In the alternative syntax, you can directly assign the function to a `const` and then use it when testing the function. You can pass the arguments of the function along with the `const`.

```ts
// Import the function/module to be tested
import { functionToTest } from "./module";

// Define a test suite using `describe`
describe("Test Suite Name", () => {
    
    // Define individual test cases using `test` or `it`
    test("should return expected output", () => {
        
        // Arrange: Set up the const's
        const x = functionToTest;
        const y = x('Argument 1'.'Arguement-2',.....);
        
        // Test if the function performs properly
        expect(y).toBe(expectedOutput);
    });
});
```

---

## Example Usage

```typescript
describe('Jest Test Methods', () => {
  test.todo('should implement this test later');

  test.skip('this test is temporarily skipped', () => {
    expect(2 + 2).toBe(4);
  });

  test.only('this is the only test that runs', () => {
    expect(3 + 3).toBe(6);
  });
});
```
---

# Functions in Jester


### 1️⃣ Matchers for Primitive Data Types (Numbers, Strings, Booleans, etc.)

| Matcher                           | Definition |
|-----------------------------------|------------|
| `toBe(value)`                     | Strict equality comparison (like `===`). |
| `toEqual(value)`                  | Deep equality check (also works for objects/arrays). |
| `toBeTruthy()`                    | Passes if the value is truthy. |
| `toBeFalsy()`                     | Passes if the value is falsy. |
| `toBeNull()`                      | Passes if the value is `null`. |
| `toBeUndefined()`                 | Passes if the value is `undefined`. |
| `toBeDefined()`                   | Passes if the value is **not** `undefined`. |
| `toBeNaN()`                       | Passes if the value is `NaN`. |
| `toMatch(regex)`                   | Checks if a string matches a regex pattern. |
| `toContain(string)`                | Checks if a string contains a substring. |
| `toHaveLength(number)`             | Checks if a string/array has a specific length. |
| `toBeGreaterThan(num)`             | Checks if a number is greater than the given value. |
| `toBeGreaterThanOrEqual(num)`      | Checks if a number is greater than or equal to the given value. |
| `toBeLessThan(num)`                | Checks if a number is less than the given value. |
| `toBeLessThanOrEqual(num)`         | Checks if a number is less than or equal to the given value. |
| `toBeCloseTo(num, precision?)`     | Compares floating-point numbers within a precision. |

---

### 2️⃣ Matchers for Non-Primitive Data Types (Objects, Arrays, Functions, etc.)

| Matcher                           | Definition |
|-----------------------------------|------------|
| `toEqual(value)`                   | Deep equality check for objects/arrays. |
| `toStrictEqual(value)`              | Like `toEqual()`, but also checks object types. |
| `toContain(item)`                   | Checks if an array contains a specific element. |
| `toContainEqual(object)`            | Checks if an array contains an object that deeply equals the given object. |
| `toHaveProperty(key, value?)`       | Checks if an object has a specific property (optional value check). |
| `toBeInstanceOf(Class)`             | Checks if an object is an instance of a class. |

---

### 3️⃣ Matchers for Functions & Asynchronous Code

| Matcher                           | Definition |
|-----------------------------------|------------|
| `toThrow(error?)`                  | Expects a function to throw an error. |
| `toThrowErrorMatchingSnapshot()`   | Expects a function to throw an error and match a stored snapshot. |
| `resolves.toBe(value)`              | For promises, checks if resolved value matches expected. |
| `resolves.toEqual(value)`           | For promises, checks deep equality of resolved value. |
| `rejects.toThrow(error?)`           | For promises, checks if rejected with an error. |

---

### 4️⃣ Utility Matchers

| Matcher                           | Definition |
|-----------------------------------|------------|
| `expect.any(Class)`                | Passes if value is **any instance** of the given class. |
| `expect.anything()`                 | Passes if value is **not `null` or `undefined`**. |
| `expect.arrayContaining(array)`     | Checks if an array contains a subset of elements. |
| `expect.objectContaining(object)`   | Checks if an object contains the given properties. |


## Other Functions:
### Jest `.todo()`, `.skip()`, and `.only()`

- **`.todo()`**: Marks a test as a placeholder for future implementation.  
- **`.skip()`**: Skips a test so it won't run.  
- **`.only()`**: Runs only the specified test, ignoring others.  

## Getting Elements in Jest Tests

In Jest tests (using React Testing Library), we retrieve elements using various `getBy` functions. These functions help in querying the DOM to ensure the component renders correctly.

### List of `getBy` Functions

| Function                 | Description |
|--------------------------|-------------|
| `getByText`             | Selects an element by its visible text. |
| `getByRole`             | Finds an element by its ARIA role. |
| `getByLabelText`        | Selects an element by its associated label text. |
| `getByPlaceholderText`  | Finds an input field by its placeholder text. |
| `getByAltText`          | Selects an element by its `alt` attribute (commonly for images). |
| `getByDisplayValue`     | Finds an input element by its current value. |
| `getByTestId`          | Finds an element by a custom `data-testid` attribute. |

### Example 1: Testing a Button with `getByText`

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyComponent from "./MyComponent";

test("renders button and clicks it", async () => {
  // Render the component inside the virtual DOM
  render(<MyComponent />);
  
  // Find the button element by its text content ("Click Me")
  const button = screen.getByText("Click Me");

  // Simulate a user clicking the button
  await userEvent.click(button);
  
  // Assert that after clicking, the button's text changes to "Clicked!"
  expect(button).toHaveTextContent("Clicked!");
});
```
### Example 2: Testing a Button with `getByPlaceholderText`
```tsx
import { render, screen } from "@testing-library/react";

test("renders input with placeholder", () => {
  // Render an input element with a placeholder text
  render(<input placeholder="Enter name" />);
  
  // Find the input element using its placeholder text
  const input = screen.getByPlaceholderText("Enter name");

  // Assert that the input element is present in the document
  expect(input).toBeInTheDocument();
});

```

These getBy functions help in selecting elements efficiently for testing in Jest with React Testing Library.


## Using `getAllBy` Functions in Jest Tests

The `getAllBy` functions in React Testing Library are used to select **multiple elements** that match a given query. Unlike `getBy`, which returns only one element, `getAllBy` returns an **array** of matching elements.

### List of `getAllBy` Functions

| Function                 | Description |
|--------------------------|-------------|
| `getAllByText`          | Selects all elements that match the given text. |
| `getAllByRole`          | Finds all elements that match a given ARIA role. |
| `getAllByLabelText`     | Selects all elements associated with a label. |
| `getAllByPlaceholderText` | Finds all input fields with a matching placeholder. |
| `getAllByAltText`       | Selects all elements that match the given `alt` attribute. |
| `getAllByDisplayValue`  | Finds all input elements that match a given value. |
| `getAllByTestId`        | Finds all elements with a custom `data-testid` attribute. |

### Example 1: Testing Multiple List Items with `getAllByText`

```tsx
import { render, screen } from "@testing-library/react";

test("renders multiple list items", () => {
  // Render a list of items
  render(
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );

  // Get all list items that contain "Item"
  const items = screen.getAllByText(/Item/);

  // Assert that there are exactly 3 matching elements
  expect(items.length).toBe(3);
});
```
### Example 2: Testing Multiple Buttons with `getAllByRole`
```tsx
import { render, screen } from "@testing-library/react";

test("renders multiple buttons", () => {
  // Render multiple buttons inside a div
  render(
    <div>
      <button>Save</button>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  );

  // Get all buttons by their role
  const buttons = screen.getAllByRole("button");

  // Assert that exactly 3 buttons are found
  expect(buttons.length).toBe(3);

  // Assert that the first button has the text "Save"
  expect(buttons[0]).toHaveTextContent("Save");
});
```