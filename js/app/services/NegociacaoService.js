class NegociacaoService{


    importarSemana(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana')
        xhr.onreadystatechange = () =>{

            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    cb(null, JSON.parse(xhr.responseText).map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                }else{
                    cb("Erro ao importar", null)
                }
            }
        }
        xhr.send()
    }

    importarSemanaAnterior(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/anterior')
        xhr.onreadystatechange = () =>{

            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    cb(null, JSON.parse(xhr.responseText).map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                }else{
                    cb("Erro ao importar", null)
                }
            }
        }
        xhr.send()
    }
    importarSemanaRetrasada(cb){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/Retrasada')
        xhr.onreadystatechange = () =>{

            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    cb(null, JSON.parse(xhr.responseText).map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                }else{
                    cb("Erro ao importar", null)
                }
            }
        }
        xhr.send()
    }
}