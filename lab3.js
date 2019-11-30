////shift and pop 
let users = new Array();
for (i = 0; i < 5; i++){
    users.push("user no "+ (i+1));
}
console.log("primary users",users);
x = users.pop()
console.log("after pop",x);
y = users.shift();
console.log("after shift",y);
let after_unshift = users.unshift("new user");
console.log("users unshift result value",after_unshift);
console.log("users unshift function",users.unshift("new user"));
console.log(users);
/////////////////////for each
let cars = ["c1","c2","c3","c6","c7","c7"]
cars.forEach((element) =>{
    console.log(element);

});
///////fill
cars.fill("c5",0,3);
console.log("cars after fill",cars);
/////////find
let arr = [10, 20, 30, 40, 50, 90]
let moreThan20 = arr.find((element) =>{
      return element > 20;

});
/////filter
console.log(moreThan20);
let filter = arr.filter((element) => {
    return element > 20;
});
console.log(filter)
/////findIndex
let index = arr.findIndex((element) =>{
    return element > 40
})
console.log("findIndex",index);
/////copyWithin
var fruits = ["banana", "apple","Orange","Mango"];
// fruits.copyWithin(2,0,2);
// console.log(fruits);
fruits.copyWithin(2,0);
console.log(fruits);

//////////slice && splice
let songs = ["s1","s2","s3","s4","s5","s6","s7"]
console.log("slice function",songs.slice(0,3));
console.log("array after slice",songs);
console.log("splice function",songs.splice(0,3));
console.log(songs);
var myArray = ["apple","ball","cat"];
Array.prototype.foo = function(x) {
    console.log("print inside the custom function ",x);
    return this[0]
}
console.log("##############custom function foo",myArray.foo(5))
//////////////////////////////////////objects/////////////////////////////////////
let user = {
    firstname: "hello",
    lastname: "hola",
    age: 79,
    isActor: true,
    isSinger: true,
    canSing: (isSinger,acting) => {
        console.log(this.canAct(acting))
        if(isSinger) return true ;
        else return false;


    },
    canAct: (isActor) => {
        if(this.isActor) {
            this.isActor = true;
            return true;
        }
        else {
            this.isActor = false;
            return false;
        }

    }
}
user2 = Object.assign({ },user);
user2.isActor = false;
user2.isSinger = false;
console.log("hena el mafroud false",user2.canAct(false));
console.log("user.isActor",user2.isActor)
// console.log("hena el mafroud true",user2.canSing(true,false));
//////////////////freeze
let obj = {
    prop: 42,
    prop2: 5
  };
  
  Object.freeze(obj);
  obj.prop = 33;  
  console.log(obj.prop);
  obj["prop3"] = 4;
  console.log("hena el obj ba3d el freeze",obj);


//////////////seal

let obj2 = {
    prop: 42,
    prop2: 5
  };
  
  Object.seal(obj2);
  obj2.prop = 33;
  console.log(obj2.prop);
  obj2.prop3 = 4;
  console.log("hena el obj ba3d el freeze",obj2);




let shape = {
    area: "100",
    name: "square",
    length: "50"
};
circle = {}
circle.__proto__ = shape;
circle.area = "500";
circle.length = "40";
circle.name = "circle";
console.log(circle);





/////////////////set interval
let count = 0;
myVar = setInterval(function(){ 
    console.log("Hello"); 
    count++;
    if(count == 3)clearInterval(myVar);

}, 1000);
setTimeout(()=>{
    console.log("Hello from setInterval")
},2000);

var f = ["Banana", "Orange", "Apple", "Mango"];
var e = fruits.join(" and ");
console.log("energy",e)
console.log("typeof e",typeof(e))


var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log("numberrrsss",numbers);
console.log("mapppp",x);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join();
// console.log(typeof(energy))
//  var a = new Array();
//  a[0]=1; // fails silently
//  a.push(2); // fails silently
//  Object.freeze(a);

//  function fail() {
//   "use strict"
//    a[0] = 3;
//    a.push(4); }

//  console.log("array before freeze",fail());
//   a = [0];
//  Object.freeze(a); // The array cannot be modified now.
//  console.log("array after freeze",a)
 