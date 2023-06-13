function getRandomNumber() {
    const numbers = [];

    while (numbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.join("");
}

function getGameResult(randomNum, userInput) { // 게임 결과 반환해주는 함수
    let strike = 0;   // 슽라이크 갯수
    let ball = 0;     // 볼 갯수

    for (let i = 0; i < userInput.length; i++) {
        let u = userInput[i]; // 사용자 입력값
        let r = randomNum[i];  // 랜덤 숫자
        if (u == r) {
            strike += 1;
        } else if (randomNum.includes(u)){
            ball += 1;
        }
    }

    let result = '';
    if (ball == 3) {
        result = getResult(ball, 'B');
    } else if (strike == 3) {
        result = getResult(strike, 'S');
    } else {
        result += getResult(ball, 'B');
        result += getResult(strike, 'S');
    }
    return result; 
}

function getResult(value, Unit) {
    let val = value.toString() + Unit;
    return val;
}

function setPromptCount(count) {
    rl.setPrompt(`${count}번째 시도 : `);
}

function getUserInput(count) {
    setPromptCount(count);
    rl.prompt();
}

// 터미널로 데이터 입력 받기 위해 필요한 코드
const readline = require('readline')    // 모듈 호출
const rl = readline.createInterface({   // 객체 생성
    input: process.stdin,
    output: process.stdout
})

// main 
function startBaseballGame(count) {
    const randomNum = getRandomNumber(); // 랜덤 숫자 만들기
    console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
    
    getUserInput(count);
    rl.on("line", function(userInput) {
        let result = getGameResult(randomNum, userInput);
        console.log(result);
        if (result == '3S') { // 정답을 맞추면 종료
            console.log(`${count}번만에 맞히셨습니다. \n게임을 종료합니다.`);
            rl.close();
        } else {
            count += 1;
            getUserInput(count);
        }
    })
    rl.on("close", function() {
        process.exit();
    })
}

let count = 1; // 사용자의 시도 횟수
startBaseballGame(count);