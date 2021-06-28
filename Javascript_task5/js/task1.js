/* Question-1
Take an array of objects of employees created above and print those employees whose age is less than 50.
*/
let employees = [
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
    console.log(`answer-1 `);
    for (let i = 0; i < employees.length; i++) {
        const element = employees[i];
        if (element.empAge <= 50){
            console.log(element);
        }

    }
    



