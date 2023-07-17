firstNumber = +prompt(`Enter first number, eg 12.87544.`, 12.57544);
secondNumber = +prompt(`Enter second number, eg (bigger than your first number ${firstNumber}), eg ${firstNumber + 10}.`, firstNumber + 10);

firstNumber = +firstNumber.toFixed(2);
secondNumber = +secondNumber.toFixed(2);

randomValue = Math.random() * (secondNumber - firstNumber) + firstNumber;
randomValue = +randomValue.toFixed(2);

alert(`Random number is ${randomValue} 🥳`);

thirdNumber = +prompt(`Enter third number, eg 12.`, 12);
thirdNumber = +thirdNumber.toFixed(2);

sum = +(randomValue + thirdNumber).toFixed(2);
subtraction = +(randomValue - thirdNumber).toFixed(2);
multiplication = +(randomValue * thirdNumber).toFixed(2);
division = +(randomValue / thirdNumber).toFixed(2);

document.write(`
    <table class="calculator">
        <thead>
            <tr>
                <th>Operation</th>
                <th>Expression</th>
                <th>Value</th>
            </tr>
        </thead>
        <tr>
            <td>Sum</td>
            <td>${randomValue} + ${thirdNumber}</td>
            <td>${sum}</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>${randomValue} - ${thirdNumber}</td>
            <td>${subtraction}</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>${randomValue} * ${thirdNumber}</td>
            <td>${multiplication}</td>
        </tr>
            <tr> 
            <td>Division</td>
            <td>${randomValue} / ${thirdNumber}</td>
            <td>${division}</td>
        </tr>
    </table>
  `)
  