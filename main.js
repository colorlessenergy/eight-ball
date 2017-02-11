var question  = document.getElementById("question");
var button = document.getElementById("questionData");
var showQuestion = document.getElementById("showQuestion");
var showAnswer = document.getElementById("answer");
var responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it",
                 "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
                 "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
                 "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
button.addEventListener("click", function (e) {
    if (question.value !== "") {
      switch (question.value.toLowerCase()) {
        case "who are you":
        showQuestion.innerHTML = "Question: " + question.value;
        showAnswer.innerHTML = "Answer: " +  "the magical 8-Ball";
        break;
        default:
        showQuestion.innerHTML = "Question: " + question.value;
        showAnswer.innerHTML = "Answer: " + responses[Math.floor(Math.random() * responses.length-1)];
      }
    } else {
      showQuestion.innerHTML = "insert something into the textbox"
      showAnswer.innerHTML = "insert something into the textbox"
    }
    question.value = "";
});

question.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    button.click();
}
});
