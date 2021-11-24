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

//let productosText = new Contenedor("productos3.txt", productos, true)


let productosText = new Contenedor("productos3.txt")
/*
productosText.saveAndWrite({
    title: "naranja",
    precio: 65,
    tumbnail: "imagen4"
})

productosText.saveAndWrite({
    title: "manzana",
    precio: 34,
    tumbnail: "imagen2"
})
*/

productosText.getFile().then( () => console.log("FileList",productosText.getAll()))



//productosText.seeFile()
