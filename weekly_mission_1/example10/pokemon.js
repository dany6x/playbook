/*
  export default nos permite exportar esta clase e importarla

  import MyLogger from './logger.js'
*/

export default class MyPokemon {
    constructor (name) {
      this.name = name
    }
  
    log (message) {
      console.log(`[${this.name}] ${message}`)
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
