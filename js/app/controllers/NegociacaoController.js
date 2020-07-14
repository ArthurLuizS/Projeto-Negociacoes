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
        let service = new NegociacaoService()

        Promise.all([
            service.importarSemana(), 
            service.importarSemanaAnterior(),
            service.importarSemanaRetrasada()])
                .then( negociacoes =>{
                    negociacoes
                        .reduce((arrayAchatado, array) =>arrayAchatado.concat(array), [] )
                        .forEach(negociacao =>  this._negociacoes.adiciona(negociacao));
                        this._mensagem.texto = "Negociacoes importadas com sucesso!"
                })
                .catch( error => this._mensagem.texto = error)

       /* service.importarSemana()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._mensagem.texto = "Importadas da semana com sucesso" 
            })
            .catch(erro => this._mensagem.texto= erro)
        service.importarSemanaAnterior()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._mensagem.texto = "Importadas da semana anterior com sucesso" 
            })
            .catch(erro => this._mensagem.texto= erro)
        service.importarSemanaRetrasada()
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao))
                this._mensagem.texto = "Importadas da semana retrasada com sucesso" 
            })
            .catch(erro => this._mensagem.texto= erro) */
        
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