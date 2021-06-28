/* Question -4
Create a function that takes 2 parameter => an array of employees and an attribute and returns all employees
sorted based on the emoplees attribute being passed as second parameter.
*/
let employees2 = [
    {
        empName : 'Abcd',
        empAge : 25,
        empPhnNo : 8394274710,
        empAdress : 'dsjiejf'
    },
    {
        empName : 'Efgh',
        empAge : 52,
        empPhnNo : 8371046372,
        empAdress : 'ffhdjeis'
    },
    {
        empName : 'Mnop',
        empAge : 35,
        empPhnNo : 2748521710,
        empAdress : 'adkfiejf'
    },
    {
        empName : 'Qrst',
        empAge : 58,
        empPhnNo : 8398928450,
        empAdress : 'ghjrijf'
    },
    {
        empName : 'Wxyz',
        empAge : 46,
        empPhnNo : 8392374710,
        empAdress : 'dtfiejf'
    }
];

let sortEmp = (arr, attr) => {
    let temp = attr;
    arr.sort((a, b) => a.temp - b.temp);
}
console.log(`answer- 4` );
console.log(sortEmp(employees2, empAge));
