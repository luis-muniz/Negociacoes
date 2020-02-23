class Negociacoes{

    constructor(armadilha){

        this._negociacoes = [];
        this._armadilha = armadilha;
        Object.freeze(this);
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    paraArray(){

        return [].concat(this._negociacoes);
    }


    get volumeTotal(){
        /*let total = 0;

        this._negociacoes.forEach(element => {
            total += element.volume;
        });
        
        return total;
        */
        return this._negociacoes.reduce((total,neg)=>total+neg.volume,0);

    }

    esvazia(){

        this._negociacoes.length = 0;
        this._armadilha(this);
    }
}