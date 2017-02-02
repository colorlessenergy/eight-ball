var question  = document.getElementById("question");
var button = document.getElementById("questionData");
var showQuestion = document.getElementById("showQuestion");
var showAnswer = document.getElementById("answer");
var responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it",
                 "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
                 "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
                 "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
console.log(responses.length);
button.addEventListener("click", function () {
  if (question.value !== "") {
    showQuestion.innerHTML = question.value;
    showAnswer.innerHTML = responses[Math.floor(Math.random() * responses.length-1)];
  } else {
    alert("insert something into the text box");
  }
});
