 class View {
    constructor(elemento){
        this._elemento = elemento
    }

   template(){
       throw new Error('O metodo Template deve ser sobrescrito')
   }

    update(modelo){
        this._elemento.innerHTML = this.template(modelo) 
    }
}