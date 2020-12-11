// importings
const chalk = require('chalk');
const readLineSync = require('readline-sync');
const alignText = require('align-text');
const ora = require('ora');

//Global variable declaration
let scores = [0,0,0,0]
const log = console.log

// To greet the user
function greeting(){
  //log(chalk.blue("==================================================\n"));
  
  log(chalk.yellowBright.bold.bgBlack.underline("POTTERMORE QUIZ 2020 Edition"));
  
  //log(chalk.blue("==================================================\n"));

  log(`
This is the official ` + chalk.redBright.bold.bgBlack("Pottermore Sorting Hat QUIZ 2020") + ` that you often see in Pottermore. This Quiz contains all the questions about the Sorting Hat asks on Pottermore to sort you into your deserving House.

Don't forget to answer the questions honestly. Play this quiz and find out which house best matches you. Have fun!!

`);

  //log(chalk.blue("==================================================\n"));

  while(true){
    let userName = readLineSync.question(chalk.bold(
    `Hey ${chalk.magentaBright.bold('Potterhead')}; Before we start, May I have your name? `));
    if(userName !== ""){
      return userName;
    }
    else{
      console.log("Whoops :(  Try again \n");
    }
  }
}

function getRandomColor(){
  lis = ['red', 'green', 'yellow', 'blue','magenta','cyan']
  const randomElement = lis[Math.floor(Math.random() * lis.length)];

  return randomElement;
}



function quizQuestionPrint(question, no){
  let color = getRandomColor();
  let answer = readLineSync.question(chalk.bold.keyword(color)(no.toString() + ". ") + chalk.underline.bold.keyword(color)(question.question) +  question.options + "\n" + `${chalk.bold.keyword('orange')("Your Answer: ")}`);
  let index = 0;
  if(answer === "A"){
    index = 0;
  }
  else if(answer === "B"){
    index = 1;
  }
  else if(answer === "C"){
    index = 2;
  }
  else if(answer === "D"){
    index = 3;
  }
  else{
    log(chalk.bold.red("Oops, seems an invalid choice!\n"));
    quizQuestionPrint(question, no);
  }

  return index; 
  }

function quizScoreIncrement(index){
  scores[index]+=1;    
}

function quizQuestionFlow(question, no){
  index = quizQuestionPrint(question, no);
  quizScoreIncrement(index);
  console.log("\n");
}

function findMax(lis){
  let max = -1
  let max_index = 0
  for(let i=0; i<lis.length; i++){
    if(max < lis[i]){
      max = lis[i];
      max_index = i; 
    }

  }
  return max_index
}

function housePrint(index){
  if(index === 0){
    slytherin();
  }
  else if(index === 1){
    gryffindor(); 
  }
  else if(index === 2){
    hufflePuff();
   
  }
  else if(index === 3){
    ravenClaw(userName);
  }
}

function slytherin(){
  console.log(`${chalk.underline.bold.yellowBright('Sorting Hat🎩 says:')}
Congratulations ${chalk.italic.blue(userName)}! You belong to ${chalk.bold.bgGreenBright('Slytherin')}.

${chalk.underline.bold.bgMagenta('We have found some few amazing facts about your personality as a Slythernin:')}

${chalk.italic.green(`"Or perhaps in Slytherin you will make your real friends, those cunning folk use any means to achieve their end
-from Harry Potter and the Sorcerer’s Stone"`)}

You will acheive goals through any means necessary. You are dominant,decisive, active, and results-driven.  To you, it is better to ask for forgiveness than permission. 

You would rather lead than follow, and they are very self-confident. Highly competitive, You are active and task-oriented. You are risk-takers and problem solvers. You don’t care if they are liked, they care if they are in control.`);
}


function gryffindor(){
  console.log(`${chalk.underline.bold.yellowBright('Sorting Hat🎩 says:')}
Congratulations ${chalk.italic.blue(userName)}! You belong to ${chalk.bold.bgRed('Gryffindor')}.

${chalk.underline.bold.bgMagenta('We have found some few amazing facts about your personality as a Gryffindor:')}

${chalk.red.italic(`“You might belong in Gryffindor, where dwell the brave at heart. Their daring , nerve, and chivalry set Gryffindors apart.”
- from Harry Potter and the Sorcerer’s Stone`)}

You are Inflential. Optimistic, brave, and motivational, it is not hard to imagine that “the Chosen One” came from the ranks of this house. Chivalry also numbers amongst the traits of this house/personality style. 

You are Inspiring, talkative, persuasive, interesting, and people-oriented, You just love being in the limelight. Nothing makes you happier than when your bold-colored banners are flying in the Great Hall because you just won the House Cup.`);
}

function ravenClaw(){
  console.log(`${chalk.underline.bold.yellowBright('Sorting Hat🎩 says:')}
Congratulations ${chalk.italic.blue(userName)}! You belong to ${chalk.bold.bgYellowBright('Ravenclaw')}.

${chalk.underline.bold.bgMagenta('We have found some few amazing facts about your personality as a RavenClaw:')}

${chalk.yellowBright.italic(`“Or yet in wise old Ravenclaw, if you’ve a ready mind, Where those of wit and learning, will always find their kind.”
- from Harry Potter and the Sorcerer’s Stone`)}

You are task-oriented, and for the Ravenclaws this means working very hard to achieve good grades. You are analytical, systematic, and calculating. You excel at puzzles and at improving upon existing systems. 

Open-minded to new possibilities, you are excellent problem-solvers because you pay attention to details and see the things that no one else sees. But fun fact is, hardly any Ravenclaw actually identifies his/her potential. You are amazing, pen my words down! `);
}

function hufflePuff(){
   console.log(`${chalk.underline.bold.yellowBright('Sorting Hat🎩 says:')}
Congratulations ${chalk.italic.blue(userName)}! You belong to ${chalk.bold.bgBlue('Hufflepuff')}.

${chalk.underline.bold.bgMagenta('We have found some few amazing facts about your personality as a Hufflepuffian:')}

${chalk.blue.italic(`“You might belong in Hufflepuff, where they are just and loyal, those patient Hufflepuffs are true and unafraid of toil.”
- from Harry Potter and The Sorcerer’s Stone`)};

You are smart, steady and thoughtful. You are loyal, true friends, and steadfast. You are quite reliable, slow and steady, and very hard workers. You always desire to have security, stability, and a team-oriented atmosphere. 

Sure, you don’t tend to win the Quidditch Cup, but you’re just happy that everyone had a good time playing and no one got hurt. You love to be in the moment and enjoy it to the fullest. Less competent, pure excellence.`);
}


let questions = [
  {
    question:"What would you least liked to be called?",
    options: "\nA. Ignorant\nB. Cowardly\nC. Selfish\nD. Ordinary\n"  
  },
  {
    question:"When you’re dead, what do you want people do when they think of you?",
    options: "\nA. Miss me and smile\nB. Think of my achievements\nC. Tell stories about my adventures\nD. I don’t care what people think of me when I’m dead; it’s when I’m alive that counts.\n"  
  },
  {
    question:"If you could make a potion that would guarantee you one thing, what would it be?",
    options: "\nA. Love\nB. Glory\nC. Wisdom\nD. Pride\n"  
  },
  {
    question:"Which instrument is most pleasing to your ear?",
    options: "\nA. Violin\nB. Piano\nC. Drums\nD. Trumpet\n"  
  },
  {
    question:"What smell is most appealing to you?",
    options: "\nA. Home\nB. The Sea\nC. Mountain\nD. Fragrant Potions from Secret Garden\n"  
  },
  {
    question:"Which of the following do you have the most trouble dealing with?",
    options: "\nA. Anger\nB. Loneliness\nC. Being Ignored\nD. Defeat/Failures\n"  
  },
  {
    question:"If you could have a superpower, which would you choose?",
    options: "\nA. Read minds\nB. Invisibility\nC. Change the Past\nD. Superstrength\n"  
  },
  {
    question:"Which of the following would you most like to save your friends from?",
    options: "\nA. Dark Lords\nB. Werewolves\nC. Vampires\nD. Goblins\n"  
  },
  {
    question:"Which subject at Hogwarts would you be most interested in studying?",
    options: "\nA. Secrets about the Castle\nB. Transmigration\nC. Qwidditch\nD. Potion Making\n"  
  },
  {
    question:"Which is the spell that you use most of the time?",
    options: "\nA. Alohomora\nB. Expelliarmus\nC. Avada Kedavra\nD. Expecto Patrnonum\n"  
  },
  {
    question:"Which nightmare would scare you most?",
    options: "\nA. None of your friends or family know who you are\nB. Being trapped in a dark room with an eye peering at you through a keyhole\nC. Being caught up high with no handholds\nD. Being forced to speak in a funny voice so that everyone laughs at you\n"  
  },
  {
    question:"You’re walking down the street late at night and hear a cry that you’re fairly sure has a magical source. What do you do?",
    options: "\nA. Withdraw into the shadows, reviewing offensive and defensive spells that might be appropriate\nB. Draw your wand and try to discover the source\nC. Proceed with caution, keeping a hand on your still-concealed wand\nD. Draw your wand and stand your ground\n"  
  },
  {
    question:"If you could pick any House to be Sorted into, which would you pick?",
    options: "\nA. Slytherin\nB. Gryffindor\nC. HufflePuff\nD. Ravenclaw\n"  
  },

]

let userName = greeting()
log(`
Please consider answering the following questions! Press 'Q' to Quit anytime out of the QUIZ.

${chalk.bold.bgBlack.green.underline('QUESTIONS')}

`)
// questions.forEach((question, index) => quizQuestionFlow(question,index+1));
scores = [9,7,5,4]
housePrint(findMax(scores))


// const throbber = ora({
//   text: ' Sorting Hat is analyzing your answers. Please Wait...',
//   spinner: {
//     frames: ['🎩', '🌠', '🍷', '🐍'],
//     interval: 300, // Optional
//   },
// }).start();

// // Simulating some asynchronous work for 10 seconds...
// setTimeout(() => {
//   throbber.stop();
// }, 1000 * 10);









