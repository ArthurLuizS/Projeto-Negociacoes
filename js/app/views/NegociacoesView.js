class NegociacoesView extends View {

    constructor(elemento){
        super(elemento);
    }

    template(model){
        return `<table class="table table-hover table-bordered" id="table">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    ${model.negociacao.map(n => `
                             <tr>
                                <td>${HelperDate.dataParaTexto(n.data)}</td>
                                <td>${n.quantidade}</td>
                                <td>${n.valor}</td>
                                <td>${n.volume}</td>
                            </tr>`
                        
                    ).join('')}
                    </tbody>
                    
                    <tfoot>
                    <td colspan = "3"></td>
                    <td>
                    ${model.volumeTotal}
                    </td>
                    </tfoot>
                    </table>`
                }
                
                
            }
            
            //${model.negociacao.reduce((total, n) => total + n.volume, 0.0)}

