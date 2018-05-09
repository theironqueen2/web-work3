const fibonacci = require('./feibo');
var readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('输出斐波那契数列前几项 ', (num) => {
    var n = parseInt(num);
    console.log("斐波那契数列前"+num+"项如下:");
    var outString = "";
    for(var i=1; i<=n; i++){
        outString += fibonacci(i)+" ";
    }
    console.log(outString);
    rl.close();
  });
