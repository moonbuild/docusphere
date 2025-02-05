---
title: "Matchers in React Testing  "
description: "Learn how to use custom matchers like `toBeInTheDocument` from @testing-library/jest-dom to improve your Jest and Vitest tests."
displayed-sidebar : frontend
sidebar_position: 5
slug: /frontend/react-testing-library/matcher-jest-dom
authors: [tanishq]
---


When testing React components, it’s crucial to have expressive assertions that make tests more readable and maintainable. The `@testing-library/jest-dom` library extends Jest and Vitest with custom matchers specifically designed for DOM testing. One such matcher is `toBeInTheDocument`, which verifies if an element is present in the rendered output.

## `toBeInTheDocument` Matcher

### Purpose
The `toBeInTheDocument` matcher checks whether a given element exists in the DOM. It is useful for ensuring that a component has been rendered properly.

### Usage
```javascript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'; // Extends Jest/Vitest with custom matchers
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders a specific element', () => {
    render(<MyComponent />);
    const element = screen.getByText('Hello, World!');
    expect(element).toBeInTheDocument();
  });
});
```

## How `toBeInTheDocument` Works

- **Relies on `jsdom`**: Jest and Vitest use `jsdom` to simulate a browser environment in Node.js, making DOM-related assertions possible.
- **Part of `@testing-library/jest-dom`**: This library provides a set of matchers that enhance Jest/Vitest, making tests more expressive and readable.

## Other Useful Matchers from `@testing-library/jest-dom`

### 1. `toHaveTextContent`
**Purpose**: Checks if an element contains specific text content.
```javascript
expect(element).toHaveTextContent('Hello, World!');
```

### 2. `toContainHTML`
**Purpose**: Checks if an element contains specific HTML.
```javascript
expect(element).toContainHTML('<span>Hello</span>');
```

### 3. `toHaveClass`
**Purpose**: Verifies if an element has a specific CSS class.
```javascript
expect(element).toHaveClass('active');
```

### 4. `toHaveAttribute`
**Purpose**: Ensures an element has a given attribute with a specific value.
```javascript
expect(element).toHaveAttribute('data-testid', 'custom-element');
```

### 5. `toHaveStyle`
**Purpose**: Checks if an element has a specific inline style.
```javascript
expect(element).toHaveStyle('color: red');
```

### 6. `toHaveFocus`
**Purpose**: Verifies if an element is currently focused.
```javascript
expect(input).toHaveFocus();
```

### 7. `toBeVisible`
**Purpose**: Checks if an element is visible in the DOM.
```javascript
expect(element).toBeVisible();
```

### 8. `toBeEmptyDOMElement`
**Purpose**: Ensures an element has no child elements.
```javascript
expect(element).toBeEmptyDOMElement();
```

### 9. `toBeDisabled`
**Purpose**: Verifies if a form element is disabled.
```javascript
expect(button).toBeDisabled();
```

### 10. `toBeRequired`
**Purpose**: Checks if an input field is marked as required.
```javascript
expect(input).toBeRequired();
```

## Conclusion

Using these matchers makes testing React components with Jest and Vitest more intuitive. They provide a readable and expressive way to assert the presence, visibility, and attributes of elements in the DOM. 

