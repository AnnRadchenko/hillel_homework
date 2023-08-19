const PRODUCTS = [
  ["apple", 10],
  ["banana", 8],
  ["mango", 20],
  ["grape", 18],
];

function summerValue(value) {
  return value * 0.8;
}

function winterValue(value) {
  return value * 2;
}

function getPrice(products, seasonFunc) {
  let copiedProducts = JSON.parse(JSON.stringify(products));
  let copiedProductsPrice = 0;

  for (let i = 0; i < copiedProducts.length; i++) {
    let product = copiedProducts[i];
    let productPrice = product[1];
    let productUpdatedPrice = typeof seasonFunc === `function` ? seasonFunc(productPrice) : productPrice;

    product[1] = productUpdatedPrice;
    copiedProductsPrice += productUpdatedPrice;
  }

  return copiedProductsPrice;
}

getPrice(PRODUCTS, summerValue);
getPrice(PRODUCTS, winterValue);
getPrice(PRODUCTS);
