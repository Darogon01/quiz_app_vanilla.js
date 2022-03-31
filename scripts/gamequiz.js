import { questions } from "../mock/data/data.js";
let answersInsert = document.getElementById("answers");
let questionInsert = document.getElementById('question');


function sohwAnswersAndQuestions() {
let button = document.createElement(button)
const question = questions.map(answers =>{
    answersInsert.appendChild(button).textContent = answers.answers
  })
  console.log(question)

};


sohwAnswersAndQuestions();
