// 터미널로 데이터 입력 받기 위해 필요한 코드
var readline = require('readline'); // 모듈 호출
var rl = readline.createInterface({ // 객체 생성
      input: process.stdin,
      output: process.stdout
});

function getRandomNumber() { // 랜덤한 3자리 수 반환
    const numbers = [];

    while (numbers.length < 3) {
        const num = Math.floor(Math.random() * 10);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.join("");
}

function getGameResult(userInput, randomNum) { // 게임 결과 반환해주는 함수
    let strike = 0;   // 슽라이크 갯수
    let ball = 0;     // 볼 갯수

    for (let i = 0; i < randomNum.length; i++) { // 결과 확인
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

var count = 1;                      // 사용자 시도 횟수
var randomNum = getRandomNumber();  // 무작위 3자리 숫자
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
var startBaseballGame = function () {
    rl.question(count + '번째 시도 : ', function (input) {

        // 사용자 입력 조건: 세자리 숫자, 그 외에는 재입력 받기
        if (input.length === 3 && /^\d+$/.test(input)) {
            let result = getGameResult(input, randomNum);
            console.log(result);

            if (result == '3S') { // 종료
                console.log(`${count}번만에 맞히셨습니다. \n게임을 종료합니다.`);
                rl.close();
            } else {             // 추가 진행
                count++;
                startBaseballGame();
            }
        } else {
            console.log('잘못된 입력입니다. 다시 입력해주세요');
            startBaseballGame();
        }
  });      
}

startBaseballGame();