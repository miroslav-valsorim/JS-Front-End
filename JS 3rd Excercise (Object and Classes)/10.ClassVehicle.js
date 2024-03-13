// 1st
// class Vehicle {
//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = parts;
//         this.fuel = fuel;
//         this.quality = this.parts.engine * this.parts.power;
//         this.parts.quality = this.quality
//     }   

//     drive(fuelLoss) {
//         this.fuel -= fuelLoss;
//     }
// }

//2nd
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power,
        }
        this.fuel = fuel
      
    }   

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}