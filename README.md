# ClinicPesa

## 🌐 Live Demo

The application is deployed and available at: **[https://clinic-pesa.vercel.app/](https://clinic-pesa.vercel.app/)**

## How to run the application

### Prerequisites

- Node.js (version 20.19+ or 22.12+ recommended)
- npm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clinicPesa
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed.

## Technologies

This project is built with the following technologies:

### Core Framework
- **React** ^19.2.0 - A JavaScript library for building user interfaces
- **React DOM** ^19.2.0 - React renderer for web browsers

### Build Tools
- **Vite** ^7.2.2 - Next generation frontend tooling
- **@vitejs/plugin-react** ^5.1.0 - Official React plugin for Vite

### Styling
- **Tailwind CSS** ^4.1.17 - Utility-first CSS framework
- **PostCSS** ^8.5.6 - CSS post-processor
- **Autoprefixer** ^10.4.22 - PostCSS plugin to parse CSS and add vendor prefixes

### Icons
- **Ionicons** ^8.0.13 - Beautiful, open source icon library (used for: wallet, paper-plane, check-circle, users, eye)
- **Custom Icons** - Custom-built SVG icons for specific use cases (arrow-left, close, eye-off, document-dollar, hand-dollar)

### Language & Type Safety
- **TypeScript** ~5.9.3 - Typed superset of JavaScript

### Code Quality
- **ESLint** ^9.39.1 - JavaScript and TypeScript linter
- **TypeScript ESLint** ^8.46.3 - TypeScript-specific ESLint rules
- **ESLint Plugin React Hooks** ^7.0.1 - React Hooks linting rules
- **ESLint Plugin React Refresh** ^0.4.24 - React Fast Refresh linting rules

### Development Dependencies
- **@types/node** ^24.10.0 - TypeScript definitions for Node.js
- **@types/react** ^19.2.2 - TypeScript definitions for React
- **@types/react-dom** ^19.2.2 - TypeScript definitions for React DOM
