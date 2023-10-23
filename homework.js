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
