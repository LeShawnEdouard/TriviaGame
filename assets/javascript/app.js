
// Question and answer array //
var questions = 
[
    {
    phrase: "Sugar, spice and everything nice",
    choices: ["Johnny Bravo", "I Am Weasel", "Powerpuff Girls", "Cow and Chicken"],
    answer: 2
    },
    {
    phrase: "Long ago in a distant land, I, Aku, the shapeshifting master of darkness...",
    choices: ["Courage the Cowardly Dog", "Ed, Edd n Eddy", "Dexter's Laboratory", "Samurai Jack"],
    answer: 3
    },
    {
    phrase: "Supid dog, you make me look bad",
    choices: ["Total Drama", "Courage the Cowardly Dog", "Teen Titans", "The Flintstones"],
    answer: 1
    }
];

// Function to set the game //
function setGame()  {
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unanswered = 0
}


// Function to start the game //
$(".btn").on("click", function () {

  for (var i = 0; i < questions.length; i++) {
  var display = $("#question").text(questions[i]);

  // ($(this).text(question.phrase),
  console.log(questions);
  }

  
  // $("#questions").append(questions);


  // setGame();
  // console.log(setGame);





});