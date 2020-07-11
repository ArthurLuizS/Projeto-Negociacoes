class NegociacaoController {
    constructor(){
        
        let $ = document.querySelector.bind(document)
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        self = this

        //this._negociacoes = new ListaNegociacao(model => this._negociacoesView.update(model))
        this._negociacoes = new Bind (new ListaNegociacao(),new NegociacoesView($('#NegociacoesView')),
        'adiciona', 'apagar')
    
        

        
        this._mensagem = new Bind (new Mensagem(), new MensagemView($('#mensagemView')), 'texto') 
        
        
    }

    adicionar(event){
        event.preventDefault()
        this._negociacoes.adiciona(this._criarNegociacao())
        this._mensagem.texto = 'Negociação adicionada com sucesso'
        
        this._limparForm()
        
        
    }

    apagar(){
        this._negociacoes.apagar();
        this._mensagem.texto = 'Negociações excluidas com sucesso'
        
    }

    importarNegociacao(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana')
        xhr.onreadystatechange = () =>{

            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    JSON.parse(xhr.responseText).map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ).forEach(negociacao => 
                        this._negociacoes.adiciona(negociacao));
                        this._mensagem.texto = 'Adicionadas com sucesso'
                }else{
                    this._mensagem.texto = "Erro ao adicionar"
                    console.log("erro")
                }
            }
        }
        xhr.send()
    }

    _criarNegociacao(){
        return new Negociacao(
            HelperDate.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
    }
    _limparForm(){
        this._inputData.value = ''
        this._inputQuantidade.value = '1'
        this._inputValor.value = '0.0'

        this._inputData.focus()
    }
}