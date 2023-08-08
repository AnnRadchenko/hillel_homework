sports = [
  [`skier`, `⛷`],
  [`snowboarder`, `🏂`],
  [`apple`, `🍎`],
  [`hockey`, `🏒`],
  [`ice skate`, `⛸`],
  [`swimmer`, `🏊`],
  [`surfer`, `🏄‍`],
  [`watermelon`, `🍉`],
  [`lemon`, `🍋`],
  [`rowboat`, `🚣`],
  [`bicyclist`, `🚴‍`],
];

winterSports = sports.slice(0, 5);
summerSports = sports.slice(5);

fruits = [
  ...winterSports.splice(2, 1),
  ...summerSports.splice(2, 2)
];

winterSportsStrings = [];
summerSportsStrings = [];
fruitsStrings = [];

for (a = 0; a < winterSports.length; a++) {
  winterSportsStrings.push(winterSports[a].join(": "));
}

for (i = 0; i < summerSports.length; i++) {
  summerSportsStrings.push(summerSports[i].join(": "));
}

for (j = 0; j < fruits.length; j++) {
  fruitsStrings.push(fruits[j].join(": "));
}

console.log(`
*** Winter sports ***
${winterSportsStrings.join(`\n`)}

*** Summer sports ***
${summerSportsStrings.join(`\n`)}

*** Fruits ***
${fruitsStrings.join(`\n`)}
`);
