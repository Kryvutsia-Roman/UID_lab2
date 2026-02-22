const fs = require('fs');
const path = require('path');

const questions = [
    "Яку останню книгу ви читали?",
    "Якого жанру вона була?",
    "Хто її автор?",
    "Чи прочитав би ти її ще раз?",
    "Чи порадиш ти прочитати її ще комусь?"
];

let currentQuestion = 0;

const questionDiv = document.getElementById("question");
const input = document.getElementById("answerInput");

questionDiv.innerText = questions[currentQuestion];

function saveAnswer() {

    const answer = input.value.trim();

    if (answer === "") {
        alert("Введіть відповідь!");
        return;
    }

    const filePath = path.join(__dirname, "Media", "answers.txt");

    fs.appendFileSync(filePath,
        questions[currentQuestion] + " " + answer + "\n");

    input.value = "";
    currentQuestion++;

    if (currentQuestion < questions.length) {
        questionDiv.innerText = questions[currentQuestion];
    } else {
        questionDiv.innerText = "Опитування завершено!";
        document.querySelector("button").disabled = true;
    }
}