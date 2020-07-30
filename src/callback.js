// function a(){
//     console.log('A');
// }

var a = function(){ // javascript에선 함수가 값이다
    console.log('A');
}  // 변수 a 뒤에 함수를 호출하는 기호를 넣는 것을 통해서 a라는 변수가 담고있는 값인 함수를 실행할 수 있음

function slowfunc(callback){ // callback이라는 parameter는 변수 a의 함수값을 받음
    callback(); // 요게 바로 callback 함수 
}
/*
function slowfunc(call){ 인자 call이랑  밑에 callback함수인 call은 어떤걸로 바꿔도 상관없음
    call();
}
*/

slowfunc(a);
