// pokemon.js

//crear la clase


class Pokemon {
    
//Crea un constructor que permita recibir un nombre.

    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }


//Crea la función sayHello().
sayHello (message) {
    console.log(`Mi pokemon ${this.name} te saluda!!! `)
  }

//Crea la función sayMessage().
sayMessage (message) {
    console.log(`Mi pokemon ${this.name}] dice: ${message}`)
  }

//Exporta la clase para que pueda ser importada en el archivo main.js.


}
module.exports = Pokemon

