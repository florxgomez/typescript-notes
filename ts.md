# Typescript

Typescript = Javascript + **a type system**

* Helps us catch errors during development
* Uses 'type annotations' to analyse our code
* Only active during development
* Doesn't provide any performance optimization

Typescript code (Javascript with type annotations) -> Typescript Compiler -> Plain Javascript -> Browser/Node executes plain Javascript

## Typescript compiler installation: tsc

    npm install -g typescript ts-node

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

### Type: easy way to refer to the different properties + functions that a value has
* **Primitive Types**: number, string, boolean, void, undefined, symbol, null
* **Object Types**: functions, classes, objecs, array

Types are used by the Typescript Compiler to analyze our code for errors

Types allow other engineers to understand what values are flowing around our codebase

Types examples:
```typescript
const today = new Date();

const person = {
    age: 20
};

class Color { }
const red = new Color();
```

## Type annotations + Type Inference
* A **type annotation** is code we add to tell Typescript what type of value a variable will refer to
* **Type inference** -> Typescript tries to figure out what type of value a variable refers to

```typescript
let apples: number = 5;
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
```

### Type Inference
```typescript
    const color = 'red';
```
If **declaration and initialization** are on the same line, Typescript will figure out the type of 'color' for us

### When to use type annotations?
* When we declare a variable on one line and then initialize later
* When we want a variable to have a type that can't be inferred
* When a function returns the 'any' type and we need to clarify the value

### The 'Any' type
* It is a type, just a string or boolean are
* Means TS has no idea what this is - can't check for correct property references
* **Avoid variables with 'any' at all costs** 






