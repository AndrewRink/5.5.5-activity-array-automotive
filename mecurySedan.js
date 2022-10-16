//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js").Vehicle

class Car extends VehicleModule {
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

    scheduleServiceNow(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
            console.log ('Schedule Service Now!')
            return this.scheduleService;
        }
        else {
            this.scheduleService = false
            console.log ('No Service Needed')
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
let mercury = new Car ("Mecury", "A28 Sedan", "1965", "Blue", "0");
console.log(mercury);

mercury.loadPassenger(6);
mercury.start();
mercury.scheduleServiceNow(30001);
mercury.stop()

