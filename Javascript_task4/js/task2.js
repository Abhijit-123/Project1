/* Question - 2
Print fibonacci series upto first 10 numbers.
*/
let n1 = 0, n2 = 1, nextNum;

document.write('Fibonacci Series upto 10 numbers:');

for (let i = 1; i <= 10; i++) {
    document.write(`<br>${n1}`);
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
}