class SpanishPerson {
    #name
    #age
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    static defaultCountry = "Spain";
    static getNationality() {
        console.log(`This person live in ${this.defaultCountry}.`);
    }
    greetings() {
        console.log(`Hello ${this.#name}. I am ${this.#age} years old.`);
    }
    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
}

class SevillaPerson extends SpanishPerson {
    constructor(name, age) {
        super(name, age);
    }
    static defaultCity = "Sevilla";
    static getCity() {
        console.log(`This person live in ${SevillaPerson.defaultCity}, ${SpanishPerson.defaultCountry}.`);
    }
    greetings() {
        super.greetings();
        console.log(`¡Buenas, miarma! ¿Cómo vamos?`);
    }
}

// Exercise 1:
console.log("Exercise 1");
const person1 = new SpanishPerson("John", 30);

// Exercise 2:
console.log("Exercise 2");
person1.greetings();

// Exercise 3:
console.log("Exercise 3");
console.log(person1.name);
console.log(person1.age);

// Exercise 4:
console.log("Exercise 4");

// Exercise 5:
console.log("Exercise 5");
SpanishPerson.getNationality();

// Exercise 6:
console.log("Exercise 6");
SevillaPerson.getCity();
const sevillano1 = new SevillaPerson("Marco", 15);
sevillano1.greetings();

// Exercise 7:
console.log("Exercise 7");
console.log("Getters and setters:");

// Exercise 8:
console.log("Exercise 8");
console.log("Getters and setters:");

// Exercise 9:
console.log("Exercise 9");
console.log(sevillano1.name);
console.log(sevillano1.age);

// Exercise 10:
console.log("Exercise 10");
sevillano1.greetings()