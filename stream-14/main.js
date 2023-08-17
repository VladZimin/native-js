
// const createCar = (brand, maxSpeed) => {
//     return ({
//         brand,
//         maxSpeed,
//         startEngine() {
//             console.log(`Start ${this.brand}`)
//         }
//     })
// }
//
// const car1 = createCar('bmw', 200)
// const car2 = createCar('audi', 220)
//
// car1.startEngine()
// car2.startEngine()

// function Car(brand, maxSpeed) {
//     this.brand = brand
//     this.maxSpeed = maxSpeed
//     // this.startEngine = function () {
//     //     console.log(`Start ${this.brand}`)
//     // }
// }
// Car.prototype.startEngine = function () {
//     console.log(`Start ${this.brand}`)
// }
// const car1 = new Car('bmw', 200)
// const car2 = new Car('audi', 220)
//
// console.log(car1, car2)
// car2.startEngine()

class Car {
    #brand
    constructor(brand, maxSpeed) {
        this.#brand = brand
        this.maxSpeed = maxSpeed
    }

    startEngine() {
        console.log(`Start ${this.#brand}`)
    }

    get brand() {
        return this.#brand.toUpperCase()
    }
    set brand(newBrand) {
        if (newBrand.length < 3) {
            throw new Error('Brand should have more than 2 letters')
        }
        this.#brand = newBrand
    }
}

const car1 = new Car('bmw', 200)
const car2 = new Car('audi', 220)

car1.brand = 'toyota'
console.log(car1.brand)

car2.startEngine()

class SuperCar extends Car {
    constructor(brand, maxSpeed, ifCanFly) {
        super(brand, maxSpeed)
        this.ifCanFly = ifCanFly
    }
    showThis() {
        console.log(this)
    }
    superStartEngine() {
        super.startEngine()
        console.log('Can you fly?', this.ifCanFly)
    }
}

const superCar = new SuperCar('mers', 340, true)
superCar.superStartEngine()


