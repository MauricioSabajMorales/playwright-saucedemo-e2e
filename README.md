# Playwright + TypeScript | SauceDemo E2E Portfolio

[![Playwright Tests](https://github.com/MauricioSabajMorales/playwright-saucedemo-e2e/actions/workflows/playwright.yml/badge.svg)](https://github.com/MauricioSabajMorales/playwright-saucedemo-e2e/actions)


Proyecto de automatización **End-to-End (E2E)** con **Playwright + TypeScript** sobre la app de práctica **SauceDemo**.  
Incluye escenarios de **login, carrito y checkout** aplicando **Page Object Model (POM)** y reutilización mediante **custom fixtures** y **helpers**.

---

## 👨‍💻 About Me

QA Engineer with 3+ years of experience in software testing, including strong expertise in accessibility testing, especially on mobile platforms.

My background includes functional, exploratory, and accessibility validation, ensuring inclusive user experiences across devices.

Currently expanding into Automation Engineering with focus on:
- Playwright + TypeScript test automation
- CI/CD integration with GitHub Actions
- API testing
- AI Model Testing (in training)

My goal is to grow into a QA Automation / SDET role while combining automation, accessibility expertise, and modern testing practices.

---

## ✅ Qué valida este proyecto

### Login
- Login exitoso **(@smoke)**
- Usuario bloqueado muestra error **(@regression)**
- Password incorrecta muestra error **(@regression)**

### Cart
- Add item **(@regression)**
- View cart + validación de ítem **(@regression)**
- Remove item **(@regression)**

### Checkout
- Step One: completar datos **(@regression)**
- Step One: validación negativa (form vacío) **(@regression)**
- Step Two: review y finalizar compra **(@regression)**

---

## 🧰 Tech Stack
- **Playwright**
- **TypeScript**
- Patrón **POM (Page Object Model)**
- **Custom fixtures** (`base.extend`) para contexto reutilizable
- **Helpers** para navegación/preparación de escenarios

---

## 🚀 Cómo correr el proyecto (Quick Start)

### Prerrequisitos
- Node.js 18+ (recomendado 20)
- npm

### Instalación
```bash
npm ci
npx playwright install

---

## 🤖 Continuous Integration

Este proyecto incluye **GitHub Actions** para ejecutar automáticamente los tests en cada push a `main`.

- Ejecuta tests en entorno Linux
- Instala Playwright y browsers
- Corre suite completa
- Falla el pipeline si algún test falla

Esto simula un entorno real de integración continua (CI).

---

## 📊 HTML Report (Sample Execution)

Ejemplo de ejecución completa en 3 navegadores (Chromium, Firefox y WebKit):

![Playwright HTML Report](./assets/playwright-html-report.png)

---

## 🧱 Estructura del repo

```text
/tests        # specs
/pages        # Page Objects (POM)
/fixtures     # custom fixtures (test extension)
/utils        # helpers (navegación/preparación)
/data         # test data (users.json)
playwright.config.ts
```