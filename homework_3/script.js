UPPERCASE = `uppercase`;
LOWERCASE = `lowercase`;
CAPITALIZE = `capitalize`;

message = confirm(`Tell me three most important words 💚`);

if (message !== false) {
  isFirstWordInvalid = true;

  while (isFirstWordInvalid) {
    firstWord = prompt(`Enter the first word`, `anna`);

    isFirstWordInvalid =
      firstWord === null ||
      firstWord.trim() === `` ||
      firstWord.includes(0) ||
      firstWord.includes(1) ||
      firstWord.includes(2) ||
      firstWord.includes(3) ||
      firstWord.includes(4) ||
      firstWord.includes(5) ||
      firstWord.includes(6) ||
      firstWord.includes(7) ||
      firstWord.includes(8) ||
      firstWord.includes(9);
  }

  isFirstWordTransformationInvalid = true;

  while (isFirstWordTransformationInvalid) {
    firstWordTransformation = prompt(
      `Choose type on transformation for ${firstWord}: ${UPPERCASE}/${LOWERCASE}/${CAPITALIZE}`,
      UPPERCASE
    );
    isTypeOfTransformationValid =
      firstWordTransformation === UPPERCASE ||
      firstWordTransformation === LOWERCASE ||
      firstWordTransformation === CAPITALIZE;

    isFirstWordTransformationInvalid =
      firstWordTransformation === null ||
      firstWordTransformation.trim() === "" ||
      !isTypeOfTransformationValid;
  }

  isSecondWordInvalid = true;

  while (isSecondWordInvalid) {
    secondWord = prompt(`Enter the second word`, `loves`);

    isSecondWordInvalid =
      secondWord === null ||
      secondWord.trim() === `` ||
      secondWord.includes(0) ||
      secondWord.includes(1) ||
      secondWord.includes(2) ||
      secondWord.includes(3) ||
      secondWord.includes(4) ||
      secondWord.includes(5) ||
      secondWord.includes(6) ||
      secondWord.includes(7) ||
      secondWord.includes(8) ||
      secondWord.includes(9);
  }

  isSecondWordTransformationInvalid = true;

  while (isSecondWordTransformationInvalid) {
    secondWordTransformation = prompt(
      `Choose type on transformation for ${secondWord}: ${UPPERCASE}/${LOWERCASE}/${CAPITALIZE}`,
      UPPERCASE
    );
    isTypeOfTransformationValid =
      secondWordTransformation === UPPERCASE ||
      secondWordTransformation === LOWERCASE ||
      secondWordTransformation === CAPITALIZE;

    isSecondWordTransformationInvalid =
      secondWordTransformation === null ||
      secondWordTransformation.trim() === "" ||
      !isTypeOfTransformationValid;
  }

  isThirdWordInvalid = true;

  while (isThirdWordInvalid) {
    thirdWord = prompt(`Enter the third word`, `ukraine`);

    isThirdWordInvalid =
      thirdWord === null ||
      thirdWord.trim() === `` ||
      thirdWord.includes(0) ||
      thirdWord.includes(1) ||
      thirdWord.includes(2) ||
      thirdWord.includes(3) ||
      thirdWord.includes(4) ||
      thirdWord.includes(5) ||
      thirdWord.includes(6) ||
      thirdWord.includes(7) ||
      thirdWord.includes(8) ||
      thirdWord.includes(9);
  }

  isThirdWordTransformationInvalid = true;

  while (isThirdWordTransformationInvalid) {
    thirdWordTransformation = prompt(
      `Choose type on transformation for ${thirdWord}: ${UPPERCASE}/${LOWERCASE}/${CAPITALIZE}`,
      UPPERCASE
    );
    isTypeOfTransformationValid =
      thirdWordTransformation === UPPERCASE ||
      thirdWordTransformation === LOWERCASE ||
      thirdWordTransformation === CAPITALIZE;

    isThirdWordTransformationInvalid =
      thirdWordTransformation === null ||
      thirdWordTransformation.trim() === "" ||
      !isTypeOfTransformationValid;
  }

  if (firstWordTransformation === UPPERCASE) {
    firstWord = firstWord.toUpperCase();
  } else if (firstWordTransformation === LOWERCASE) {
    firstWord = firstWord.toLowerCase();
  } else if (firstWordTransformation === CAPITALIZE) {
    firstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
  }

  if (secondWordTransformation === UPPERCASE) {
    secondWord = secondWord.toUpperCase();
  } else if (secondWordTransformation === LOWERCASE) {
    secondWord = secondWord.toLowerCase();
  } else if (secondWordTransformation === CAPITALIZE) {
    secondWord = secondWord.charAt(0).toUpperCase() + secondWord.slice(1);
  }

  if (thirdWordTransformation === UPPERCASE) {
    thirdWord = thirdWord.toUpperCase();
  } else if (thirdWordTransformation === LOWERCASE) {
    thirdWord = thirdWord.toLowerCase();
  } else if (thirdWordTransformation === CAPITALIZE) {
    thirdWord = thirdWord.charAt(0).toUpperCase() + thirdWord.slice(1);
  }

  document.write(`
    <p>${firstWord} ${secondWord} ${thirdWord}!</p>
    `);
}
