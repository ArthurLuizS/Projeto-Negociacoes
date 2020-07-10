class HelperDate {

    constructor(){
        throw new Error('Esta classe não pode ser instanciada!!')
    }

    static textoParaData(texto){
        if (!/\d{4}-\d{2}-\d{1}/.test(texto)) throw new Error('Data deve ter o seguinte padrao aaaa-mm-dd')
        return new Date (...texto.split('-').map((item, indice) => item - indice % 2 ))
            

    }

    static dataParaTexto(data){


        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`
        
    }
}