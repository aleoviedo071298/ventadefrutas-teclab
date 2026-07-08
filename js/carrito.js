// Función para agregar un producto al carrito
const agregarAlCarrito = (frutaId) => {
    if (frutaId > 0) {
        // Buscamos el producto en el array productos usando el id
        let productoEncontrado = productos.find((producto) => producto.id === parseInt(frutaId))
        // Si encontramos el producto, lo agregamos al carrito
        if(productoEncontrado !== undefined) {
            carritoFrutas.push(productoEncontrado)
            almacenarCarrito()
        }
    }
}

// Función para almacenar el carrito en localStorage
const almacenarCarrito = () => {
    // Si el carrito tiene productos, lo almacenamos en localStorage
    carritoFrutas.length > 0 && localStorage.setItem("carritoFrutas", JSON.stringify(carritoFrutas))
}

// Función para recuperar el carrito desde localStorage
const recuperarCarrito = () => {
    return JSON.parse(localStorage.getItem("carritoFrutas")) || []
}

// Recuperamos el carrito desde localStorage al cargar la página
const carritoFrutas = recuperarCarrito()