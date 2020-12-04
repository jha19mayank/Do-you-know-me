var readlineSync = require('readline-sync');

const chalk = require('chalk');

var score = 0;

console.log(chalk.green('Welcome to the show! How much do you know me?? '))
 
var userName = readlineSync.question('May I have your name?   ');
console.log('Hello  ' + chalk.magenta(userName) + '  Welcome onboard!');
console.log('-------------------------------------------');

// function definition

function quiz(question , answer){
 var userAnswer = readlineSync.question(question);

 if(userAnswer.toLowerCase() === answer.toLowerCase()) 
  {
   console.log(chalk.green('Correct!'));
   score++;
   console.log(chalk.green('your score is:',score));
  } 

 else
  {
   console.log(chalk.redBright('Wrong! No load get in touch to know me.'));
   console.log('your score is:' + score );
  }
 
 console.log('***********************************')
}
 

quiz('Am I older than 20?  ', 'no');
quiz('Where do i live?  ', 'delhi');
quiz('Am I an introvert or an extrovert? ', 'introvert');
quiz('What is my zodiac sign? ', 'leo');
quiz('Do I like hills or oceans? ', 'hills');
quiz('Do I like tea or coffee? ', 'coffee');
quiz('Where do I study? ', 'Srm');
quiz('Do i like to attend all the classes in college or no? ', 'no');
quiz('What is my branch? ','ece');
quiz('What i like most Pizza or burger? ', 'Pizza');


console.log(' ');
console.log(chalk.bgYellow('Do not forget to send the screenshot of your score!!'));

if(score===10){
 console.log('you know me very well! You are my chuddy buddy!');
}
else if 
  (score===9|| score===8||score===7)

console.log('you are in my best friend category!')
 else{
   console.log(chalk.bgRed('you need to know me!!'))
   }
