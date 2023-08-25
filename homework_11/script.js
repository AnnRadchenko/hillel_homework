const USER = [
  ["john", "red", 5, ["ball", "book", "pen"]],
  ["becky", "blue", 10, ["tape", "backpack", "pen"]],
  ["susy", "red", 55, ["ball", "eraser", "pen"]],
  ["tyson", "green", 1, ["book", "pen"]],
];

const firstArrName = [];

USER.forEach((item) => { 
    let updatedUserName = item[0] + `!`;                 
    firstArrName.push(updatedUserName);
});

const mapResult = USER.map((item) => item[0] + `?`);

const filterResult = USER.filter((item) => item[1] === `red`);

let TRs = filterResult.map((item) => {
    let TDs = item.map((element) => Array.isArray(element) ? `<td>${element.join(`; `)}</td>` : `<td>${element}</td>`);

    return `<tr>${TDs.join(``)}</tr>`
});

let sum = filterResult.reduce((returnedValue, item) => returnedValue += item[2], 0);

console.log(firstArrName);
console.log(mapResult);
console.log(filterResult);

document.write(`
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Comand</th>
            <th>Score</th>
            <th>Data</th>
        </tr>
    </thead>
    <tbody>${TRs.join(``)}</tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total score: ${sum}</td>
        </tr>
    </tfoot>
</table>
`)
