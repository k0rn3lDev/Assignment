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
    document.getElementById("date").innerHTML += `<div>${new Date().toLocaleString()}</div>`;

    changeDateColor();
}




//Task 3: Display colored date on the page
function changeDateColor() {
    const colorCode = prompt("Choose color (r=red, b=blue, g=green):");
    
    let color;

    switch(colorCode)
    {
        case 'r': color = 'red'; break;
        case 'b': color = 'blue'; break;
        case 'g': color = "green"; break;
        default : alert("Unkown Color Code");
    }

    document.getElementById("date").style.color = color;
}




//Task 4: Random Password Generator
function generatePassword() {
    let length = parseInt(prompt("Password length? (1-50)")) || 12;
    if (length > 50) length = 50;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    document.getElementById("password").innerHTML = 
    `Your Password: <strong>${password}</strong> (${length} characters)`;
}




// Execute all tasks
generatePassword();
showRandomTip();
