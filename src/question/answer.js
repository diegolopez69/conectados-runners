import mainLogic from '.';
import questions from '../../questions.json';
import {onClickEvent} from '../const-variables';
import { moveForward, moveBackward } from '../moves';

const verifyAnswer = (number, htmlElement) => {
  const questionNumber = parseInt(localStorage.getItem('questionNumber'), 10);
  const {answers} = questions.bible[questionNumber];

  if (answers[number][2]) {
    moveForward(htmlElement);
    mainLogic(questionNumber + 1);
    return;
  }

  moveBackward(htmlElement);
  mainLogic(questionNumber + 1);
  return;
};

export default (htmlElement) => {
  htmlElement.addEventListener(onClickEvent, () => {
    const answer = htmlElement.getAttribute('data-value');
    const [runner] = document.getElementsByClassName('selected');
    if (runner) {
      switch(answer) {
        case 'A':
          verifyAnswer(0, runner);
          return;
        case 'B':
          verifyAnswer(1, runner);
          return;
        case 'C':
          verifyAnswer(2, runner);
          return;
        case 'D':
          verifyAnswer(3, runner);
          return;
          default:
            return;
      }
    }
  });
};