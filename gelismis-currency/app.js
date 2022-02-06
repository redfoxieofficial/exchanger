const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency(firstSelect.value,secondSelect.value);
console.log(currency)
const ui = new UI(firstSelect,secondSelect)


eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
        currency.exchange().then(result => ui.displayResult(result))
        ui.changeFirst();
    }

    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        currency.exchange().then(result => ui.displayResult(result))
        ui.changeSecond();


    }

}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => ui.displayResult(result))
    .catch(err => console.log(err))
}