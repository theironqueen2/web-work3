// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
function isLeapYear(year) {  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);  }
var readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('请输入一个年份 ', (line) => {
    if(isLeapYear(line)){
        console.log(line + "是闰年");
    } else {
        console.log(line + "不是闰年");
    }
    rl.close();
  });
