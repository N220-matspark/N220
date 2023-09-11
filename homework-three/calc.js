function calcRate(){
    let principle = parseFloat(document.getElementById("prinInput").value);
    let interest = parseFloat(document.getElementById("intInput").value) / 100;
    let time = parseFloat(document.getElementById("timeInput").value);
    var totalInterest = (principle * (1 + interest * time)- principle);
    var grandTotal = (totalInterest) + principle;
    document.getElementById('resultsHead').innerHTML = "Your Results";
    document.getElementById('results').innerHTML = "With a beginning principle of $" + principle + " and with a growth rate of " + (interest * 100) + "% for " + time + " years, your total interest will be $" + totalInterest.toFixed(2) + " with a grand total of $" + grandTotal.toFixed(2) + ".";

}