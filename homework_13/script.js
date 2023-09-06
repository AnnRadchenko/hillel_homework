class Bulka {
  constructor(name, size) {
    this.name = name;
    this.size = size;
    this.ingridients = [`cutlet`, `salada`, `tomato`];
    this.setAdditionalIngredients = function (additionalingredients) {
      this.ingridients.push(...additionalingredients);
    };
  }
}

const Humburger = new Bulka(`Humburger`, `small`);
Humburger.setAdditionalIngredients([`avocado`, `mushrooms`]);

const Cheeseburger = new Bulka(`Cheeseburger`, `big`);
Cheeseburger.setAdditionalIngredients([`onion`, `black pepper`]);

console.log(Humburger);
console.log(Cheeseburger);
