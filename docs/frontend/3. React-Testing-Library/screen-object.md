---
title: Understanding the screen  Object in React Testing  
description: Understanding the screen object.
displayed-sidebar : frontend
sidebar_position: 4
slug: /frontend/react-testing-library/screen Object
authors: [tanishq]
---



When testing React components, we often need to find and interact with elements in the rendered output. The `screen` object from `@testing-library/react` makes this easy by providing various methods to locate elements based on text, labels, roles, and more.  

### Some Useful `screen` Methods  

1. **`getByText`**  
   - **What it does**: Finds an element by its visible text.  
   - **Why use it**: Ideal for locating buttons, headings, or any other text-based elements.  
   - **Example**: `screen.getByText('Submit')`  

2. **`getByRole`**  
   - **What it does**: Finds an element based on its ARIA role.  
   - **Why use it**: Helps locate elements in an accessible way, such as buttons, checkboxes, or headings.  
   - **Example**: `screen.getByRole('button', { name: /submit/i })`  

3. **`getByLabelText`**  
   - **What it does**: Finds an input field using its associated label.  
   - **Why use it**: Ensures form elements are correctly linked with their labels.  
   - **Example**: `screen.getByLabelText('Email Address')`  

4. **`getByPlaceholderText`**  
   - **What it does**: Finds an input field by its placeholder text.  
   - **Why use it**: Helpful when a field doesn’t have a visible label.  
   - **Example**: `screen.getByPlaceholderText('Enter your email')`  

5. **`getByAltText`**  
   - **What it does**: Finds an image by its alternative text (`alt` attribute).  
   - **Why use it**: Ensures images have meaningful descriptions for accessibility.  
   - **Example**: `screen.getByAltText('Company logo')`  

6. **`getByTestId`**  
   - **What it does**: Finds an element using a custom `data-testid` attribute.  
   - **Why use it**: Useful when no other selectors (like text or roles) work reliably.  
   - **Example**: `screen.getByTestId('custom-button')`  

7. **`getByTitle`**  
   - **What it does**: Finds an element based on its `title` attribute.  
   - **Why use it**: Useful for tooltips or extra descriptive elements.  
   - **Example**: `screen.getByTitle('More info')`  

8. **`getByDisplayValue`**  
   - **What it does**: Finds an input element by its current value.  
   - **Why use it**: Useful when verifying form inputs with pre-filled values.  
   - **Example**: `screen.getByDisplayValue('john@example.com')`  

9. **`queryByText`**  
   - **What it does**: Similar to `getByText`, but returns `null` instead of throwing an error if the element is missing.  
   - **Why use it**: Good for checking if an element is NOT present in the DOM.  
   - **Example**: `screen.queryByText('Error message')`  

10. **`findByText`**  
   - **What it does**: Waits for an element to appear asynchronously.  
   - **Why use it**: Useful for elements that appear after a delay, such as loading messages.  
   - **Example**: `await screen.findByText('Welcome back!')`  

### What is `data-testid` and When to Use It?  

The `data-testid` attribute is a way to mark elements specifically for testing. It’s helpful when no other selectors (like text, role, or label) can be reliably used.  

✅ **When to use it:**  
- When there are no unique text or role-based identifiers.  
- When testing dynamic components where other attributes change.  

🚫 **When to avoid it:**  
- If a more semantic query (`getByRole`, `getByLabelText`) can be used instead.  
- If overused, it can make tests too dependent on implementation details.  
