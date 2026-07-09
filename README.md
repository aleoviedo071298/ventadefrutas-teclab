# Ventadefrutas.com — E-Commerce Frontend

> Fruit store built class by class as the base project for the Interfaz de Desarrollo course at Teclab.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## About

A client-side fruit store that grows incrementally across classes — starting from a hardcoded array, progressing to localStorage cart persistence, and building toward a fully dynamic checkout. Designed as the practical reference project for the **Interfaz de Desarrollo** course at Teclab (2026).

## Features

- **Product catalog** — 16 fruit products rendered dynamically from a JS array.
- **Add to cart** — each card has a `+` button that pushes the item into the cart.
- **localStorage persistence** — cart is saved and recovered across page loads.
- **Checkout page** — cart table rendered dynamically; SweetAlert2 confirmation modal.
- **Responsive layout** — works on mobile and desktop.

## Project Structure

```
ventadefrutas-teclab/
├── index.html        Product catalog page
├── checkout.html     Cart & checkout page
├── css/
│   └── style.css     Custom styles
├── js/
│   ├── productos.js  Product data array (16 fruits)
│   ├── index.js      DOM rendering & add-to-cart click handlers
│   ├── carrito.js    Cart logic + localStorage persistence
│   └── checkout.js   Checkout rendering (in progress)
└── images/
    └── icon-fruits-*.png   Favicon (64 / 192 / 512px)
```

## Setup

No build step required — open `index.html` in any modern browser.

```bash
# Optional local server
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000`.

---

**Alejandro Oviedo** · [LinkedIn](https://www.linkedin.com/in/aleoviedo071298/) · [GitHub](https://github.com/aleoviedo071298)
