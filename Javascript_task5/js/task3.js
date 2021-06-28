/* Question- 3
Create a function that takes 2 parameter => an array of employees and age and returns all employees whose age is 
less than input age.
*/
let employees1 = [
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
]
// using arrow function
let findEmp=(arr, age) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element.empAge <= age){
            console.log(element);
        }
    }
}
console.log(`answer -3 `);
findEmp(employees1,80);