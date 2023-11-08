/*a) Computer understands only C Language
 b) Computer understands only Assembly Language
 c) Computer understands only Binary Language
 d) Computer understands only BASI*/

const data = [
  {
    id: 1,
    question: " Which of the following language does the computer understand?",
    answers: [
      {
        answer: " Computer understands only C Language",
        isCorrect: true,
      },
      {
        answer: " Computer understands only Assembly Language",
        isCorrect: false,
      },
      {
        answer: "Computer understands only Binary Language",
        isCorrect: false,
      },
      {
        answer: "Computer understands only BASI",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: "Which of the following is not a C variable?",

    answers: [
      {
        answer: "  Count123",
        isCorrect: false,
      },
      {
        answer: " Count_123",
        isCorrect: false,
      },
      {
        answer: "Count@123",
        isCorrect: true,
      },
      {
        answer: " X_123_Count",
        isCorrect: true,
      },
    ],
  },
  {
    id: 3,
    question: "The execution of any C program is",
    answers: [
      {
        answer: "Sequential",
        isCorrect: true,
      },
      {
        answer: "Parallel",
        isCorrect: false,
      },
      {
        answer: "Multi-threading",
        isCorrect: false,
      },
      {
        answer: "None of these",
        isCorrect: false,
      },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answerContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");
let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;
const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};
play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";
  resultScreen.querySelector(
    ".correct"
  ).textContent = ` Correct Answers :${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = ` Correct Answers :${wrongCount}`;

  resultScreen.querySelector(".score").textContent = ` Your Score is:->  ${
    (correctCount - wrongCount) * 10
  }`;
};
const showQuestion = (qNumber) => {
  if (qIndex == data.length) return showResult();
  question.textContent = data[qNumber].question;
  answerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
     <div class ="answer">
     <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
     <label for =${index}>${item.answer}</label>`
    )
    .join(" ");
  selectAnswer();
};

const selectAnswer = () => {
  selectedAnswer == null;
  answerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};
const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer != null) {
      selectAnswer === true ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("select an answer!!");
    }
  });
};
showQuestion(qIndex);
submitAnswer();
