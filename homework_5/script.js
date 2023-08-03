MIN_RANDOM = -10;
MAX_RANDOM = 10;

do {
  userArrLength = Math.round(
    Math.abs(+prompt(`How many elements will be in your array? Enter number from 2 to 10.`))
  );

  isUserArrLengthValid = userArrLength >= 2 && userArrLength <= 10;
} while (!isUserArrLengthValid);

userArr = [];

for (i = 0; i < userArrLength; i++) {
  userArr.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + 1)) + MIN_RANDOM);
}

console.log(userArr);

for (i = 1, min = max = userArr[0]; i < userArr.length; i++) {
  currentElement = userArr[i];

  if (currentElement < min) {
    min = currentElement;
  }

  if (currentElement > max) {
    max = currentElement;
  }
}

console.log(`Min element is ${min}`);
console.log(`Max element is ${max}`);

productResult = userArr.reduce((product, current) => product * current);

console.log(`Product is ${productResult}`);
