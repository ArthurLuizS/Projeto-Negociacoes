class Negociacao {
    constructor(data, quantdade, valor){

        this._data = new Date (data.getTime());
        this._quantidade = quantdade;
        this._valor = valor;
        this._volume = this._quantidade * this._valor;
        Object.freeze(this)
    }
    obterVol(){
        return Number(this._quantidade) * Number(this._valor)
    }

    get data() {
        return new Date (this._data.getTime())
    }

    get quantidade(){
        return this._quantidade
    }
    get valor(){
        return this._valor
    }

    get volume(){
        return this._volume
    }
}