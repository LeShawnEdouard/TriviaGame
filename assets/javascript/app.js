var card = $("#quiz-area");
var countStartNumber = 30;


// Question and answer array //
var questions = 
[
    {
    phrase: "Sugar, spice and everything nice",
    choices: ["Johnny Bravo", "I Am Weasel", "Powerpuff Girls", "Cow and Chicken"],
    correctAnswer: "Powerpuff Girls",
    image: "assets/images/powerpuff_girls.gif"
    },
    {
    phrase: "Long ago in a distant land, I, Aku, the shapeshifting master of darkness...",
    choices: ["Courage the Cowardly Dog", "Ed, Edd n Eddy", "Dexter's Laboratory", "Samurai Jack"],
    correctAnswer: "Samurai Jack",
    image: "assets/images/samurai_jack.gif"
    },
    {
    phrase: "Stupid dog, you make me look bad",
    choices: ["Total Drama", "Courage the Cowardly Dog", "Teen Titans", "The Flintstones"],
    correctAnswer: "Courage the Cowardly Dog",
    image: "assets/images/courage.gif"
    },
    {
    phrase: "I'm ugly and I'm proud",
    choices: ["Cow n Chicken", "Hey Arnold", "SpongeBob", "The Flintstones"],
    correctAnswer: "SpongeBob",
    image: "assets/images/spongebob.gif"
    },
    {
    phrase: "You set a beautiful table, my fair senorita",
    choices: ["Hey Arnold", "Tom and Jerry", "South Park", "The Jetsons"],
    correctAnswer: "Hey Arnold",
    image: "assets/images/arnold.gif"
    },
    {
    phrase: "Oh my God! They killed Kenny!",
    choices: ["Little Rugrats", "Sonic", "Teen Titans", "South Park"],
    correctAnswer: "South Park",
    image: "assets/images/south_park.gif"
    },
    {
    phrase: "Hey guys! What's big, round, and costs a nickel?",
    choices: ["The Simpsons", "Sonic", "Ed, Edd, n Eddy", "Pinky and The Brain"],
    correctAnswer: "Ed, Edd, n Eddy",
    image: "assets/images/eddy.gif"
    },
    {
    phrase: "Gee, Brain. What are we going to do tonight? The same thing we do every night, Pinky. Try to take over the world",
    choices: ["Samurai Jack", "Pinky and The Brain", "TaleSpin", "Arthur"],
    correctAnswer: "Pinky and The Brain",
    image: "assets/images/brain.gif"
    }
];

// Variable to hold our setInterval
var timer;

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].phrase + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].choices.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].choices[i]
      + "'>" + questions[this.currentQuestion].choices[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    card.html("<h2>Out of Time!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
    card.append("<img src='" + questions[this.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2>All done, heres how you did!</h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<img src='" + questions[game.currentQuestion].image + "' />");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});