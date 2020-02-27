class Negociacoes{

    constructor(){

        this._negociacoes = [];
        Object.freeze(this);
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
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
    }
}