class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency
        this.secondCurrency = secondCurrency
        this.url = "https://api.exchangerate.host/latest"
        this.amount = null;
    }

    exchange(){
        return new Promise((resolve,reject) => {

            fetch(this.url)
        .then(response => response.json())
        .then(data => {
            const birim = data["rates"][this.firstCurrency];
            const birim2 = data["rates"][this.secondCurrency];
            const bolum = birim2/birim
            const amount2 = Number(this.amount)
            let total = bolum*amount2
            resolve(total)
        })
        .catch(err => console.log(err))
        })
        
    }
    changeAmount(amount){
        this.amount = amount
    }

    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency
    }
}