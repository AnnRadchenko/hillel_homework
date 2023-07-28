HAMBURGER = `hamburger`;
CHEESEBURGER = `cheeseburger`;
BURGER = `burger`;
SAUSE = `sause`;
POTATO = `potato`;
KETCHUP = `ketchup`;
MAYONNAISE = `mayonnaise`;
SMALL = `small`;
MIDDLE = `middle`;
BIG = `big`;
orderSum = 0;

typeOfBurger = prompt(`What do you want: ${HAMBURGER} or ${CHEESEBURGER}?`);

if (typeOfBurger === CHEESEBURGER) {
  orderSum += 15;

  isDoubleCheeseChosen = confirm(`Would you like to add double cheese?`);

  if (isDoubleCheeseChosen) {
    orderSum += 5;
  }
} else {
  typeOfBurger = HAMBURGER;
  orderSum += 10;
}

isPotatoChosen = confirm(`Would you like ${POTATO}?`);

if (isPotatoChosen) {
  sizeOfPotato = prompt(`Choose ${POTATO} size: ${SMALL}/${MIDDLE}/${BIG}`);

  if (sizeOfPotato === MIDDLE) {
    orderSum += 15;
  } else if (sizeOfPotato === BIG) {
    orderSum += 20;
  } else {
    sizeOfPotato = SMALL;
    orderSum += 10;
  }

  potatoOrderMessage = `<li>🍟 Potato: ${sizeOfPotato}.</li>`;
} else {
  potatoOrderMessage = ``;
}

isSausChosen = confirm(`Would you like ${SAUSE}?`);

if (isSausChosen) {
  typeOfSaus = prompt(`Choose ${SAUSE}: ${KETCHUP}/${MAYONNAISE}`);

  if (typeOfSaus === MAYONNAISE) {
    orderSum += 3;
  } else {
    typeOfSaus = KETCHUP;
    orderSum += 2;
  }

  sausOrderMessage = `<li>🧂 Sause: ${typeOfSaus}.</li>`;
} else {
  sausOrderMessage = ``;
}

document.write(`
  <h2>Your order</h2>
  <ul>
    <li>🍔 Burger: ${typeOfBurger}.</li>
    ${potatoOrderMessage}
    ${sausOrderMessage}
  </ul>

  <p>Price: ${orderSum}$</p>
`);
