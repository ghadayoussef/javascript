const CAT = document.getElementById("cat");
var image;
var moving = false;
function move(event){
  var x = event.clientX * 100 / window.innerWidth - 10 + "%";
  var y = event.clientY * 1000 / window.innerHeight - 10 + "%";

  // var x = (event.clientX -5) / window.innerWidth  +'px';
  // var y = (event.clientY - 5)/ window.innerWidth  +'px';
  console.log("hena xxx",x);
  console.log("hena client x",event.clientX);                    
  console.log("hena yyyyy",y);
  console.log("hena client y",event.clientY);
  CAT.style.left = x;
  CAT.style.top = y;
  CAT.style.transform = "translate(+"+x+",+"+y+")";  
}

CAT.addEventListener("mousemove", move);

