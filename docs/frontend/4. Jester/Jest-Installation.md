---
title: Jest Installation
displayed-sidebar : frontend
sidebar_position: 2

---



# Jest Installation Guide

## Installation for TypeScript

### 1) Install Jest and TypeScript Dependencies
Run the following command:

```sh
npm i -D jest typescript ts-jest @types/jest
```
### 2) Configure jest.config.ts Manually

```typescript
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',  // Use 'jsdom' for React, 'node' for backend
  verbose: true,
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Ensure alias resolution
  }
};

export default config;
```
### 3) Install ts-node dependency
ts-node is a TypeScript execution environment for Node.js. It allows you to run TypeScript files directly without needing to compile them into JavaScript first.
Run the following command:
```sh
npm i -D ts-node
```

### 4) Update Ts-config
Ensure your tsconfig.json file contains the following options:
```json
{
  "compilerOptions": {
    "jsx": "react-jsx", // Enables JSX support
    "esModuleInterop": true, // Fix import issues
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"] // Ensure alias resolution
    }
  }
}
```

## Installation for JavaScript

### 1) Install Jest
Run the following command:
```sh
npm i --save-dev jest
```
### 2) Update package.json
Modify the scripts section in package.json to include Jest:
```json
"scripts": {
  "test": "jest"
}
```

---
 
 After writing the test, run the following command in your command line to execute the tests:
 
 ```sh
 npm test
```

> **Note:**  
> After running `npm test`, Jest will detect files with extensions like `.spec` or `.test`. For example, `your-file-name.spec.tsx` or `your-file-name.test.tsx`. Make sure you have written all the test cases in these files.
