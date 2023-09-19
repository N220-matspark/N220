
//Bank Account
let acct = 45.67;
let toy = 45.99;
let buyToy = acct>toy;

if (buyToy){
    document.getElementById('bank').innerHTML = "We can buy the toy";
} else{
    document.getElementById('bank').innerHTML = "We can NOT buy the toy";
}

//Birthday Month
const today = new Date();
let month = parseFloat(today.getMonth()+1);

if(month==12){
    document.getElementById('birthday').innerHTML = "It is your birthday month"
} else {
    document.getElementById('birthday').innerHTML = "It is NOT your birthday month"
}

//voting age
