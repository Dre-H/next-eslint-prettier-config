# ESLint & Prettier Configuration for Next.js

A modern, production-ready ESLint and Prettier configuration template for Next.js projects with TypeScript, React, and Tailwind CSS support.

## Features

- ✅ **ESLint v9** with flat config
- ✅ **TypeScript** support with `@typescript-eslint`
- ✅ **Next.js** integration with `eslint-config-next`
- ✅ **Prettier** integration with conflict resolution
- ✅ **Import sorting** with `eslint-plugin-import`
- ✅ **Tailwind CSS** class sorting with `prettier-plugin-tailwindcss`
- ✅ **Modern flat config** (replaces legacy `.eslintrc`)

## Quick Start

### 1. Install Dependencies

For a plain Next.js project, install these packages:

```bash
# Core ESLint packages
npm install --save-dev eslint @eslint/js @eslint/eslintrc

# TypeScript ESLint support
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Next.js and React ESLint configs
npm install --save-dev eslint-config-next eslint-config-prettier

# Import sorting
npm install --save-dev eslint-plugin-import

# Prettier with Tailwind support
npm install --save-dev prettier prettier-plugin-tailwindcss
```

### 2. Create ESLint Configuration

Create `eslint.config.mjs` in your project root:

```javascript
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  {
    ignores: [
      "components/ui/**/*",
      ".next/**/*",
      "node_modules/**/*",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@app/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "comma-dangle": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off",
    },
  },
];

export default eslintConfig;
```

### 3. Create Prettier Configuration

Create `.prettierrc` in your project root:

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.js",
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

### 4. Update Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

### 5. VS Code Integration (Optional)

Create `.vscode/settings.json` for automatic formatting:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.addMissingImports": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Usage

```bash
# Check for linting issues
npm run lint

# Fix auto-fixable linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Check if code is properly formatted
npm run format:check
```

## What This Configuration Provides

- **Modern ESLint v9** with flat config (future-proof)
- **TypeScript linting** with proper type checking
- **Next.js best practices** enforcement
- **Import statement organization** with automatic sorting
- **Prettier integration** without conflicts
- **Tailwind CSS class sorting** for consistent styling
- **VS Code integration** for seamless development experience

## Compatibility

- ✅ Next.js 13+ (App Router)
- ✅ TypeScript 5+
- ✅ React 18+
- ✅ Tailwind CSS 3+ & 4+
- ✅ ESLint 9+
- ✅ Prettier 3+

## License

MIT
