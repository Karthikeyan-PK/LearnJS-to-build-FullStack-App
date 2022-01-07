//JS tutorial Building My own Website

var express = require('express')
var app = express()
app.use(express.urlencoded({extended:false}))

app.get('/', function (req, res) {
  res.send(`<h3>Hi! Welcome to my website.</h3>
  <form action="/answer" method=POST>
  <p>What is 2 + 2 ?</p>
  <input name="answer" autocomplete="off">
  <button>Submit</button>`)
})

app.post('/answer', function(req,res){
    if(req.body.answer==4){
        res.send(`<p>Congrats, your answer is correct.</p>
        <a href="/">Back to home page</a>`)
    }
    else{
        res.send(`<p>Sorry, your answer is Wrong.</p>
        <p>You can try again by clicking the below page</p>
        <a href="/">Back to home page</a>`)
    }
})
app.listen(3000)