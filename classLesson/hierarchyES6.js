//----------------------Layer 1--------------------//
class Animal {
    constructor(name, isPredator) {
        this.name = name;
        this.isPredator = isPredator;
    }

    moving() {
        return `${this.name} is running`;
    }
}

//----------------------Layer 2--------------------//
class Mammal extends Animal {
    constructor(name, isPredator, isDomestic) {
        super(name, isPredator);
        this.isDomestic = isDomestic;
    }
}

class Reptile extends Animal {
    constructor(name, isPredator, hasLegs) {
        super(name, isPredator);
        this.hasLegs = hasLegs;
    }
}

//----------------------Layer 3--------------------//

class Cat extends Mammal {
    constructor(name, isPredator, isDomestic, hasFlock){
        super(name, isPredator, isDomestic);
        this.hasFlock = hasFlock;
    }
}

class Whale extends Mammal {
    constructor(name, isPredator, isDomestic, isHuge){
        super(name, isPredator, isDomestic);
        this.isHuge = isHuge;
    }
}

let phiso = new Cat("Phiso", true, true, false);

console.log(phiso.moving());
