# CRM Design System 🛸 A Hope AI Example Project

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Welcome to **CRM Design System**! This is a modular, reusable component library generated using [**Hope AI**](https://bit.cloud) and refined by humans. It demonstrates how to compose a modern design system from independent, reusable UI components, suitable for building scalable web applications.

This project serves as a practical guide to showcase AI-driven development, modular architecture, and rapid delivery with Hope AI.

Browse the components on the [Bit Cloud example organization](https://bit.cloud/corporate) for live previews and documentation of the design system components.

---

## ✨ Features

* **[Component Library](https://bit.cloud/corporate/design):** Browse the [design system components](https://bit.cloud/corporate/design/~components). Each is a standalone, reusable package.
* **Modular Architecture:** Components are organized by domain (actions, content, layouts, loaders, navigation, typography, theming) for easy discovery and maintenance.
* **Theming:** Easily customize the look and feel with a flexible theming system.
* **Composability:** Build complex UIs by composing simple, well-documented components.

---

## 🛠️ Tech Stack

This design system is built with a modern, component-oriented technology stack:

* **Monorepo:** [Bit](https://bit.dev) - For creating, versioning, and composing the design system packages.
* **Frontend:** [React](https://reactjs.org/) - For building interactive and reusable UI components.
* **Development:** [Vite](https://vite.dev) - For fast component development and preview.
* **Styling:** CSS Modules - For locally scoped and conflict-free component styles.
* **Code standards:** Unit tests powered by [Vitest](https://vitest.dev). Code consistency and quality enforced by [ESLint](https://eslint.org).

---

## 🚀 Getting Started

Follow these steps to get the design system running on your local machine.

### Prerequisites

Make sure you have [Bit](https://bit.dev/docs/getting-started/installing-bit/installing-bit) installed globally on your system.

### Installation & Setup

1.  **Clone the repository** (or get the source code).
2.  **Navigate into the project directory:**
    ```bash
    cd path/to/crm-design
    ```
3.  **Install dependencies** for all components in the workspace:
    ```bash
    bit install
    ```

## Developing & Previewing Components

You can develop and preview individual components in isolation using the Bit workspace. This is ideal for building, testing, and documenting design system components:

```bash
bit start
```

This command launches the Bit development server, where you can see, test, and interact with each component in isolation. It's great for development and debugging.

## Testing Components

Run unit tests for all components using:

```bash
bit test
```

## 📂 Project Structure

The directory structure is organized by component domain. This makes the codebase more modular, scalable, and easier to maintain. Key domains include:

- `actions/` – Actionable UI elements (e.g., buttons)
- `content/` – Content display components (e.g., badge, card)
- `layouts/` – Layout primitives (e.g., flex, page-layout)
- `loaders/` – Loading indicators (e.g., spinner)
- `my-crm-theme/` – Theming and design tokens
- `navigation/` – Navigation components (e.g., link, tabs)
- `typography/` – Text and heading components

Each component is self-contained with its own source, styles, documentation, tests, and compositions for easy reuse and discovery.
