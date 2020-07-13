class ListaNegociacao{

    constructor(){

        this._negociacoes = []
        
        
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao)
     
       
    }
    
    get negociacao(){
        return [].concat(this._negociacoes)
    }
    
    apagar(){
        this._negociacoes = []
    
       
    }
    // novo método
    get volumeTotal() {
    return this._negociacoes.reduce((total, n) => total + n.volume,0.0);  
}

}