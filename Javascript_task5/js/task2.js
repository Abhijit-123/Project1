/* Question- 2
Create a function that takes a number and prints all even numbers upto that number
*/

let findEven= () => {
    let num = window.prompt(`enter a number`);
    for (let i = 1; i <= num; i++) {
        if (i%2 == 0) {
            document.write(`${i} <br>`);
        }
        
    }
}
findEven();