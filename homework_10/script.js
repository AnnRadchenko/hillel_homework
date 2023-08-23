const ANIMALSlIST = [
  [`turtle`, `🐢`],
  [`octopus`, `🐙`],
  [`fish`, `🐠`],
  [`flamingo`, `🦩`],
  [`penguin`, `🐧`],
];

const renderItems = (list) => {
  list.forEach((currentValue, i) => {
    setTimeout(() => {
      document.write(`<p>${currentValue[0]}: ${currentValue[1]}</p>`);
    }, i * 1000);
  });
};

renderItems(ANIMALSlIST);
