// String, Number, Boolean are primitive data types in JS
// let = private, var = public, const = constant

/* Input prompt example:

let name = prompt("What is your name:");
alert("Hello " + name);

*/

// document.write writes to the body of the page

// Remember, we can write HTML code within JS

let names = [];
let iceCreamPrices = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9];
let moneyPerPerson = [];
let namesCounter = 0;
let moneyPerPersonCounter = 0;

function addName() {
    let name = prompt("What is your name?");
    names.push(name);
    console.log("Name successfully added: " + names[namesCounter]);
    namesCounter++;
}

function addMoney() {
    let money = prompt("How much money do you have?");
    moneyPerPerson.push(money);
    console.log("Money added for " + names[moneyPerPersonCounter]);
    moneyPerPersonCounter++;
}

for (let i = 0; i < 3; i++) {
    addName();
    addMoney();
}

for (let i = 0; i < 3; i++) {
    let iceCreamBought = false;

    for (let j = 0; j < 6; j++) {
        if (moneyPerPerson[i] >= iceCreamPrices[j] && moneyPerPerson[i] < iceCreamPrices[j + 1]) {
            document.write(names[i] + ", buy the ice cream for " + iceCreamPrices[j] + ", and you'll have: " + (moneyPerPerson[i] - iceCreamPrices[j]) + " USD left<br>");
            iceCreamBought = true;
        } else if (moneyPerPerson[i] >= iceCreamPrices[j] && iceCreamPrices[j] >= 2.5) {
            document.write(names[i] + ", buy the small vanilla ice cream or the 1/4 of vanilla for " + iceCreamPrices[j] + ", and you'll have: " + (moneyPerPerson[i] - iceCreamPrices[j]) + " USD left<br>");
            iceCreamBought = true;         
        }
    }

    document.write("<hr>");
}

