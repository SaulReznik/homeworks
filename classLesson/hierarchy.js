 function inherit(Child, Parent) {
     Child.prototype = new Parent();
 }

//----------------------Layer 1--------------------//
function Animal(name, isPredator, something) {
    this.name = name;
    this.isPredator = isPredator;
    this.something = something || "something";
}

Animal.prototype.moving = function moving() {
    return `${this.name} is running`
}

//----------------------Layer 2--------------------//

function Mammal(name, isPredator, isDomestic) {
    this.name = name;
    this.isPredator = isPredator;
    this.isDomestic = isDomestic;
}

inherit(Mammal, Animal);

//----------------------Layer 3--------------------//


function Cat (name, isPredator, isDomestic, hasFlock) {
    this.name = name;
    this.isPredator = isPredator;
    this.isDomestic = isDomestic;
    this.hasFlock = hasFlock;
}

inherit(Cat, Mammal);

let phiso = new Cat("Phiso", true, true);
console.log(phiso.moving());
