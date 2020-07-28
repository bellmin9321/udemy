var express = require('express');
const { Router } = require('react-router-dom');
var router = express.Router();

router.get('/:id', function(req, res){ // '//:id' 는 라우팅에서 파라미터를 설정
    res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', function(req, res){ // router.post에서 res.json이 사용됨.
    console.log(JSON.stringify (req.body, null, 2));
    res.json({
        success:true,
        user:req.body.username //JSON 파싱하기
    });
});

router.put('/', function(req, res){
    res.status(400).json({message:'Hey, you. Bad Request'}); // https 설정하는 방법
})

router.delete('/', function(req, res){ 
    res.send('Received a DELETE request');
});

module.exports = router; // route를 통하여 모듈화