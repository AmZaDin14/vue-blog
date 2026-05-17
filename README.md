# Vue Blog

A minimal blog application built with Vue 3, TypeScript, and Pinia — demonstrating modern frontend patterns with the Composition API, state management, and routing.

## Features

- Vue 3 Composition API (`<script setup>`)
- TypeScript throughout
- Pinia store for state management
- Vue Router for client-side navigation
- Vite for fast development and builds

## Quick Start

```bash
# Install dependencies
bun install    # or npm install

# Start dev server
bun dev        # or npm run dev

# Build for production
bun run build  # or npm run build
```

## Project Structure

```
├── src/
│   ├── App.vue           # Root component
│   ├── main.ts           # App entry point
│   ├── router/           # Vue Router config
│   ├── stores/           # Pinia state stores
│   ├── types/            # TypeScript type definitions
│   └── views/            # Page components
├── public/               # Static assets
├── index.html            # HTML entry point
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json
```

## Tech Stack

- **Vue 3** — Composition API + `<script setup>`
- **TypeScript** — full type safety
- **Pinia** — state management
- **Vue Router** — client-side routing
- **Vite** — dev server + build tool
- **ESLint** — code linting

## Requirements

- Node.js 18+
- Bun (or npm/pnpm/yarn)
