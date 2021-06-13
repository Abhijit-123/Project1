/* Question- 3
Use switch case to return a grade for the score, either "A", "B", "C", "D", or "F". (Take convension for numbers
and grades by yourself)Anything below 50 is F.
*/
let marksParcent = window.prompt(`enter marks percentage`);
marksParcent = Number(marksParcent);
let grade;
let result;

    if(marksParcent>80){
        grade='A';
    }
    else if(marksParcent>70 && marksParcent<=80){
        grade='B';
    }
    else if(marksParcent>60 && marksParcent<=70){
        grade='C';
    }
    else if(marksParcent>50 && marksParcent<=60){
        grade='D'
    }
    else{

        grade='F'
    }
    //Use Switch Case
    switch(grade){  
        case 'A':  
        result="A Grade";  
        break;  
        case 'B':  
        result="B Grade";  
        break;  
        case 'C':  
        result="C Grade";  
        break; 
        case 'D':  
        result="D Grade";  
        break; 
        case 'F':  
        result="F Grade";  
        break;  
        default:  
        result="No Grade";  
        } 
        
    document.write(result);
