const initialPrice = document.querySelector("#stock-price");
const number = document.querySelector("#number");
const finalPrice = document.querySelector("#final-price");
const inputBtn = document.querySelector("#enter");

var profit = 0;
var loss = 0;
var profitPercentage=0;
var lossPercentage= 0;


function calculatePercentage(difference)
{
    var percentage = (difference/Number(initialPrice.value))*100 ;

    return percentage;
}

function calculateDifference()
{
    var difference = Number(finalPrice.value) - Number(initialPrice.value);
    console.log(difference);

    if(difference>0)
    {
        profit = difference ;
        profitPercentage = calculatePercentage(difference);
        console.log(profitPercentage);
    }
    else
    {
        loss = Math.abs(difference);
        lossPercentage = calculatePercentage(loss);
        console.log(lossPercentage);
    }
}

function clickHandler(){
    calculateDifference();
    
    if(profit>0)
    {
        
    }
    if(loss>0)
    {

    }
    else
    {

    }

}


inputBtn.addEventListener('click',clickHandler)

