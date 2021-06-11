/* Question- 3
Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers
and grades by yourself)Anything below 50 is F.
*/
let marksP = window.prompt(`enter marks percentage`);
let marksParcent = parseInt(marksP);

    if(marksParcent>80){
        document.write(`Your obtain grade is A`);
    }
    else if(marksParcent>70 && marksParcent<=80){
        document.write(`Your obtain grade is B`);
    }
    else if(marksParcent>60 && marksParcent<=70){
        document.write(`Your obtain grade is C`);
    }
    else if(marksParcent>50 && marksParcent<=60){
        document.write(`Your obtain grade is D`);
    }
    else{
        document.write(`Your obtain grade is F`); 
    }
