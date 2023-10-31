//DOM stands for Document Object Model

document.getElementById("title").innerHTML = "Welcome back from Fall Break!";

//query selector: targets individual elements using CSS
document.querySelector('p').innerText = "This is a selector at work! I only change the first p, since it's the first in order.";

document.querySelector('.content').innerText = "I'm another selector! I change the class 'content's... content.";

//select many(...sort of) elements by class name
document.getElementsByClassName('odd')[0].style.color = "red";
//if you loop it, you can have it change multiple classes.

//by tag name
document.getElementsByTagName('li')[3].style.backgroundColor="pink";

//query selector
document.querySelectorAll('#myList li:not(.odd)')[0].style.fontWeight="bold";

//loop tag name
let allItems = document.getElementsByTagName('li');

for (let i=0; i<allItems.length; i++) {
    allItems[i].style.listStyleType = "none";
    allItems[i].style.padding = "10px";
}

//Challenge: select alt bands and give them a green background with white italicized text.
let altBands = document.getElementsByClassName('alternative');

for (let a=0; a<altBands.length; a++) {
    altBands[a].style.backgroundColor="green";
    altBands[a].style.color="white";
    altBands[a].style.fontStyle="italic";
}

//Challenge
let cElement = document.querySelector(".rock:last-child");
let cText = cElement.innerText;
cText = '<a href="https://www.candleboxrocks.com/">' +cText+'</a>'
cElement.innerHTML = cText;

// ~~~ LIST ITEMS ~~~

//add item to list

//variables to target list
    let allLists = document.getElementsByTagName('ul');
    let gList = allLists[allLists.length-1];

function addItem() {
    let newItem = prompt("New Item: ");
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode(newItem);
    newLi.appendChild(newLiText);
    //styling
    newLi.style.padding="10px";
    newLi.style.listStyle="none";

    gList.appendChild(newLi);
}

//delete items from list
function deleteItem() {
    let lastItem = gList.lastElementChild;
    gList.removeChild(lastItem);
}

