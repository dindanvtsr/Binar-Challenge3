class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name
        this.age = age
        this.legs = legs
        this.species = species
        this.status = status
    }
    introduce() {
        return `Nama : ${this.name}, Umur : ${this.age}`
    }
    greetMaster() {
        return 'Hello Dinda'
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'Shark', status)
    }
    show() {
        return this.introduce() + `, Kaki : ${this.legs}, Spesies : ${this.species}, Status : ${this.status}`
    }
}
const babyShark = new Shark('Hiu', '10', 'Berenang')
console.log(babyShark.show())

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'Cat', status)
    }
    lihat() {
        return this.introduce() + `, Kaki : ${this.legs}, Spesies : ${this.species}, Status : ${this.status}`
    }
}
const babyCat = new Cat('Kucing', '3', 'Berjalan')
console.log(babyCat.lihat())

class Dog extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'Dog', status)

    }
    hasil() {
        return this.introduce() + `, Kaki : ${this.legs}, Spesies : ${this.species}, Status : ${this.status}`
    }
}
const babyDog = new Dog('Anjing', '1', 'Berlari')
console.log(babyDog.hasil(), babyDog.greetMaster())
