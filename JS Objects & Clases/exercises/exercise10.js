class Vehicle {

    constructor (type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts.engine = parts.engine;
        this.parts.power = parts.power;
        this.parts.quality = parts.quality;
        this.fuel = fuel;

    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}