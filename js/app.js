const costList = document.querySelector('.cost');
const inputField = document.querySelector('input[type="number"]');
const btn = document.querySelector("button");

btn.addEventListener('click', getCost);

function getCost(){
    let numberOfCost = inputField.value;
    let url = `https://api.coindesk.com/v1/bpi/currentprice.json${numberOfCost}`;

    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let output = '';

            data.value.forEach(value => {
            console.log(value.cost);
            output += `<li>${value.cost}</li>`
            console.log(data.time.updatedISO);
            console.log(data.bpi.USD.code);
        });
        costList.innerHTML = output;
        });
};