# Typescript

Typescript = Javascript + **a type system**

* Helps us catch errors during development
* Uses 'type annotations' to analyse our code
* Only active during development
* Doesn't provide any performance optimization

Typescript code (Javascript with type annotations) -> Typescript Compiler -> Plain Javascript -> Browser/Node executes plain Javascript

## Typescript compiler installation: tsc

    npm install -g typescript ts-node
    
    parcel index.html // will convert ts script to js script

index.ts
```typescript
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo { /*interface defines an object (a type)*/
    id : number;
    title: string;
    completed: boolean;
}

axios.get(url)

.then(res => {
    const todo = res.data as Todo;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
    
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `)
}
```

Then we execute:

    tsc index.ts //this will compile ts file into js file
    node index.js

Another way of doing both actions at the same time:

    ts-node index.ts
    
## Tool to help us run TS in the browser

    npm install -g parcel-bundler

### Type: easy way to refer to the different properties + functions that a value has
* **Primitive Types**: number, string, boolean, void, undefined, symbol, null
* **Object Types**: functions, classes, objecs, array

Types are used by the Typescript Compiler to analyze our code for errors

Types allow other engineers to understand what values are flowing around our codebase

## Type annotations + Type Inference
* A **type annotation** is code we add to tell Typescript what type of value a variable will refer to
* **Type inference** -> Typescript tries to figure out what type of value a variable refers to

### Type Inference
```typescript
    const color = 'red';
```
If **declaration and initialization** are on the same line, Typescript will figure out the type of 'color' for us

### When to use type annotations?
* When we declare a variable on one line and then initialize later

```typescript
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}
```
* When we want a variable to have a type that can't be inferred
```typescript
let nums = [-10,-1,12];
let numbAboveZero: boolean | number = false;

for(let num of nums){
    if(num > 0){
        numbAboveZero = num;
    }
}
```
* When a function returns the 'any' type and we need to clarify the value

```typescript
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json); //any - ts doesn't know which type JSON.parse will return
console.log(coordinates); // {x: 10, y: 20};
```

### The 'Any' type
* It is a type, just a string or boolean are
* Means TS has no idea what this is - can't check for correct property references
* **Avoid variables with 'any' at all costs** 

### Type annotations for functions
Code we add to tell TS what **type of arguments** a function will receive and what **type of values it will return**

### Type inference for functions
* TS tries to figure out what type of value a function will return
* There is NO type inference for arguments
* Type inference works out on output, but we won't use it

```typescript
const add = (a: number, b: number): number => {
  return a + b;
}

function divide(a: number, b: number ): number {
    return a / b;
}

//not returning value from a function
const logger = (message: srtring) : void => {
    console.log(message)
}

//not returning anything from the function

const throwError = (message: string): never => {
    throw new Error(message)
}
```

**Destructuring with annotations**
```typescript
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);
```

### Annotations around Objects
```typescript
const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        long: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, name }: { age: number; name: string } = profile;
const { coords: { lat, long } }: { coords: { lat: number; long: number } } = profile;
```

## Arrays
Each element is some consistent type of value. We use typed arrays any time we need to represent a collection of records with some arbitrary sort order.

* TS can do type inference when extracting value from an array
* TS can prevent us from adding incompatible values to the array
* We can get help with map, forEach, reduce functions
```typescript
carMakers.map((car: string): string => {
    return car.toUpperCase();
})
```
* Flexible - arrays can still contain multiple different types
```typescript
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
```

## Tuples
Array-like structure where each element represents some property of a record. The order of the elements have an specific meaning.
```typescript
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
```
## Interfaces
Creates a new type, describing the property names and value types of an object

### General strategy for reusable code in TS
* Create functions that accept arguements that are typed with interfaces (printSummary)
* Object/classes can decide to 'implement' a given interface to work with a function (oldCivic, drink)

## Classes
Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

### Instance method modifiers
The goal is not restrict access to diferent functions or variables
* public -> this method can be called anywhere, any time
* private -> this method can only be called by other methods in this class
* protected -> this method can be called by other methods in this class, or by other methods in child classes

## Type definition file
It is like an adapter between TS code and a JS library we want to work with

When we see the warning: Could not find a declaration file for module '...' we will need a type declaration file

    npm install @types/{library name}




