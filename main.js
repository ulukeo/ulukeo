// Полиморфизм


class Transport {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model
    }

    startEngline(){
        console.log(` engine on ${yhis.name}`)
    }
}
class Car extends Transport {
    constructor(type, name, model, volume, maxSpeed) {
        super(type, name, model);
        this.volume = volume
        this.maxSpeed = maxSpeed
    }
}

const bmw = new Car("car", "BMW", "E 38", 6.4, 450); //instace Car
console.log(bmw)


