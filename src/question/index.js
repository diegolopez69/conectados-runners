import questions from '../../questions.json';
import answerQuestion from './answer';
import { chooseTeam } from './choose-team';

const mainLogic = (questionNo = 0) => {
  const questionList = questions.bible;

  const [questionContainer] = document.getElementsByClassName('question-container');
  questionContainer.innerHTML = questionList[questionNo].question;

  const [answerA, answerB, answerC, answerD] = document.getElementsByClassName('answer-button');

  
  [answerA, answerB, answerC, answerD].forEach((value, index) => {
    value.innerHTML = `${questionList[questionNo].answers[index][1]}` ;
    value.setAttribute('data-value', questionList[questionNo].answers[index][0]);
    questionNo === 0 && answerQuestion(value);
  });

  localStorage.setItem('questionNumber', questionNo);
};

export const chooseFunction = chooseTeam;
export default mainLogic;