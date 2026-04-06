# Playwright + TypeScript | SauceDemo E2E Portfolio

[![Playwright Tests](https://github.com/MauricioSabajMorales/playwright-saucedemo-e2e/actions/workflows/playwright.yml/badge.svg)](https://github.com/MauricioSabajMorales/playwright-saucedemo-e2e/actions)


End-to-End (E2E) test automation project built with **Playwright + TypeScript**, designed to validate critical user flows in the practice app **SauceDemo** (https://www.saucedemo.com/).

It covers **login, cart, and checkout scenarios**, using **Page Object Model (POM)**, reusable **fixtures**, and structured test design.

---

## 👨‍💻 About Me

QA Engineer with 3+ years of experience in software testing, including strong expertise in accessibility testing, especially on mobile platforms.

My background includes functional, exploratory, and accessibility validation, ensuring inclusive user experiences across devices.

Currently expanding into Automation Engineering with focus on:

- Playwright + TypeScript test automation  
- CI/CD integration with GitHub Actions and GitHub Pages
- API testing  
- AI Model Testing (in training)  

My goal is to grow into a QA Automation / SDET role while combining automation, accessibility expertise, and modern testing practices.

---

## ✅ What This Project Validates

### Login
- Successful login **(@smoke)**
- Locked-out user displays error message **(@regression)**
- Incorrect password displays error message **(@regression)**

### Cart
- Add item **(@regression)**
- View cart + item validation **(@regression)**
- Remove item **(@regression)**

### Checkout
- Step One: complete user information **(@regression)**
- Step One: negative validation (empty form) **(@regression)**
- Step Two: review and complete purchase **(@regression)**

---

## 🧰 Tech Stack
- **Playwright**
- **TypeScript**
- **POM (Page Object Model):** Each page is abstracted into dedicated classes inside `/pages` (e.g., `LoginPage`, `InventoryPage`, `CartPage`, `CheckoutPage`) to improve maintainability and readability.
- **Custom fixtures** (`base.extend`) for reusable context
- **Helpers** for navigation and scenario setup

---

## 🚀 How to Run the Project (Quick Start)

### Prerequisites
- Node.js 18+ (20 recommended)
- npm

### Installation
```bash
npm ci
npx playwright install
```

---

## 📊 HTML Report (Sample Execution)

The HTML report shown below is generated automatically by Playwright after test execution.  
It is **not part of the Page Object Model architecture**, but a built-in reporting feature used to visualize execution results.

Example of a full execution across 3 browsers (Chromium, Firefox, and WebKit):

![Playwright HTML Report](./assets/playwright-html-report.png)

---

## 🔄 CI/CD

### Continuous Integration (CI)
This project uses **GitHub Actions** to automatically run Playwright tests on every:

- push to `main`
- pull request to `main`

The CI pipeline installs dependencies and browsers, runs the full Playwright suite, and uploads the HTML report as an artifact.

### Continuous Delivery (CD)
This project also includes a separate **manual CD workflow** that runs the Playwright test suite and generates the HTML report as a deliverable artifact.

This represents a controlled delivery process, where validated test results are packaged and made available for review.

### 🌐 Live Test Report

The latest Playwright execution report is publicly available through **GitHub Pages**:

👉 https://mauriciosabajmorales.github.io/playwright-saucedemo-e2e/

---

## 💡 Key Takeaways

- Designed a maintainable test architecture using POM and fixtures  
- Implemented CI pipelines with GitHub Actions  
- Added a manual CD workflow for controlled test result delivery  
- Published automated test reports using GitHub Pages  

---

## 🧱 Repository Structure

```text
/tests        # specs
/pages        # Page Objects (POM)
/fixtures     # custom fixtures (test extension)
/utils        # helpers (navigation/setup)
/data         # test data (users.json)
playwright.config.ts
```