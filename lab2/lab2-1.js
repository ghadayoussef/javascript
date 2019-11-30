
do{
    var age = +prompt("Please enter your age");
    if(age < 0)alert("enter your real age");
    else if(age > 1 && age < 10) alert("Child");
    else if(age >= 10 && age < 15) alert("Teenage");
    else if(age >= 15 && age < 19)alert("young");
    else if(age >=19 && age < 60)alert("Adult");
    else if(age >= 60)alert("Elder");
}while(age);

