
var cereal = ["cheerios", "wheaties", "trix", "chex", "luckycharms", "crispix", "ricekrispies", "life", "total", "honeycomb", "frootloops", "cocoapuffs"]
var wins = 0;
var losses = 0;
var lives = 10;
var answerArray = [];
var userGuessArray = []
var split = []

//create variables for linking to the html
var guessNum = document.getElementById("guessNum");
var letGuess = document.getElementById("letGuess");
var currentWord = document.getElementById("currentWord");
var winner = document.getElementById("winner");
var loser = document.getElementById("loser");
var images = document.getElementById("image")
var cerealMp3 = document.getElementById("cerealmp3")

//computer randomly selects word from cereal array
var computerGuess = cereal[Math.floor(Math.random() * cereal.length)];
var split = computerGuess.split("")

// inputs "_" on page as a placeholder for the current word's letters
for (var i = 0; i < split.length; i++) {
    answerArray[i] = "_";
}
currentWord.textContent = answerArray;

//sets up start of the game with 0 wins, 0 losses, 10 lives
guessNum.textContent = lives;
winner.textContent = wins;
loser.textContent = losses;

// function to reset data on page
function pageReset() {
    computerGuess = cereal[Math.floor(Math.random() * cereal.length)];
    split = computerGuess.split("");
    answerArray = [];
    userGuessArray = [];
    lives = 10;
    letGuess.textContent = "_";
    guessNum.textContent = lives;
    for (var i = 0; i < split.length; i++) {
        answerArray[i] = "_";
    }
    currentWord.textContent = answerArray;
    console.log(computerGuess)
}

//create user key press event
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    //checks if letter pressed is within word. if it is then the letter will be displayed on page under current word
    for (var j = 0; j < split.length; j++) {
        if (split[j] === userGuess) {
            answerArray[j] = split[j];
            currentWord.textContent = answerArray.join(" ");
        }
    }

    //if user guessed letter is not within word answer, number of guesses remaining decreases by 1 
    //and incorrect letter is displayed on page as letters already guessed 
    if (split.indexOf(userGuess) === -1) {
        userGuessArray.push(userGuess + "," + " ");
        letGuess.textContent = userGuessArray.join(" ");
        lives--;
        guessNum.textContent = lives;
    }


    //increases losses by 1 when guesses left equal 0
    if (lives <= 0) {
        images.src = "assets/images/gameover.jpg"
        losses++;
        loser.textContent = losses;
        pageReset()
        setTimeout(function() { 
            alert("Sorry you lost! better luck next time. Click ok to try again"); 
        }, 1000);
       
    }
    //when all letters of current word are guessed correctly, add 1 to wins and change image to cereal guessed
    else if (answerArray.indexOf("_") === -1) {
        wins++
        winner.textContent = wins;
        cerealMp3.play()
        cerealMp3.duration = 3;

        if (computerGuess === cereal[0]) {
            images.src = "assets/images/cheerios.jpg"
        }
        else if (computerGuess === cereal[1]) {
            images.src = "assets/images/wheaties.png"
        }
        else if (computerGuess === cereal[2]) {
            images.src = "assets/images/trix.jpg"
        }
        else if (computerGuess === cereal[3]) {
            images.src = "assets/images/chex.jpeg"
        }
        else if (computerGuess === cereal[4]) {
            images.src = "assets/images/luckycharms.jpeg"
        }
        else if (computerGuess === cereal[5]) {
            images.src = "assets/images/crispix.jpeg"
        }
        else if (computerGuess === cereal[6]) {
            images.src = "assets/images/ricekrispies.jpeg"
        }
        else if (computerGuess === cereal[7]) {
            images.src = "assets/images/life.jpeg"
        }
        else if (computerGuess === cereal[8]) {
            images.src = "assets/images/total.jpg"
        }
        else if (computerGuess === cereal[9]) {
            images.src = "assets/images/honeycomb.jpeg"
        }
        else if (computerGuess === cereal[10]) {
            images.src = "assets/images/frootloops.jpg"
        }
        else if (computerGuess === cereal[11]) {
            images.src = "assets/images/cocoapuffs.jpeg"
        }
        pageReset()
        setTimeout(function(){ alert("Congratulations! You won! click ok to play again."); }, 1000);
        console.log(pageReset)
    }

    //console logging
    console.log(userGuess)
    console.log(split)
    console.log(cerealMp3)
}

