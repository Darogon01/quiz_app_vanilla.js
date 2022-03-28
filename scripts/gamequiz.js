import { questions } from "../mock/data/data.js";
let answersInsert = document.getElementById("answers");

function sohwCuestions() {
  let dataQuestions = questions.answers.map((el, i) => {
    answersInsert.innerHTML += `<button type="button"><p>${el[i]}</p></button>`;
  });
  return dataQuestions
}

sohwCuestions();
