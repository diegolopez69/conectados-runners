import {onClickEvent, selectedClassName} from '../const-variables';

const removeSelectedElement = () => {
  const [selectedList] = document.getElementsByClassName(selectedClassName);
    selectedList && selectedList.classList.remove(selectedClassName);
};

export const chooseTeam = (htmlElement) => {

  htmlElement.addEventListener(onClickEvent, () => {
    removeSelectedElement();
    const actualClass = htmlElement.classList;

    if (actualClass.contains(selectedClassName)) {
      htmlElement.classList.remove(selectedClassName);
      return;
    }

    htmlElement.classList.add(selectedClassName);
    return;
  });
};