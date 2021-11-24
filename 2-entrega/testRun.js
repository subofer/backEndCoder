const Contenedor = require('./contenedor')

let productos = [{
    title: "Peras",
    precio: 50,
    tumbnail: "imagen1"
},{
    title: "banana",
    precio: 123,
    tumbnail: "imagen2"
},{
    title: "manzana",
    precio: 34,
    tumbnail: "imagen2"
},{
    title: "naranja",
    precio: 65,
    tumbnail: "imagen4"
},

]

let productosText = new Contenedor("productos3.txt", productos, true)

console.log(productosText.getById(2))

console.log(productosText.getAll())

productosText.deletById(2)

console.log(productosText.getAll())

productosText.seeFile()
