class Drink {
    constructor(name) {
        this.name = name;
    }

    info() {
        return this.name
    }
}

const drink = new Drink('Milk');
console.log(drink.info());
