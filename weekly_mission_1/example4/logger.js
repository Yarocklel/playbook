class Logger {
    //esta es una clase llamada logger 
    constructor(name) {//esta es un constructor, recuerda el poo en python
        this.name = name;//esto es un atributo son variables de entrada de la clase
    }

    //metodo 
    //message es una variable que se le pasa a la clase al ejecutar este metodo 
    info(message) {
        console.log(`objeto con nombre: ${this.name} info: ${message}`);
    }

    //metodo
    verbose9(message) {
        console.log(`objeto con nombre: ${this.name} verbose: ${message}`);
    }
}

module.exports = Logger;//exporta la clase