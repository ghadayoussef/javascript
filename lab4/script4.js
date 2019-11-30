// const names = document.getElementsByClassName('name')
// var BTN = document.getElementById("btn");
// console.log(typeof(names));
// names.forEach(item) =>{
//     console.log()
// }

let inputs = document.getElementsByClassName('name');
const BTN = document.getElementById("btn");
BTN.disabled = true;
console.log(inputs.length);
console.log("input type",typeof(inputs));
console.log(Array.from(inputs));
names = Array.from(inputs);
console.log(typeof(names));
var flag = 0;
var values = [];
names.forEach(element => {
    element.addEventListener('input',() => {
            
            values.push(element);
            console.log("hi");
            // if(element.value > 3){
            //     flag++;

            // }
            //,element.value);
           // element.value.forEach(v => values.push(v.value))
//     knapp.disabled = values.includes('')

})
});

console.log("values length",values.lengt);

// for (i = 0; i < inputs.length; i++) {
//   inputs[i].addEventListener('input',() => {
//     let values = []
//     inputs.forEach(v => values.push(v.value))
//     knapp.disabled = values.includes('')
//   })
// }
//inputs.forEach(v => values.push(v.value));