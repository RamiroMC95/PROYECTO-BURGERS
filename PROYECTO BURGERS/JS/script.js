alert ("Bienvenido a Hamburguesas Los Pochos, estamos listos para tomar tu pedido!")

let Nombre = prompt ("Como te llamas?")

let Direccion = prompt ("Donde enviamos tu pedido?")

let PrecioLenteja = 200
let PrecioEspinaca=250

let CantidadLenteja = prompt ("Cuantas hambuguesas de lentejas queres?")
let CantidadEspinaca = prompt ("Cuantas hambuguesas de espinacas queres?")

let TotalLenteja = CantidadLenteja * PrecioLenteja
let TotalEspinaca = CantidadEspinaca * PrecioEspinaca

let Total= TotalLenteja+TotalEspinaca

alert ("El costo total es de " +Total)