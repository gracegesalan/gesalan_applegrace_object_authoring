console.log('js is wired');

let theButton = document.querySelector('button'),
    theList = document.querySelector('ul');

// rules for working with/ creating objects

// 1. needs a name, wrapped in curly brackets
// 2. commas between keys

let coffeeCup = {
    color:'white', // string
    lidColor: 'grey', // string
    height: 20, // number
    contents: 'cappucino', //string

    // functional keys: methods (things an ocject can do)
    drink: () => {console.log('sippy sip')},
    mix: () => {console.log('add cream, sugar, etc')}
};

// console.log('js is wired');

// let appleComputer = {
//     price: "2,000",
//     owner: "Grace",
//     color: "silver",
//     contents: "intellectual property",

//     use: () => {console.log('create codes for the project')},
//     on: () => {console.log('press the button')}
// };


//functions go here
function listProps() {
    // debugger;

    if (theList.children.length >0) { // if the list is always full then empty it
        theList.innerHTML = "";
        // add exit the rest of the function
        return;
    }
    for (prop in coffeeCup) { // prop is short for property
        console.log(coffeeCup[prop]);

        let newProp = document.createElement('li');
        newProp.textContent = (coffeeCup[prop]);
        newProp.classList.add('red-list');

        theList.appendChild(newProp);
    }
}

// add event handling here
theButton.addEventListener('click', listProps);