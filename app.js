var readlineSync = require("readline-sync");

var chalk = require("chalk");

// var test = "test name"

// console.log(chalk.red(`${test}`))

var userName = readlineSync.question(
  chalk.bgYellow("Hello!! What's your name? ")
);

function welcomeMessage() {
  console.log(
    chalk.bgRed(
      `\n Hey ${userName}, Lets play a quiz game to check how much you know about Hero Prabhas \n`
    )
  );
}

var score = 0;

var highscoresArr = [
  {
    name: "Kore Padma",
    scored: "5",
  },
  {
    name: "Meghana Kore",
    scored: "4",
  },
];

var quesArr = [
  {
    question:
      "Name the debut movie of Prabhas? \n a: Varhsham \n b: Billa \n c: Eeswar \n Enter the option here: ",
    answer: "c",
  },

  {
    question:
      "What is the name of father of Prabhas? \n a: Suryanarayana Raju \n b: Dil raju \n c: Krishnam raju  \n Enter the option here: ",
    answer: "a",
  },

  {
    question:
      "For which movie did Prabhas get the Nandi award for the best actor? \n a: Bahubali \n b: Mirchi \n c: Billa \n Enter the option here: ",
    answer: "b",
  },

  {
    question:
      "In which year the debut movie of Prabhas released? \n a: 2002 \n b: 2003 \n c: 2004 \n Enter the option here: ",
    answer: "a",
  },

  {
    question:
      "What is the role of Prabhas in Mirchi Movie? \n a: Engineer \n b: Doctor \n c: Architect \n Enter the option here: ",
    answer: "c",
  },
];

function favGame(ques, ans) {
  var userAnswer = readlineSync.question(ques);

  if (userAnswer === ans) {
    score++;
    console.log(chalk.bgGreen("\n Great!! you are right... \n"));
  } else {
    console.log(chalk.bgRed(`\n Oops!! you are wrong!! \n`));
  }
}

function endMessage() {
  if (score == 5) {
    console.log(
      chalk.bgGreen(
        `${userName} Congrats!! you made an HighScore: ${score} \nTake a screenshot and send it for Yash to view your name in High score list..`
      )
    );
  } else {
    console.log(
      chalk.bgRed(
        `${userName} You have scored  ${score}, Try once again for highscore... \n`
      )
    );
  }

  // console.log(" \n High Scores: \n"+ highscoresArr[0].name + " Scored: " + highscoresArr[0].scored + "\n"+highscoresArr[1].name + " Scored: " + highscoresArr[1].scored )

  console.log(
    chalk.bgGray(
      `High Scores: \n ${highscoresArr[0].name} Scored: ${highscoresArr[0].scored} \n ${highscoresArr[1].name} Scored: ${highscoresArr[1].scored}`
    )
  );
}

welcomeMessage();

for (i = 0; i < quesArr.length; i++) {
  favGame(chalk.cyan(quesArr[i].question), quesArr[i].answer);
}

endMessage();