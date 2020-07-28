var express = require('express'); //module을 불러올 땐 require 사용
var app = express();
var user = require('./routes/user') //모듈화한 user.js를 요청
var morgan = require('morgan')
var bodyParser = require('body-parser');

//next는 어떤 작업을 하고 그 다음 작업으로 넘기는 콜백함수
// var myLogger = function(req, res, next) {
//     console.log(req.url); // req해서 url을 프린트하고
//     next(); // 콜백으로 받은 next 실행
// };

// app.use(myLogger); // app.use를 통해 myLogger라는 미들웨어를 사용
app.use(morgan('dev'));
app.use(bodyParser.json()); //bodyParser야, json형태의 body를 읽게해줘. 이것을 app에서 미들웨어로 사용
app.use('/', express.static('public')); // public dir에 있는 파일들로 접근

// app.get('/', function(req, res){ // 루트경로 '/' 페이지에 get 요청이 들어오면 { res.send('Hello World')} 의 콜백함수를 실행함
//     res.send('Hello World'); // 콜백함수의 파라미터는 req(request, 요청)와 res(response, 응답) 
// });

// app.get('/user/:id', function(req, res){ // '/user/:id' 는 라우팅에서 파라미터를 설정
//     res.send('Received a GET request, param:'+req.params.id);
// });

// app.post('/user', function(req, res){ // app.post에서 res.json이 사용됨.
//     res.json({success:true})
// });

// app.put('/user', function(req, res){
//     res.status(400).json({message:'Hey, you. Bad Request'}); // https 설정하는 방법
// })

// app.delete('/user', function(req, res){ 
//     res.send('Received a DELETE request');
// });

app.use('/user', user) // 이 한줄로 route를 통해 모듈화한 user.js를 불러옴

app.listen(3000, function() {
    console.log('Example App is listening in port 3000')
});