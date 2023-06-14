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
function gameResult(pcInput,userInput) {
    let strike = 0;
    let ball = 0;
    let pc = randomNum();
    
    // console.log('pc',pc)
    rl.on("line", function(userInput) {  
    //숫자의 값과 위치가 모두 일치하면 S
    for(let i=0; i < 3; i++){ // 0 
        for(let j = 0; j < 3 ; j++){ // 0
            // pc.charAt(i)===userInput.charAt(j) && i === j
            // ? strike++
            // : ball++

            // if(pcInput[i]===userInput[j]){
            if(pc.charAt(i)===userInput.charAt(j)){ // 숫자 자체가 같은지 확인 
                if(i === j){ // 위치도 같은지 확인 
                    strike++
                }else{
                    ball++
                }
            }
        }
    }
    
    // let count = 1;
    count++;
    if(strike===3){
        //0B3S
        console.log(`${strike}S`)
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
};


// - 기회는 무제한이며, n번의 시도 후에 맞췄는지 기록됩니다. = n 초깃값 1, 누적 증가
// - 숫자 3개를 모두 맞춘 경우, 게임을 종료합니다. = 3S 일 때 종료


gameResult()  