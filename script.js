firstNumber = prompt(`Enter first number, eg 12.87544.`, 12.57544);
firstNumber = Number(firstNumber);
console.log(firstNumber);

secondNumber = prompt(`Enter second number, eg (bigger than your first number ${firstNumber}), eg ${firstNumber + 10}.`, firstNumber + 10);
secondNumber = Number(secondNumber);
console.log(secondNumber);

firstNumber = +firstNumber.toFixed(2);
secondNumber = +secondNumber.toFixed(2);
console.log(firstNumber, secondNumber);

randomValue = Math.random() * (secondNumber - firstNumber) + firstNumber;
randomValue = +randomValue.toFixed(2);
console.log(randomValue);

alert(`Random number is ${randomValue} 🥳`);

thirdNumber = prompt(`Enter third number, eg 12.`, 12);
thirdNumber = Number(thirdNumber);
thirdNumber = +thirdNumber.toFixed(2);

sum = +(randomValue + thirdNumber).toFixed(2);
console.log(sum);

subtraction = +(randomValue - thirdNumber).toFixed(2);
console.log(subtraction);

multiplication = +(randomValue * thirdNumber).toFixed(2);
console.log(multiplication);

division = +(randomValue / thirdNumber).toFixed(2);
console.log(division);

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