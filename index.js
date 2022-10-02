var readlinesync = require('readline-sync');
var userName = readlinesync.question("What is your name?");
console.log("Welcome " + userName + " do you know Nikhil? Lets see");
var score = 0;
function play(question, answer) {
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer) {
    console.log("Yes! You are right.");
    score = score + 1;

  }
  else {
    console.log("Wrong Answer!!!");
  }
  console.log("Wow! you scored :", score);

}


var ques = [{
  question: "Which is Nikhil's favourite cartoon?",
  answer: "Oggy"
}, {
  question: "Which is Nikhil's favurite tv show?",
  answer: "WWE"
}, {
  question: "Which super hero does he like?",
  answer: "Ironman"
}, {
  question: "Which car company he likes most?",
  answer: "Rolls-Roys"
}, {
  question: "Which brand's laptop Nikhi uses?",
  answer: "Dell"
}];
for (var i = 0; i < ques.length; i++) {
  play(ques[i].question, ques[i].answer);
}