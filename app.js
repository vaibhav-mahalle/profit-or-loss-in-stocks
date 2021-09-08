const initialPrice = document.querySelector("#stock-price");
const amount = document.querySelector("#amount");
const finalPrice = document.querySelector("#final-price");
const inputBtn = document.querySelector("#enter");
const output = document.querySelector("#output-box");

var profit = 0;
var noofstocks = 0;
var loss = 0;
var profitPercentage = 0;
var lossPercentage = 0;
var totalvalue = 0;


function calculatePercentage(difference) {
    var percentage = (difference / Number(initialPrice.value)) * 100;
    percentage = Math.round(percentage);
    return percentage;
}

function calculateDifference() {
    var difference = Number(finalPrice.value) - Number(initialPrice.value);
    console.log(difference);

    if (difference > 0) {
        profit = difference * noofstocks;

        profitPercentage = calculatePercentage(difference);
        console.log(profitPercentage);

    } else {
        loss = Math.abs(difference) * noofstocks;
        console.log(loss);
        lossPercentage = calculatePercentage(Math.abs(difference));
        console.log(lossPercentage);

    }
}

function clickHandler() {
    noofstocks = parseInt(amount.value);

    if (Number(initialPrice.value) < 0 || Number(finalPrice.value) < 0 || noofstocks < 0) {
        output.innerText = "One or more value is negative.Please enter positive values.";
    } 
    else 
    {
        calculateDifference();

        if (profit > 0) {

            output.innerText = `Way to go 💰💰:Profit= ${profit}rs ProfitPercentage= ${profitPercentage}%`;
        }
        if (loss > 0) {
            output.innerText = `Oh no you have lost :Loss=${loss}rs  LossPercentage=${lossPercentage}% `;
        }
        if (profit === 0 && loss === 0) {
            output.innerText = `No Profit No Loss!!`;
        }

    }

}


inputBtn.addEventListener('click', clickHandler)