function passwordValidator(password) {
    isValid = true;
    const letterRegex = /^[a-zA-Z0-9]+$/;
    const digitRegex = /\d/g;
    let returnMessage = []

    if (password.length >= 6 || password.length <= 10) {
        isValid = false;
        returnMessage.push("Password must be between 6 and 10 characters")
    }

    if (letterRegex.test(password) == false) {
        isValid = false;
        returnMessage.push("Password must consist only of letters and digits");
    }

    if ((password.match(digitRegex) || []).length < 2) {
        isValid = false;
        returnMessage.push("Password must have at least 2 digits");
    }

    if (isValid == true) {
        return console.log('Password is valid');
    } else {
        return console.log(returnMessage.join('\n'));
    }
}

passwordValidator('logIn');
