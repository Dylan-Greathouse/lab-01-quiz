// import functions and grab DOM elements
import { isAge, isCatOrDog, isLastName, isPetName, isYes, isNo } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
alert('Welcome!');



  //get the button element
  //add "click" event listener to the button
  // confirm the user wants to start the quiz
  // if they do- prompt for at least 3 questions and store the answer
  // for each answer, check if the user entered a correct value
  // at the end of the quiz, update the results section with the number of correct answers

const quizButton = document.getElementById('click-me');
const results = document.getElementById('results');

quizButton.addEventListener('click', ()=>{
    const confirmed = confirm('Would you like to start the quiz');
    if (confirmed){
        const ans = prompt('What is my last name');
        const ans1 = prompt('How old am I');
        const ans2 = prompt('Do I have a cat or a dog');
        const ans3 = prompt('What is the name of my pet?');
        const ans4 = prompt('Do I have dark color hair?');
        const ans5 = prompt('Am I a student at Alchemy Code lab?');
        const ans6 = prompt('Do I have a dog?');
        const ans7 = prompt('Do I like styling?');


        //console.log(ans, ans1, ans2, ans3, ans4, ans5, ans6, ans7);
      
        let score = 0;

        if (isLastName(ans)) {
            score++;
        }
        //console.log('score after checking ans', score);

        if (isAge(ans1)) {
            score++;
        }
        //console.log('score after checking ans1', score);

        if (isCatOrDog(ans2)) {
            score++;
        }
       // console.log('score after checking asn2', score);

        if (isPetName(ans3)) {
            score++;
        }
       // console.log('score after checking asn3', score);
        
        if (isYes(ans4)) {
            score++;
        }
       // console.log('score after checking asn4', score);
        
        if (isYes(ans5)) {
            score++;
        }
       // console.log('score after checking asn5', score);
        
        if (isNo(ans6)) {
            score++;
        }
        //console.log('score after checking asn6', score);
        
        if (isYes(ans7)) {
            score++;
        }
       // console.log('score after checking ans3', score);

        alert('Your Score', score);
        results.textContent = `You got ${score} right!`;
    } else {
       // console.log('user cancelled');
    }
});