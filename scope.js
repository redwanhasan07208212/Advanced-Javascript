const bonus = 20 
// This is global variable.

function sum(firstNum,secondNum)
{
    const result = firstNum+ secondNum;
    if(result>10)
    {
        let mood = 'snicky';
        mood = 'playboy';
        mood = 'shitMan';
        console.log(mood);
    }
    return result;
}

const result = sum(7,5);
console.log(result);
// thatdudejs.com (website name)
