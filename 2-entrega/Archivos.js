const fs = require('fs').promises
const constants = require('fs').constants

class Archivo{
    constructor(filename){
        this.filename = filename;
        this.fileOpened = ""
    }
    str(json){
        return JSON.stringify(json) + ',\n'
    }

    save = async (objetc) =>
        fs.readFile(this.filename, 'utf8')
            .then(() => this.addToFile(this.str(objetc)) )
            .catch(e => this.createFile(this.str(objetc)))
            
    readFile = async () => 
        fs.readFile(this.filename, 'utf8')
            .then(data => this.fileOpened = data)
            .catch(err => console.log("Fallo la lectura, se va a crear -->"))

    createFile = (objetc) =>
        fs.writeFile(this.filename, this.str(objetc))
            .then(() => console.log('Se Creo el archivo'))
            .catch(err => console.log("error de escritura", err))

    addToFile = (objetc) => 
        fs.appendFile(this.filename, this.str(objetc))
            .then(() => console.log("Se agregao al final del arhivo"))
            .catch((e) => console.log("no se pudo agregar al achivo", e))

}

module.exports = Archivo