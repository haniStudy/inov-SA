function getRandomNumber() { // 3자리 수 랜덤 숫자 만들기
    let number = Math.floor(Math.random() * 900) + 100;
    return number.toString();
}
