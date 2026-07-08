// Buscamos en el HTML el div que tiene la clase container
const container = document.querySelector("div.container")

// Esta función recibe un producto y devuelve el HTML de su card
const retornarCardHTML = (producto) => {
    return `
        <div class="card">
            <div class="card-image">${producto.imagen}</div>
            <div class="card-name">${producto.nombre}</div>
            <div class="card-price">${producto.precio}</div>
            <div class="card-button">
                <button 
                class="button button-outline button-add" 
                id="${producto.id}"
                title="Agregar al carrito">
                +
                </button>
            </div>
        </div>
    `
}

// Esta función activa el click en los botones de agregar al carrito
const activarClickEnBotones = () => {
    // Buscamos todos los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll("button.button-outline.button-add")
    // Si encontramos botones, les agregamos un evento click
    if(botonesAgregar !== null){
        // Recorremos cada botón y le agregamos un evento click
        botonesAgregar.forEach((button) => {
            // Cuando se hace click en el botón
            button.addEventListener("click", (e) => {
                // Llamamos a la función agregarAlCarrito con el id del producto
                agregarAlCarrito(e.target.id)
            })
        })
    }
}

// Esta función recibe un array de productos y los muestra en pantalla
const cargarProductos = (array) => {
    // Primero vaciamos el contenedor
    container.innerHTML = ""
    // Recorremos cada producto del array
    array.forEach(producto => {
        // Por cada producto generamos una card y la agregamos al contenedor
        container.innerHTML += retornarCardHTML(producto)
    });
    // Activamos el click en los botones de agregar al carrito
    activarClickEnBotones()
}

// Ejecutamos la función usando el array productos
cargarProductos(productos);