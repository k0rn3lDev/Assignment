//Task1: Show Random Tip:
function showRandomTip() {
    const tips = [
        "Use 'const' for variables that won't change.",
        "Always use === instead of ==.",
        "Template strings (`backticks`) make concatenation easier.",
        "Arrow functions have shorter syntax.",
        "console.log() is useful for debugging.",
        "Learn array methods like map() and filter().",
        "Always declare variables with let or const.",
        "JavaScript is case-sensitive.",
        "Semicolons are optional but recommended.",
        "Use 'use strict' for better code quality."
    ];
    
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert("Tip of the day: " + randomTip);
}




//Task 2: Display current date/time on the page
function showDateTime() {
    document.body.innerHTML += `<div>${new Date().toLocaleString()}</div>`;
}




//Task 3: Display colored date on the page
function displayColoredDate() {
    const colorCode = prompt("Choose color (r=red, b=blue, g=green):");
    
    let color;
    // if (colorCode === 'r') color = 'red';
    // else if (colorCode === 'b') color = 'blue';
    // else if (colorCode === 'g') color = 'green';
    // else color = 'black';

    switch(colorCode)
    {
        case 'r': color = 'red'; break;
        case 'b': color = 'blue'; break;
        case 'g': color = "green"; break;
        default : alert("Unkown Color Code");
    }
    
    document.write(`
        <p>
            <strong>Current Date:</strong>
            <span style="color: ${color}">
                ${new Date().toLocaleDateString()}
            </span>
        </p>
    `);
}




//Task 4: Random Password Generator
function generatePassword() {
    let length = parseInt(prompt("Enter password length (max 50, default 12):")) || 12;
    
    if (length > 50) length = 50;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    
    document.body.innerHTML += `Password (${length} chars): <strong>${password}</strong>`;
}



// Execute all tasks
showRandomTip();
displayColoredDate();
generatePassword();



