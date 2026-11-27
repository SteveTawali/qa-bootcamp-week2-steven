# QA Bootcamp Week 2 – Playwright Test Suite

This repository contains my Week 2 QA bootcamp exercises using TypeScript and Playwright.

The project includes UI tests, Page Object Model testing, and API testing against the Toolshop application.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/)

## Setup and Running Tests

Clone the repository:

```bash
git clone https://github.com/SteveTawali/qa-bootcamp-week2-steven.git
cd qa-bootcamp-week2-starter
```

Complete these three steps:

**1. Install dependencies and Chromium**

```bash
npm install
npx playwright install chromium
```

**2. Configure environment variables**

```bash
cp .env.example .env
```

**3. Run the test suite**

```bash
npm test
```

## Test Coverage

The Playwright suite currently includes:

- Login validation
- Homepage verification
- Product search
- Product search using the Page Object Model
- API product retrieval
- Cart creation and product addition
- Non-existent cart validation (404)

## Project Structure

| Folder/File | Purpose |
|---|---|
| `tests/` | Playwright UI and API tests |
| `pages/` | Page Object Model classes |
| `scripts/` | Helper scripts |
| `playwright.config.ts` | Playwright configuration |
| `.env.example` | Example environment configuration |

## Available Commands

```bash
npm test          # Run all Playwright tests
npm run check     # Check project and API setup
npx playwright test --list  # List discovered tests
```

### Optional Cucumber Task

The optional Cucumber.js scenario was not completed. The Wednesday `features/cart.feature` file is retained as a feature specification, but it is not connected to step definitions or configured to run.

**Note:** Never commit your `.env` file. It may contain personal settings or sensitive information. The file is excluded through `.gitignore`.