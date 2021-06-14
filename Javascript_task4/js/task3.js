/* Question-3
Print all the keys and values of employee object used in first problem
*/

let employeeDetails = {
    name: 'x-men',
    email: 'xyz@gmail.com',
    gender: 'male',
    age: 30,
    adress: 'abcd',
    phnNo: 1234567890
};
for (var key in employeeDetails) {
        document.write(`${key}  =>  ${employeeDetails[key]} <br>`);
    }