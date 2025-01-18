// Ensures that when a number button is clicked, the corresponding number is appended to the input field.
document.getElementById('btn-0').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(0);
});

document.getElementById('btn-1').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(1);
}) 

document.getElementById('btn-2').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(2);
}) 

document.getElementById('btn-3').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(3);
}) 

document.getElementById('btn-4').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(4);
}) 

document.getElementById('btn-5').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(5);
}) 

document.getElementById('btn-6').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(6);
}) 

document.getElementById('btn-7').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(7);
}) 

document.getElementById('btn-8').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(8);
}) 

document.getElementById('btn-9').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += Number(9);
}) 


// Executes the addition of mathematical operators:

// Ensures ÷ symbol appears in the input field when the ÷ button is clicked
document.getElementById('btn-divide').addEventListener('click', function () {
    const inputField = document.getElementById('display-numbers');
    inputField.value += ' ÷ ';
});

// Replaces / symbol with ÷ symbol in the input field when enterred from the keyboard
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const inputField = document.getElementById('display-numbers');
    if (event.charCode === 47) { // Checks if the / key is pressed on the keyboard
        event.preventDefault(); // Prevents both / and ÷ from appearing at the same time
        inputField.value += ' ÷ ';
    }
});


// Ensures x symbol appears in the input field when the x button is clicked
document.getElementById('btn-multiply').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers'); 
    inputField.value += ' x ';
});

// Replaces * symbol with x symbol in the input field when enterred from the keyboard
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const inputField = document.getElementById('display-numbers');
    if (event.charCode === 42) { // Checks if the * key is pressed on the keyboard
        event.preventDefault(); // Prevents both * and x from appearing at the same time
        inputField.value += ' x ';
    }
});


// Ensures "-" symbol appears in the input field when "-" button is clicked
document.getElementById('btn-subtract').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value += ' - ';
});

// Ensures "-" symbol appears correctly in the input field when enterred from the keyboard.
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const inputField = document.getElementById('display-numbers');
    if (event.charCode === 45) { // Checks if the "-" key is pressed on the keyboard
        event.preventDefault(); // Prevents multiple "-" symbols from being added at the same time
        inputField.value += ' - '; 
    }
});


// Ensures "+" symbol appears in the input field when the "+" button is clicked.
document.getElementById('btn-add').addEventListener('click', function () {
    const inputField = document.getElementById('display-numbers');
    inputField.value += ' + ';
});

// Ensures "+" symbol appears correctly in the input field when entered from the keyboard.
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const inputField = document.getElementById('display-numbers');
    if (event.charCode === 43) { // Checks if the "+" key is pressed on the keyboard
        event.preventDefault(); // Prevents multiple "+" symbols from being added at the same time
        inputField.value += ' + ';
    }
});


// Ensures the . symbol appears in the input field when the . symbol is clicked
document.getElementById('btn-point').addEventListener('click', function () {
    const inputField = document.getElementById('display-numbers');
    inputField.value += '.';
});


// Replaces , with . in the input field when enterred from the keyboard
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const inputField = document.getElementById('display-numbers');
    if (event.charCode === 44) { // Chekcs if the , key is pressed
        event.preventDefault(); // Prevents both , and . from appearing at the same time
        inputField.value += '.'; 
    }
});


// Ensures the left parenthesis appears in the input field when the button is clicked
document.getElementById('btn-leftparenthesis').addEventListener('click', function() {
    const inputLeftParenthesis = document.getElementById('display-numbers')
    inputLeftParenthesis.value += '(';
});


// Ensures the right parenthesis appears in the input field when the button is clicked
document.getElementById('btn-rightparenthesis').addEventListener('click', function() {
    const inputRightParenthesis = document.getElementById('display-numbers')
    inputRightParenthesis.value += ')';
});


// Clears the input field when the AC(All Clear) button is clicked
document.getElementById('btn-allclear').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');
    inputField.value = '';
});


// Removes the last entered character when the CE(Clear Entry) button is clicked
document.getElementById('btn-backspace').addEventListener('click', function () {
    const inputField = document.getElementById('display-numbers');
    inputField.value = inputField.value.slice(0, -2)
});


// Prevents letters from being added in the input field
document.getElementById('display-numbers').addEventListener('keypress', function(event) {
    const checkCharCode = event.charCode; 
    if (!(checkCharCode >= 40 && checkCharCode <= 57 )) { // Allows only numbers and parentheses
        event.preventDefault(); // Blocks invalid keys from being typed
    }
});


// Performs the calculation when the Calculate button is clicked
document.getElementById('btn-submit').addEventListener('click', function() {
    const inputField = document.getElementById('display-numbers');

    try {
        let expression = inputField.value.replace('÷', '/').replace('x', '*');
        // Fix potential errors when a parenthesis follows a number
        expression = expression.replace(/(\d)(\()/g, '$1*$2');
        // Removes spaces in the expression for calculation
        expression = expression.replace(/\s+/g, '');

        // Checks if the entered expression contains only numbers and valid mathematical operators (+, -, *, /, (), .).
        const isValid = /^[0-9+\-*/.()]+$/.test(expression);
        if (!isValid) {
            inputField.value === ''; // Clears the input fiel if an invalid expression is entered
            return;
        }

        inputField.value = eval(expression);
    } catch(e) {
        alert('Invalid expression!');
        inputField.value = '';
    }
});

// Enables calculation when the Enter key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById('display-numbers');

        try {
            let expression = inputField.value.replace('÷', '/').replace('x', '*');
            // Fix potential errors when a parenthesis follows a number
            expression = expression.replace(/(\d)(\()/g, '$1*$2');
            // Removes spaces in the expression for calculation
            expression = expression.replace(/\s+/g, 
                "");

            // Checks if the entered expression contains only numbers and valid mathematical operators
            const isValid = /^[0-9+\-*/.()]+$/.test(expression);
            if (!isValid) {
                inputField.value === ''; // Clears the input fiel if an invalid expression is entered
                return;
            }

            inputField.value = eval(expression);
        } catch(e) {
            // Alerts the user if an invalid calculation is made
            alert('Invalid calculation!');
            inputField.value = '';
        }
    }
});