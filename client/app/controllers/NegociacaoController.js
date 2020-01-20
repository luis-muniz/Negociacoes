class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adiciona(event) {

        event.preventDefault();

        let data = DateConverter.paraData(this._inputData.value);
        let negociacao = new Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

        console.log(negociacao.data);
        let ddmmaa = DateConverter.paraTexto(negociacao.data);
        console.log(ddmmaa);
    }
}