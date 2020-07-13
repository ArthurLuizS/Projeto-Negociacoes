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

        service.importarSemana((erro, negociacao) => {

            if(erro){
                this._mensagem.texto = erro
                return
            }
            negociacao.forEach(negociaca => 
                this._negociacoes.adiciona(negociaca));
                this._mensagem.texto = "Importadas com sucesso"
        })
        service.importarSemanaAnterior((erro, negociacao) => {

            if(erro){
                this._mensagem.texto = erro
                return
            }
            negociacao.forEach(negociaca => 
                this._negociacoes.adiciona(negociaca));
                this._mensagem.texto = "Importadas com sucesso"
        })
        service.importarSemanaRetrasada((erro, negociacao) => {

            if(erro){
                this._mensagem.texto = erro
                return
            }
            negociacao.forEach(negociaca => 
                this._negociacoes.adiciona(negociaca));
                this._mensagem.texto = "Importadas com sucesso"
        })

      
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