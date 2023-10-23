// Each comment points to the specification provided by the task.

//
class Hamster {
    constructor(name) {
        // name - string, set the name from parameter in constructor method
        this.name = name;
    }
    // owner - string, initially set as an empty string
    owner = "";
    // price - integer, set as 15
    price = 15;
    // wheelRun() - log "squeak squeak"
    wheelRun() {
        console.log("squeak squeak");
    }
    // eatFood() - log "nibble nibble"
    eatFood() {
        console.log("nibble nibble");
    }
    // getPrice() - return the price
    getPrice() {
        return this.price;
    }
}
const hamster1 = new Hamster("Arthur");

class Person {
    constructor(name) {
        // name - set name from parameter in constructor method
        this.name = name;
    }
    // age - initially 0
    age = 0;
    // height - initially 0
    height = 0;
    // weight - initially 0
    weight = 0;
    // mood - integer starting at 0 initially
    mood = 0;
    // hamsters - empty array initially
    hamsters = [];
    // bankAccount - initially set to 0
    bankAccount = 0;

    // getName() - returns name
    getName(){
        return this.name;
    }
    // getAge() - returns age
    getAge(){
        return this.age;
    }
    // getWeight() - returns weight
    getWeight(){
        return this.weight;
    }
    // greet() - logs a message with person's name
    greet(){
        console.log(`Hello, my name is ${this.getName()}`);
    }
    // eat() - increment weight, increment mood
    eat(){
        this.weight++;
        this.mood++;
    }
    // exercise() - decrement weight
    exercise(){
        this.weight--;
    }
    // ageUp() - increment age, increment height, increment weight, decrement mood,
    // increment bank account by 10 (birthday money)
    ageUp(){
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount+=10;
    }
    // buyHamster(hamster) - push the hamster object onto the hamster array, increment
    //mood by 10, decrement bankAccount by the value of the hamster
    buyHamster(hamster){
        this.hamsters.push(hamster);
        this.mood+=10;
        this.bankAccount-=hamster.getPrice();
        hamster.owner = this.name;
    }
}
const person1 = new Person("Juan");
