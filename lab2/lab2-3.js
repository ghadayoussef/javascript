let sysInfo = {
    name: 'Mohamed',
    username: 'guacamole',
    password: 'noPassword'
};
let $wrongUsername = ()=>{
    alert("wrong username");    
}
let $wrongPassword = ()=>{
    alert("wrong password");
    
}
let $askPassword = (wrongPassword,$password,c)=>{
    while(c < 3){
        console.log("cnt_pass"+c);
        let p = prompt("enter password");
        if(p != $password ){
         wrongPassword();                
         c++;
        }
        else if(p == $password)break; 
    }
    return c;
}
let questions = ["what's your name?","How old are you?"];
function askQuestion($username,$password,wrongUsername,wrongPassword,$name,askPassword){
    var counter = 0;
    var isUserName;    
    do{
    var c;
    var countPass = 0;
    let userName = prompt("Enter Username");
    console.log(`this is the username ${userName}`);
    if(userName.toLowerCase() != $username.toLowerCase()){
          wrongUsername();
          counter++;
          continue;          
       }
    else{         
        isUserName = true;
        c = askPassword(wrongPassword,$password,countPass);       
    }
    if(c == 3)break;  
    let name = prompt(questions[0]);
    if(name.toLowerCase() != $name.toLowerCase()) {
        alert("your name is incorrect can't show you anything");
        break;
    }
    let age = prompt(questions[1]);
    if(age < 18){
        alert(`you are too young come again after ${18 - age} years`); 
        //counter++;
        break;
    }
    else if(age > 60){
        alert("it's too late forget about it");
        break;    
    }
    alert("Congrats you have reached the confidential infos");    
    console.log(counter);
    if(isUserName == true)break;
    }
    while(counter < 3);

}
askQuestion(sysInfo.username,sysInfo.password,$wrongUsername,$wrongPassword,sysInfo.name,$askPassword);