//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js").Vehicle

class Car extends VehicleModule () {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log ('Need a bigger Vehicle');
            }   
    }
}

    scheduleService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log ('The Vehicle has cranked');
            return this.started = true
        } else {
            console.log ("Out of Fuel!");
            return this.started = false
        }
}
    }




//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
