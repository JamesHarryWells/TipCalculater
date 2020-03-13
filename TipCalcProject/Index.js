// Total price
// People at meal
// Service rating


let totalPrice = 0;
let guestAmount = 0;
let serviceRating = 0;
let totalTipAmount = 0;
let eachTipAmount = 0;
tipButton = document.getElementById(calculateButton);

tipButton.addEventListener('click',function(){
    calculateTip();
});

function calculateTip (){
    totalPrice = document.getElementById('billInputText').value;
    guestAmount = document.getElementById('guestAmount').value;
    serviceRating = document.getElementById('serviceRating').value;

    if (totalPrice === "" || guestAmount <=0 ){
        alert("Please enter values");
        return;
    }

    totalTipAmount = ((totalPrice)*serviceRating);
    eachTipAmount = (totalTipAmount / guestAmount);

    totalTipDisplay = document.getElementById('totalTipDisplay');
    tipDisplayEach = document.getElementById('tipDisplayEach');

    totalTipDisplay.innerText = "Total tip amount  :" +  totalTipAmount;
    tipDisplayEach.innerText = ("Tip amount per person:" +  eachTipAmount);
}