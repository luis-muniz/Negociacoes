class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData.value.split('-').map((item, indice) => item - indice % 2));
        console.log(data);
        let negociacao = new Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

        console.log(negociacao);
    }
}