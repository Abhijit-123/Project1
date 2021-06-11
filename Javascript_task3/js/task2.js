/* Question- 2
 Take 3 numbers and print the biggest one amongst them
*/
let num1 = 11;
let num2 = 52;
let num3 = 33;

// find biggest number

if (num1>num2 && num1>num3){
    document.write(`num1 is the biggest number`);
}
else if (num2>num1 && num2>num3){
    document.write(`num2 is the biggest number`);
}
else{
    document.write(`num3 is the biggest number`);
}