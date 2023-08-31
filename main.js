import './style.css'
import runner from './runner.svg';
import question, {chooseFunction} from './src/question'

document.querySelector('#app').innerHTML = `
  <div class='container'>
    <div class='item justify-center'>
      <div class='logo'>
        <img src='./logo.png' height='150' width='150'/>
      </div>
    </div>
    <div class='item justify-center'>
      <div class='question-container'>Question test loremp ipsum test large</div>
    </div>
    <div class='item justify-center'>
      <div class='answer-container justify-center'>
        <div><button class='answer-button a'>Answer 1</button></div>
        <div><button class='answer-button b'>Answer 2</button></div>
        <div><button class='answer-button c'>Answer 3</button></div>
        <div><button class='answer-button d'>Answer 4</button></div>
      </div>
    </div>
    <div class='item separator'></div>
    <div class='item track'>
      <div class='cars' id=runner><img src=${runner} alt='runner_1' height='70' width='100'/></div>
    </div>
    <div class='item track'>
      <div class='cars' id=runner_2><img src=${runner} alt='runner_2' height='70' width='100'/></div>
    </div>
    <div class='item track'>
      <div class='cars' id=runner_3><img src=${runner} alt='runner_3' height='70' width='100'/></div>
    </div>
    <div class='item track'>
      <div class='cars' id=runner_4><img src=${runner} alt='runner_4' height='70' width='100'/></div>
    </div>
  </div>    
`
question();
['#runner', '#runner_2', '#runner_3', '#runner_4'].forEach(r => chooseFunction(document.querySelector(r)));