userName = prompt(`Enter your name`);
userNameIsNotDefined = userName === null || userName === ``|| userName === ` `;

if (userNameIsNotDefined) {
    userName = `your name😌`;
} else {
    userName = userName.trim();
}

userSecondName = prompt(`Enter your second name`);
userSecondNameIsNotDefined = userSecondName === null || userSecondName === `` || userSecondName === ` `;

if (userSecondNameIsNotDefined) {
    userSecondName = `your second name😌`;
} else {
    userSecondName = userSecondName.trim();
}

userEmail = prompt(`Enter your email`);
emaileIsNotDefined = userEmail ===  null || userEmail === '' || userEmail === ' ';

if (emaileIsNotDefined) {
    userEmail = `email is not defined`;
} else {
    userEmail = userEmail.replaceAll(` `, ``).toLowerCase();
    indexOfAt = userEmail.indexOf(`@`);

    if (indexOfAt === -1) {
        userEmail = `not valid email '${userEmail}' (symbol @ not exist)`;
    }

    if (userEmail.startsWith("@") && userEmail.endsWith("@")) {
        userEmail = `not valid email '${userEmail}' (symbol @ find in first place, symbol @ find in last place)`;
    } else if (userEmail.startsWith("@")) {
        userEmail = `not valid email '${userEmail}' (symbol @ find in first place)`;
    } else if (userEmail.endsWith("@")) {
        userEmail = `not valid email '${userEmail}' (symbol @ find in last place)`;
    };
}

userYearsOfBirth = prompt(`Enter your year of birth`);
defaultAgeMessage = `your year of birth 😌`;

if (userYearsOfBirth === null) {
    userAge = defaultAgeMessage;
} else { 
    userAge = +userYearsOfBirth.replaceAll(` `, ``);

    if (isNaN(userAge)) {
        userAge = defaultAgeMessage; 
    } else {
        currentYear = new Date().getFullYear();
    
        userAge = currentYear - userAge;
    }
}

document.write(`
    <ul>
        <li>
            Full name: ${userName}  ${userSecondName}
        </il>
        <li>
            Email: ${userEmail}
        </il>
        <li>
            Age: ${userAge}
        </il>
    </ul>
`)
