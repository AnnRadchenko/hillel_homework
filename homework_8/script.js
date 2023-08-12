animals = [
  [`🐭`, `mouse`, `Jerry`],
  [`🐹`, `hamster`, `Biscuit`],
  [`🐰`, `rabbit`, `Bugs`],
  [`🦊`, `fox`, `Mrs. Fox`],
  [`🐻`, `bear`, `Paddington`],
];

food = [
  [`🍎`, `apple`, 10],
  [`🍐`, `pear`, 12],
  [`🍊`, `tangerine`, 15],
  [`🍋`, `lemon`, 5],
  [`🍌`, `banana`, 7],
];

function getInfo(list, tableName) {
  tableHtml = `
    <table>
      <caption>${tableName} info</caption>
      <tbody>
  `;

  for (i = 0; i < list.length; i++) {
    item = list[i];
    tableHtml += `
      <tr>
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
      </tr>
    `;
  }

  tableHtml += `</tbody></table>`;

  return tableHtml;
}

document.write(getInfo(animals, `Animals`));

document.write(getInfo(food, `Food`));


// alternative way

// function getInfo(list, tableName) {
//   let TRs = [];

//   for (let i = 0; i < list.length; i++) {
//     let TDs = [];

//     for (let j = 0; j < list[i].length; j++) {
//       TDs.push(`<td>
//       ${Array.isArray(list[i][j]) ? list[i][j].join(`; `) : list[i][j]} 
//       </td>`)
//     };

//     TRs.push(`<tr>${TDs.join(``)}</tr>`);
//   }
  
//   document.write(`
//     <table>
//       <caption><b>${tableName} info</b></caption>
//         <tbody>
//           ${TRs.join(``)}
//         </tbody>
//     </table>
//   `);
// };
  
// getInfo(animals, `Animals`);
// getInfo(food, `Food`);
