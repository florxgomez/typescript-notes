let apples = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];

//Class
class Car {}
let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

//Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

/*When to use type annotations?
* When we declare a variable on one line and then initialize later*/

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

/** When we want a variable to have a type that can't be inferred*/

let nums = [-10,-1,12];
let numbAboveZero: boolean | number = false;

for(let num of nums){
    if(num > 0){
        numbAboveZero = num;
    }
}

/** When a function returns the 'any' type and we need to clarify the value*/

const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json); //any - ts doesn't know which type JSON.parse will return
console.log(coordinates); // {x: 10, y: 20};

