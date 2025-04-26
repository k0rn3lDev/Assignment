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
    
    // document.write(`
    //     <p>
    //         <strong>Current Date:</strong>
    //         <span style="color: ${color}">
    //             ${new Date().toLocaleDateString()}
    //         </span>
    //     </p>
    // `);

    document.getElementById("date").style.color = color;
}




//Task 4: Random Password Generator
// SIMPLE PASSWORD GENERATOR THAT WILL WORK
function generatePassword() {
    // 1. Get length from user (max 50, default 12)
    let length = parseInt(prompt("Password length? (1-50)")) || 12;
    if (length > 50) length = 50;
    
    // 2. Generate the password
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    
    // 3. Display it in the page
    document.getElementById("password").innerHTML = 
        `Your Password: <strong>${password}</strong> (${length} characters)`;
}

// CALL IT IMMEDIATELY WHEN SCRIPT LOADS
// generatePassword();



// Execute all tasks
generatePassword();
showRandomTip();
