var BTN = document.getElementById("btn");
const NAME = document.getElementsByClassName('name');

function sayHello(e){
    document.body.innerHTML = `Hello ${NAME[0].value} ${NAME[1].value}`;
}
function checkInput(e){
    
    if(NAME[0].value.length > 3 && NAME[1].value.length > 3){
          BTN.disabled = false;
          //BTN.addEventListener('click',sayHello);

      }
      else BTN.disabled = true;
    }
NAME[0].addEventListener('input',checkInput);
NAME[1].addEventListener('input',checkInput);
BTN.addEventListener('click',sayHello);

