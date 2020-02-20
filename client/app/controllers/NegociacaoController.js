class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoes');

        this._negociacoesView.update(this._negociacoes);

        this._mensagem = new Mensagem();

        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {

        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._negociacoesView.update(this._negociacoes);    
        this._mensagemView.update(this._mensagem);
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    _criaNegociacao(){
        let data = DateConverter.paraData(this._inputData.value);
        return new Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }
}