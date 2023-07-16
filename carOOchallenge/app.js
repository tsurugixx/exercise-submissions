class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "doot";
    }

    toString() {
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`

    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
};

let myFirstCar = new Car("Toyota", "Corolla", 1999);


class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "Brup Brup";
    }

};

let myFirstMotorcycle = new Motorcycle("Kawasaki", "Ninja", 1999);

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }


    add(newVehicle) {

        if (!(newVehicle instanceof Vehicle)) {
            return "Only Vehicles in the Garage"
        }
        if (this.vehicles.length >= this.capacity) {
            return "Garage Full"
        }
        {
            this.vehicles.push(newVehicle);
            return "Vehicle added to Garage";
        }
    };
};
