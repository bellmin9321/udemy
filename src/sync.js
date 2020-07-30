var fs = require('fs');

/*
//readFileSync(동기)
console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8'); //readFielSync는 return 값을 줌
console.log(result);
console.log('C');
결과 ABC */ 

//readFile(비동기)
console.log('A');
var result = fs.readFile('sample.txt', 'utf8', function(err, result){ // readFile은 return값이 아니기 때문에 function을 3번째 인자로 줘야함
    console.log(result); //node야 readFile 기능으로 sample.txt를 읽고 작업이 끝나면 세번째 인자인 함수를 실행시켜
}); 
console.log('C');
//결과 ACB > 이유 : 비동기기 때문에 B값을 가져오기 전에 C가 실행된 것이고, 함수가 호출되면서 함수 안의 result 코드가 나중에 실행된 것임.