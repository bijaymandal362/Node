const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let total= 0;
function getNumber(){

    readline.question("Enter a number: ", number=>{
        if(number == "stop"){
            console.log(`The sum of number is : ${total}`);
        }else{
            if(parseInt(number))
            total += parseInt(number);
           // process.nextTick(getNumber);
           getNumber();
        }
    });
};
getNumber();