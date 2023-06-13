var readline = require('readline');

var rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});

function make_num() {
      var number = [];
      while (number.length < 3) {
            var same_num = 0;
            var random = Math.floor(Math.random() * 10);
            number.forEach(function (n) {
                  if (n == random) same_num++;
            })
            if (same_num == 0) number.push(random);
      }
      return number;
}

var count = 1;
var number = make_num();

var recursiveAsyncReadLine = function () {
      rl.question(count + '번째 시도 : ', function (input) {
            input = input_to_Array(input);
            strike = 0;
            ball = 0;
            for (let i = 0; i < number.length; i++) {
                  for (let j = 0; j < input.length; j++) {
                        if (number[i] == input[j]) {
                              if (i == j) {strike++;}
                              else {ball++;}
                        }
                  }
            }
            if (strike == 3) {
                  console.log(`3S
${count}번만에 맞히셨습니다.
게임을 종료합니다.`);
                  rl.close();
            } else {
                  console.log(ball + "B" + strike + "S");
                  count++;
                  recursiveAsyncReadLine();
            }
      });
};

function input_to_Array(num) {
      const str = String(num);
      const mapfn = (arg) => Number(arg);
      const input = Array.from(str, mapfn);

      return input;
}
recursiveAsyncReadLine();