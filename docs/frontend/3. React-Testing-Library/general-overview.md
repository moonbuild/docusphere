---
title: General Overview
description: A guide to using @testing-library/react, @testing-library/user-event, and @testing-library/jest-dom with Vitest in a Vite + TypeScript project.
displayed-sidebar : frontend
sidebar_position: 1
slug: /frontend/react-testing-library
authors: [tanishq]
---



# Overview of Testing Library in a Vite + TypeScript Project

Testing Library provides utilities to test React components in a way that mimics user interactions. This guide covers three essential libraries:

- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) – For rendering and querying React components.
- [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro/) – For simulating user interactions.
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) – Provides additional matchers for testing DOM elements.

## Installation

To set up Testing Library with Vitest in a Vite + TypeScript project, install the required dependencies:

```sh
npm install --save-dev vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

Or, if using Yarn:

```sh
yarn add --dev vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

## Configuration

### 1. Update `vite.config.ts`
Ensure that Vitest is properly configured by adding the following:

```ts title="vite.config.ts"
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.ts',
    exclude: [...configDefaults.exclude],
  },
});
```

### 2. Create `setupTests.ts`
To enable `@testing-library/jest-dom` matchers globally, create a `setupTests.ts` file inside the `src/test/` directory:

```ts title="src/test/setupTest.ts"
import '@testing-library/jest-dom';
```

## Writing Tests

### 1. Using `@testing-library/react`
Example test for a simple `Button` component:

```tsx
import { render, screen } from '@testing-library/react';
import Button from './Button';

it('renders a button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### 2. Using `@testing-library/user-event`
Simulating user interactions such as clicks and typing:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

it('increments counter on button click', async () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  await userEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

## Running Tests

To execute tests, use the following command:

```sh
npm run test
```

Or with Yarn:

```sh
yarn test
```

## Summary

- `@testing-library/react` is used for rendering and querying components.
- `@testing-library/user-event` helps simulate user interactions.
- `@testing-library/jest-dom` provides additional matchers for asserting on DOM elements.
- Tests can be run using Vitest with the `jsdom` environment.

For more details, refer to the [official Testing Library documentation](https://testing-library.com/docs/).

