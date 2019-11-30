let message = prompt("Enter a message please");
let i = 0;
let vowelSum = 0;
let vowels = "aieou".split('');
while (i < message.length){
    if(vowels.indexOf(message.charAt(i)) != -1)vowelSum++;
    i++;
}

// while(i < message.length){
    
//     if ( message.charAt(i) == 'e'|| message.charAt(i) =='a'||  message.charAt(i) =='i'||  
//          message.charAt(i) =='o'||  message.charAt(i) =='u'|| message.charAt(i) == 'y'){
//         console.log(message.charAt(i));
//         vowelSum++;

//     }
    
//     i++;
// }
alert(`number of vowels = ${vowelSum}`);