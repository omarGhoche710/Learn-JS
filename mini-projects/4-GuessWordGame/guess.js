// Setting Game Name
let gameName = "Guess The World";
document.title = gameName;
document.querySelector("h1").innerHTML = gameName;
document.querySelector("footer").innerHTML =
  `${gameName} Game Created By Elzero Web`;

// Setting Game Options
let numbersOfTries = 6;
let numbersOfLetters = 6;
let currentTry = 1;
let numberOfHintTries = 3;

///-- Manage Words --///
let wordToGuess = "";
const words = [
  "Create",
  "Update",
  "Delete",
  "Master",
  "Branch",
  "Mainly",
  "Elzero",
  "School",
];
wordToGuess = words[Math.floor(Math.random() * words.length)].toLowerCase();
let wordToGuessObj = new Map();

[...wordToGuess].forEach((letter, index) => wordToGuessObj.set(index, letter));

///-- Update the right word --///
let userGuessWord = new Array(numbersOfLetters);

///-- Variables --///
const guessBtn = document.querySelector(".check");
const hintBtn = document.querySelector(".hint");

///-- Events listener --///

// To focus on the next input when the user enter a value
// and Converts all the alphabetic characters in a string to uppercase.
document.querySelector(".inputs").addEventListener("input", (e) => {
  if (e.target.matches("input")) {
    e.target.value = e.target.value.toUpperCase();
    e.target.nextElementSibling?.focus();
  }
});

// To focus the next input when the user press on the arrow right
// and the previous input the he press on the arrow left
document.querySelector(".inputs").addEventListener("keydown", (e) => {
  if (e.target.matches("input")) {
    if (e.key === "ArrowRight") {
      e.target.nextElementSibling?.focus();
      return;
    }

    if (e.key === "ArrowLeft") {
      e.target.previousElementSibling?.focus();
      return;
    }
  }
});

// To handle the Inputs with a button check
guessBtn.addEventListener("click", handleGuesses);
hintBtn.addEventListener("click", getHint);

///-- Functions --///

function generateInput() {
  const inputsContainer = document.querySelector(".inputs");

  // Create Try Container
  for (let i = 1; i <= numbersOfTries; i++) {
    const tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>Try ${i}</span>`;

    if (i !== 1) tryDiv.classList.add("disabled-inputs");

    // Create Inputs
    for (let j = 1; j <= numbersOfLetters; j++) {
      const input = document.createElement("input");
      input.type = "text";
      input.setAttribute("maxlength", 1);
      input.id = `guess-${i}-letter-${j}`;

      tryDiv.appendChild(input);
    }

    inputsContainer.appendChild(tryDiv);
  }

  // Focuse on the First Input In the first Try
  inputsContainer.children[0].children[1].focus();
}

function disableInputsInDisabledDiv() {
  document
    .querySelectorAll(".disabled-inputs input")
    .forEach((input) => (input.disabled = true));
}

function disableInputs(inputs) {
  inputs.forEach((input) => (input.disabled = true));
}

function enableInputs(inputs) {
  inputs.forEach((input) => (input.disabled = false));
}

// function handleGuesses(btn) {
//   if (currentTry === numbersOfTries + 1) {
//     alert(`Game Over! The word was <span>${wordToGuess}</span>`);
//     btn.disabled = true;
//     return;
//   }

//   const currentTryDiv = document.querySelector(`.try-${currentTry}`);
//   const currentInputs = currentTryDiv.querySelectorAll(`input`);

//   currentInputs.forEach((input, i) => {
//     const inputValue = input.value;
//     const indexOfInput = i;
//     const correctChar = wordToGuess[i];

//     if (inputValue === "") return;

//     if (inputValue === correctChar) {
//       input.classList.add("yes-in-place");
//       userGuessWord[indexOfInput] = inputValue;
//     } else if (wordToGuess.includes(inputValue)) {
//       input.classList.add("not-in-place");
//     } else {
//       input.classList.add("no");
//     }

//     input.disabled = true;
//   });

//   if ([...currentInputs].every((input) => input.value !== "")) {
//     currentTry++;

//     currentTryDiv.classList.add("disabled-inputs");

//     if (currentTry === numbersOfTries + 1) return;

//     document
//       .querySelector(`.try-${currentTry}`)
//       .classList.remove("disabled-inputs");

//     enableInputs();
//     disableInputsInDisabledDiv();
//   }

//   if (userGuessWord.join("") === wordToGuess) {
//     alert("Win!");
//     setTimeout(() => {
//       window.location.reload();
//     }, 1000)
//   }
// }
function handleGuesses(e) {
  const btn = e.target;
  const currentDiv = document.querySelector(`.try-${currentTry}`);
  const currentInputs = currentDiv.querySelectorAll(`input`);
  const valueReduced = [...currentInputs].reduce(
    (curr, acc) => curr + acc.value.toLowerCase(),
    "",
  );
  const isWin = valueReduced === wordToGuess;

  if (isWin) {
    alert("Win");
    currentDiv.classList.add("disabled-inputs");
    disableInputsInDisabledDiv();
    btn.disabled = true;
    return;
  }

  for (let i = 0; i < numbersOfLetters; i++) {
    const input = currentInputs[i];
    const value = input.value.toLowerCase();
    const isEqual = value === wordToGuess[i];
    const isExist = wordToGuess.includes(value);

    if (value === "") continue;

    if (isEqual) {
      input.classList.add("yes-in-place");
      continue;
    }

    if (isExist) {
      input.classList.add("not-in-place");
      continue;
    }

    input.classList.add("no");
  }

  currentDiv.classList.add("disabled-inputs");
  disableInputs(currentInputs);

  currentTry++;

  if (currentTry > numbersOfTries) {
    alert("Loose");
    btn.disabled = true;
    return;
  }

  const nextDiv = document.querySelector(`.try-${currentTry}`);
  const nextInputs = nextDiv.querySelectorAll("input");

  nextDiv.classList.remove("disabled-inputs");
  enableInputs(nextInputs);
  nextDiv.children[1].focus();
}

function setHint(btn) {
  const span = btn.querySelector("span");

  span.textContent = numberOfHintTries;
}

function getHint(e) {
  const btn = e.currentTarget;

  if (checkInputsState()) {
    return;
  }

  let randomEntry;
  let inputGoal;

  do {
    randomEntry = [...wordToGuessObj.entries()][
      Math.floor(Math.random() * wordToGuessObj.size)
    ];
    const [index] = randomEntry;
    inputGoal = document.querySelector(
      `#guess-${currentTry}-letter-${index + 1}`,
    );
  } while (inputGoal.value !== "");

  const [index, letter] = randomEntry;

  wordToGuessObj.delete(index);

  inputGoal.value = letter.toUpperCase();
  inputGoal.classList.add("yes-in-place");

  numberOfHintTries--;
  setHint(btn);

  if (numberOfHintTries <= 0) {
    btn.disabled = true;
    return;
  }
}

function checkInputsState() {
  return [...document
    .querySelectorAll(`.try-${currentTry} input`)]
    .every(input => input.value !== "");
}
console.log(wordToGuess);
///-- Init --///
document.addEventListener("DOMContentLoaded", () => {
  generateInput();
  disableInputsInDisabledDiv();
  setHint(hintBtn);
});
