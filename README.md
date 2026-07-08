# Ventadefrutas.com — E-Commerce Frontend

Base project for the **Interfaz de Desarrollo** course — Teclab (2026).
A fruit store built with vanilla JavaScript, developed incrementally across classes
as the practical reference for the subject.

## What it does

A client-side fruit store where users browse a 16-product catalog, add items to a
cart, and proceed to a checkout page. The cart is managed as an in-memory JavaScript
array with `console.table()` logging for learning/debugging purposes.

## Features

- **Product catalog** — 16 fruit products rendered dynamically from a JS array.
- **Add to cart** — each card has a `+` button that pushes the product into the cart
  array and logs the current cart state to the console.
- **Checkout page** — table-based cart view with SweetAlert2 for purchase confirmation
  (powered by [Milligram CSS](https://milligram.io/) for quick table styling).
- **Responsive layout** — works on mobile and desktop.

## Tech Stack

| Layer | Detail |
|---|---|
| **HTML** | Semantic HTML5 |
| **CSS** | Vanilla CSS + [Milligram](https://milligram.io/) (checkout page) |
| **JavaScript** | Vanilla ES6+ — DOM manipulation, arrow functions, array methods |
| **External libs** | SweetAlert2 v11 (checkout), Milligram 1.4 (checkout CSS) |

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
│   └── carrito.js    Cart logic (in-memory array, shared across pages)
└── images/
    ├── icon-fruits-64.png
    ├── icon-fruits-192.png
    └── icon-fruits-512.png
```

> **Note:** `checkout.js` is referenced in `checkout.html` and is under development —
> cart rendering and the "COMPRAR" button logic are implemented in upcoming classes.

## How to Run

No build step required — open `index.html` in any modern browser.

```bash
# Local server (optional — avoids cross-origin quirks)
npx serve .
# or
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

## How the Cart Works

`carrito.js` declares a shared `carritoFrutas` array and an `agregarAlCarrito(id)`
function. When a product button is clicked in `index.js`, it calls
`agregarAlCarrito(id)`, which finds the product by ID and pushes it into the array.
The cart state is printed to the browser console with `console.table()` after each
addition — open DevTools → Console to follow along.

## Author

**Alejandro Oviedo**
Interfaz de Desarrollo — Teclab — 2026
