# Playwright + TypeScript | SauceDemo E2E Portfolio

![Playwright Tests](https://github.com/MauricioSabajMorales/playwright-saucedemo-e2e/actions/workflows/playwright.yml/badge.svg)


Proyecto de automatización **End-to-End (E2E)** con **Playwright + TypeScript** sobre la app de práctica **SauceDemo**.  
Incluye escenarios de **login, carrito y checkout** aplicando **Page Object Model (POM)** y reutilización mediante **custom fixtures** y **helpers**.

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

## 🤖 Continuous Integration

Este proyecto incluye **GitHub Actions** para ejecutar automáticamente los tests en cada push a `main`.

- Ejecuta tests en entorno Linux
- Instala Playwright y browsers
- Corre suite completa
- Falla el pipeline si algún test falla

Esto simula un entorno real de integración continua (CI).

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