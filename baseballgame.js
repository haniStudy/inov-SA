// node baseballgame
let readline = require('readline');

let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});

// 1. random으로 숫자를 뽑기 - Math.floor, Math.random
function randomNum() {
    let num = [];
    while(num.length < 3) {
        let inputNum = Math.floor(Math.random() * 10);
        if(!num.includes(inputNum)) {
            num.push(inputNum);
        }
        
    }
    
    return num.join("")
}

// 게임결과 반환
function gameResult() {
    let strike = 0;
    let ball = 0;
    let count = 0;
    let pc = randomNum();
    
    console.log('pc',pc)
    rl.on("line", function(userInput) {  
    //숫자의 값과 위치가 모두 일치하면 S
    for(let i=0; i < 3; i++){
        for(let j = 0; j < 3 ; j++){
            // pc.charAt(i)===userInput.charAt(j) && i === j
            // ? strike++
            // : ball++

            // if(pcInput[i]===userInput[j]){
            if(pc.charAt(i)===userInput.charAt(j)){
                if(i === j){
                    strike++
                }else{
                    ball++
                }
            }
        }
    }
    count++
    if(strike===3){
        console.log(`${ball}B${strike}S`)
        console.log(`${count}번 만에 맞히셨습니다.`)
        rl.close();
    } else if(ball === 3) {
        console.log(`${count}번째 시도 : ${userInput}`)
        console.log(`${ball}B`)
    }
    else {
        console.log(`${count}번째 시도 : ${userInput}`)
        console.log(`${ball}B${strike}S`)
    }
});
}
// - 기회는 무제한이며, n번의 시도 후에 맞췄는지 기록됩니다. = n 초깃값 1, 누적 증가
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다. = 3S 일 때 종료


gameResult()  