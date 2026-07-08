// Array para almacenar los productos agregados al carrito
const carritoFrutas = []

// Función para agregar un producto al carrito
const agregarAlCarrito = (frutaId) => {
    if (frutaId > 0) {
        // Buscamos el producto en el array productos usando el id
        let productoEncontrado = productos.find((producto) => producto.id === parseInt(frutaId))
        // Si encontramos el producto, lo agregamos al carrito
        if(productoEncontrado !== undefined) {
            carritoFrutas.push(productoEncontrado)
            console.table(carritoFrutas)
        }
    }
}