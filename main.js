var question  = document.getElementById("question")
var button = document.getElementById("questionData")
var responses = ["It is decidedly so", "no", "Very doubtful"];

button.addEventListener("click", function () {
  if (question.value !== "") {
    alert(responses[Math.floor(Math.random() * 2)]);
  } else {
    alert("insert something into the text box");
  }
});
