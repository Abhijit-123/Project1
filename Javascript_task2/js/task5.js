/*
Take 2 boolean variables as true and false and perform And and Or logical operation over them and print the result as well as operation
*/
let T= true;
let F= false;

//logical Or
document.write(`true Or true is = ${T||T} <br>`);
document.write(`true Or false is = ${T||F} <br>`);
document.write(`false Or true is =${F||T} <br>`);
document.write(`false Or false is =${F||F} <br>`);

//logical And
document.write(`true And true is =${T&&T} <br>`);
document.write(`true And false is =${T&&F} <br>`);
document.write(`false And true is =${F&&T} <br>`);
document.write(`false And false is =${F&&F} <br>`);
