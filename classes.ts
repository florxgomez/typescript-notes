class Vehicle {
    constructor(public color: string){}

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle { //Vehice is the superclass (basic inheritance)
    constructor(public wheels: number, color: string){
        super(color);
    }

    private drive(): void{
        console.log('vroom');
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

const car = new Car(4,'red');
car.startDrivingProcess();
