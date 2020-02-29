class NegociacaoService {

    obterNegociacaoDaSemana(cb) {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {

            if (xhr.readyState == 4) {

                if (xhr.status == 200) {

                    const negociacoes = JSON
                        .parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));

                    cb(null, negociacoes);
                    //this._mensagem.texto = 'Negociações importadas com sucesso';
                } else {

                    //this._mensagem.texto = 'Erro ao importar as negociações';
                    console.log(xhr.responseText);

                    cb('Erro ao importar as negociações', null);
                }
            }
        };

        xhr.send();
    }
}