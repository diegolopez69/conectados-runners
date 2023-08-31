export function moveForward(htmlElement) {
  const style = window.getComputedStyle(htmlElement);

  let actualLeftValue = parseInt(
    style.getPropertyValue("left").replace("px", ""),
    0
  );
  let newValueLeft = actualLeftValue;

  const intervalClock = setInterval(movingToRight, 30);

  function movingToRight() {
    newValueLeft += 20;
    htmlElement.style.left = `${newValueLeft}px`;

    if (actualLeftValue + 100 < newValueLeft) clearInterval(intervalClock);
  }
}

export function moveBackward(htmlElement) {
  const style = window.getComputedStyle(htmlElement);

  let actualLeftValue = parseInt(
    style.getPropertyValue("left").replace("px", ""),
    0
  );
  let newValueLeft = actualLeftValue;

    const intervalClock = setInterval(movingToRight, 30);

  function movingToRight() {
   if (actualLeftValue < 100) {
    clearInterval(intervalClock);
    return;
   } 
    newValueLeft -= 20;
    htmlElement.style.left = `${newValueLeft}px`;

    if (actualLeftValue > newValueLeft + 100) clearInterval(intervalClock);
  }
}
