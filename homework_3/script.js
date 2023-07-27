UPPERCASE = `uppercase`;
LOWERCASE = `lowercase`;
CAPITALIZE = `capitalize`;

countOfWords = 3;
wordIndex = 1;
finalString = ``;
lastStringSymbol = `!`;

message = confirm(`Tell me three most important words 💚`);

if (message !== false) {
  while (wordIndex <= countOfWords) {
    do {
      word = prompt(`Enter word #${wordIndex}`, `anna`);
    } while (word === null || word.trim() === ``);

    do {
      wordTransformation = prompt(
        `Choose type on transformation for ${word}: ${UPPERCASE}/${LOWERCASE}/${CAPITALIZE}`,
        UPPERCASE
      );

      isTypeOfTransformationValid =
        wordTransformation === UPPERCASE ||
        wordTransformation === LOWERCASE ||
        wordTransformation === CAPITALIZE;

      isWordTransformationInvalid =
        wordTransformation === null ||
        wordTransformation.trim() === "" ||
        !isTypeOfTransformationValid;
    } while (isWordTransformationInvalid);

    if (wordTransformation === UPPERCASE) {
      word = word.toUpperCase();
    } else if (wordTransformation === LOWERCASE) {
      word = word.toLowerCase();
    } else if (wordTransformation === CAPITALIZE) {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    finalString += word;

    if (wordIndex === countOfWords) {
      finalString += lastStringSymbol;
    } else {
      finalString += ` `;
    }

    wordIndex++;
  }

  document.write(`
    <p>${finalString}</p>
  `);
}
