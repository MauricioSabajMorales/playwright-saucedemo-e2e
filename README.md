# Playwright + TypeScript | SauceDemo E2E Portfolio

Proyecto de automatización E2E con **Playwright + TypeScript** usando la app de práctica **SauceDemo**.  
Incluye pruebas de login, carrito y checkout con **Page Object Model (POM)**, **fixtures** y **helpers** para reutilización y mantenibilidad.

## 🧪 Cobertura
- **Login**
  - Login exitoso (@smoke)
  - Usuario bloqueado muestra error (@regression)
  - Password incorrecta muestra error (@regression)
- **Cart**
  - Add item (@regression)
  - View cart y validación de ítem (@regression)
  - Remove item (@regression)
- **Checkout**
  - Step One: completar datos (@regression)
  - Step One: validación negativa (form vacío) (@regression)
  - Step Two: review y finalizar compra (@regression)

## 🧱 Estructura del repo

```text
/tests        # specs
/pages        # Page Objects (POM)
/fixtures     # custom fixtures (test extension)
/utils        # helpers (navegación/preparación)
/data         # test data (users.json)
playwright.config.ts
```