var name1 = window.prompt("enter your name: ");
var email = window.prompt("enter your mail adress: ");
var age = window.prompt("enter your age: ");
var adress = window.prompt("enter your permanent adress: ");
var phn_no = window.prompt("enter your phone no.:");
var gender = window.prompt("enter your gender: ");
//object
var employeeDetails = {
    name: null,
    email: null,
    gender: null,
    age: null,
    adress: null,
    phn_no: null
};
console.log(name1);
console.log(email);
console.log(age);
console.log(adress);
console.log(phn_no);
console.log(gender);
console.log(employeeDetails);
document.write("your name is: ",name1,"<br>");
document.write("your email is: ",email,"<br>");
document.write("your age is: ",age,"<br>");
document.write("your adress is: ",adress,"<br>");
document.write("your phn_no is: ",phn_no,"<br>");
document.write("your gender is: ",gender,"<br>");