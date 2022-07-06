2. //Write a function printNumbers (from, to) that outputs a number every second, starting from "from" and ending with "to".
                   
function printNumbers (from, to) {
    let timerID = setInterval(()=>{
        if(from > to) clearInterval(timerID);
        else console.log(from++);
    }, 1000);
}

3. //In the code below there is a setTimeout call scheduled, then a heavy calculation is run, that takes more than 1000ms to finish

let i = 0;
setTimeout(() => alert(i), 100); //assume that the time to execute this function is > 100ms

for (let j = 0; j < 100000000; j++) {
i++ };
//When will the scheduled function run? ------  After the Loop
//What is alert going to show?------- 100000000