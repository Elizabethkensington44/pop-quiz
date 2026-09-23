const username = prompt("what is your name");
alert(`Hello, ${username}!`);

let score = 0;

let answerInput;
let answer;

// Question 1
answerInput = prompt(`Is the sky blue?
[1] true
[2] false
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 2) {
  alert("Please enter 1 or 2.");
} else {
  if (answer === 1) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

// Question 2
answerInput = prompt(`what animal says meow?
[1] dog
[2] pig
[3] cat
[4] cow
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 4) {
  alert("Please enter 1, 2, 3, or 4.");
} else {
  if (answer === 3) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

// Question 3
answerInput = prompt(`What is 2 + 2?
[1] 4
[2] 3
[3] 5
`);
answer = Number(answerInput);
if (Number.isNaN(answer)) {
  alert("Please enter a number.");
} else if (answer < 1 || answer > 3) {
  alert("Please enter 1, 2, or 3.");
} else {
  if (answer === 2) {
    alert("Correct!");
    score = score + 1;
  } else {
    alert("Incorrect.");
  }
}

alert(`You've finished the popquiz.
Your final score is ${score} out of 3.
`);

if (score === 0) {
  alert("good luck next time!");
} else if (score === 3) {
  alert("Yay!!");
} else {
  alert("better luck next time!");
}
