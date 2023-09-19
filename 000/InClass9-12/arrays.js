let grades = [78,86,92,77];
var ansText = document.getElementById("answers");

ansText.innerHTML = "Array: " + grades;
ansText.innerHTML += "<br>Second Value: " + grades[1];
grades[1]=83
ansText.innerHTML += "<br>Array: " + grades;
ansText.innerHTML += "<br>Array Length: " + grades.length;
let lastGrade = grades.length-1;
let changeGrade = ++grades[lastGrade];
ansText.innerHTML += "<br>New Grade: " + changeGrade;
ansText.innerHTML += "<br>Array: " + grades;
let totalGrade = grades[0]+grades[1]+grades[2]+grades[3];
let avgGrade = totalGrade/grades.length;
ansText.innerHTML += "<br>Average Grade: " + avgGrade;
ansText.innerHTML += "<br>Above 80?: " + (avgGrade>80);

// Lab Extras 
let tops = ["tshirt","blouse","tank","polo","sweater","sweatshirt"];
let bottoms = ['slacks', 'jeans', 'shorts', 'skirts'];
let outfits = [tops,bottoms];

// document.write(outfits[0][4], outfits[1][1]); //nesting arrays

var extraText = document.getElementById("extraAnswers");
tops.push("hoodie"); //add value
extraText.innerHTML = "Add Value: " + tops;
tops.pop(); //remove last value
extraText.innerHTML += "<br>Remove Last: " + tops;
tops.shift(); //remove first value
extraText.innerHTML += "<br>Remove First: " + tops;
tops.unshift("tshirt"); //Add value at the beginning
extraText.innerHTML += "<br>Add value to beginning: " + tops;
tops.splice(1,1); //Add or Remove any value in an array //targeting "blouse"
extraText.innerHTML += "<br>Removing blouse: " + tops;
tops.splice(3,0,"blouse","hoodie");//Add blouse and hoodie after button-up
extraText.innerHTML += "<br>Add blouse and hoodie: " + tops;

//Creating Objects
const friend = {
    fName: "Will",
    lName: "Smith",
    Age: 41,
    hometown: "Illinois",
    fullName: function(){
        return this.fName+" "+this.lName;
    }
};

friend.hometown="Indiana"
document.getElementById('fullName').innerHTML += friend.fullName()+" was born in "+ friend.hometown;

const car = {
    year: "2007",
    make: "Saturn",
    model: "Aura",
    automatic: true,
    mpg: 17.5,
    efficiency: this.mpg>40,
    fullCarName: function(){
        return this.year+" "+this.make+" "+this.model;
    }
}

document.getElementById("car").innerHTML = "I own a "+ car.fullCarName()+"."

document.getElementById("gasEff").innerHTML = car.fullCarName()+" Efficiency: "+ car.efficiency;