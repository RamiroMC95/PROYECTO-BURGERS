// alert ("Bienvenido a Hamburguesas Los Pochos, estamos listos para tomar su pedido")

// let nombre = prompt ("Como te llamas?")

// let direccion = prompt ("Donde enviamos tu pedido?")

// let precioLenteja = 200
// let precioEspinaca=250

// let cantidadLenteja = prompt ("Cuantas hambuguesas de lentejas queres?")
// let cantidadEspinaca = prompt ("Cuantas hambuguesas de espinacas queres?")

// let totalLenteja = cantidadLenteja * precioLenteja
// let totalEspinaca = cantidadEspinaca * precioEspinaca

// let total= totalLenteja + totalEspinaca

// alert ("El costo total es de " +total)





// Definimos los productos disponibles
debugger
const productos = [
    {
      nombre: "Lentejas",
      precio: 100,
    },
    {
      nombre: "Espinaca",
      precio: 150,
    },
    {
      nombre: "Remolacha",
      precio: 125,
    },
  ];
  
  // definimos la función para agregar productos al carrito
  function agregarAlCarrito() {
    // Creamos el carrito vacío
    const carrito = [];
  
    // preguntamos al usuario qué productos desea agregar al carrito y cuántas unidades de cada uno
    let seguirAgregando = true;
  
    while (seguirAgregando) {
      // mostramos los productos disponibles para que el usuario elija
      console.log("Productos disponibles:");
      for (let i = 0; i < productos.length; i++) {
        console.log(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
      }
  
      // ppedimos al usuario que seleccione un producto
      const seleccion = prompt("Seleccione un producto (1-3)");
  
      // verificamos si la selección es válida
      if (seleccion >= 1 && seleccion <= 3) {
        // se pide al usuario que ingrese la cantidad de unidades que desea del producto seleccionado
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${productos[seleccion - 1].nombre} que desea agregar`));
  
    
        if (cantidad > 0) {
          // Agregamos el producto al carrito con la cantidad seleccionada
          const producto = productos[seleccion - 1];
          carrito.push({ ...producto, cantidad: cantidad });
          console.log(`Se agregaron ${cantidad} ${producto.nombre}(s) al carrito`);
        } else {
          console.log("Cantidad no válida");
        }
      } else {
        console.log("Selección no válida");
      }
  
      // se le pregunta al usuario siquiere agregar otro producto
      const respuesta = prompt("¿Desea agregar otro producto? (s/n)").toLowerCase();
      seguirAgregando = respuesta === "s";
    }
  
    // Mostramos el contenido del carrito
    console.log("Contenido del carrito:");
    for (let i = 0; i < carrito.length; i++) {
      console.log(`${carrito[i].nombre} x ${carrito[i].cantidad} = $${carrito[i].precio * carrito[i].cantidad}`);
    }
  }
  
  // Llamamos a la función para agregar productos al carrito
  agregarAlCarrito();
  