// Seleccionamos el tbody de la tabla
const tbody = document.querySelector("tbody");

// Seleccionamos el boton de comprar
const btnComprar = document.querySelector("button#btnComprar");

// Función para retornar el HTML de una fila de la tabla
const retornarTablaHTML = (producto) => {
    return `
        <tr>
            <td id="tablehead">${producto.imagen}</td>
            <td id="tablehead">${producto.nombre}</td>
            <td id="tablehead">$${producto.precio}</td>
            <td id="tablehead">Quitar</td>
        </tr>
    `;
}

// Función para cargar el carrito en la tabla
const cargarCarrito = (array) => {
    if (carritoFrutas.length > 0) {
        // Limpiamos el tbody antes de agregar los productos
        tbody.innerHTML = "";
        // Iteramos sobre el array de productos y agregamos cada producto al tbody
        carritoFrutas.forEach((producto) => {
            tbody.innerHTML += retornarTablaHTML(producto);
        });
    }
}

// Cargamos el carrito al cargar la página
cargarCarrito(carritoFrutas);

// Elementos con eventos
btnComprar.addEventListener("click", () => {
    // Lógica para procesar la compra
    alert("Muchas gracias por su compra. Su pedido ha sido procesado correctamente.");
    localStorage.removeItem("carritoFrutas");
    tbody.innerHTML = "";
});