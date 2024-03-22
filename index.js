#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number"
    }
]);
if (answer.userGuessedNumber == randomNumber) {
    console.log("Congratulations you have the right  number!");
}
else {
    console.log("You lost, you picked the  wrong number.");
}
