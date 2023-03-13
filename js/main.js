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

    for (prop in coffeeCup) { // prop is short for property
        console.log(prop);

        let newProp = document.createElement('li');
        newProp.textContent = prop;

        theList.appendChild(newProp);
    }
}

// add event handling here
theButton.addEventListener('click', listProps);