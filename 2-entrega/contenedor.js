const fs = require('fs').promises
const access = require('fs').access
const constants = require('fs').constants



class Contenedor{
    constructor(filename, priceList, saveOnCreation=false){
        this.filename = filename;
        this.lastId = 1;
        this.fileList = []
        this.file = new Archivo(this.filename)
        this.generate(priceList)
        saveOnCreation && this.write()
    }
    //
    save = (object) => this.fileList.push({id:this.getId() , objeto:object})

    write = () => this.file.save(this.fileList)

    generate = (listado) => listado.forEach( item => this.save(item) )

    saveAndWrite = (objetct) => this.save(objetct) && this.write()
    //
    ///
    getId = () => this.lastId ++

    getAll = () => this.fileList

    getById = (id) => this.fileList.find(element => element.id == id)
    ///
    ////    
    deletById = (id) => this.fileList = this.fileList.filter(element => element.id != id)

    deleteAll = () => this.fileList = []
    ////
}


class Archivo{
    constructor(filename){
        this.filename = filename;
        this.fileOpened
    }
    stringify(json){
        return JSON.stringify(json)
    }

    save = async (objetc) =>
        fs.readFile(this.filename, 'utf8')
        .then(() => {
            this.addToFile(this.stringify(objetc)) 
            console.log("Se agrego al final del achivo")
        })
        .catch(err => {
            this.createFile(this.stringify(objetc))
            console.log("Se Creo el archivo")
        })

    createFile = (objetc) =>
        fs.writeFile(this.filename, this.stringify(objetc))
        .then(() => console.log('Se guardo el archivo'))
        .catch(err => console.log("error de escritura", err))


    readFile = () => 
        fs.readFile(this.filename, 'utf8')
        .then(data => this.fileOpened = data)
        .catch(err => console.log("Fallo la lectura",err))
    

    addToFile = (objetc) => fs.appendFile(this.filename, this.stringify(objetc))

}





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

let productosText = new Contenedor("productos.txt", productos, true)

//productosText.file.createFile(productosText.getAll())



productosText.saveAndWrite({title:"Prueba Save and Write",precio:100,tumbnail:"una pruebna"})




console.log(productosText.getById(2))

console.log(productosText.getAll())

productosText.deletById(2)

console.log(productosText.getAll())