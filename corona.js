const request=require('request');
var express=require('express');
var app=express();
var port=process.env.PORT||8000;
app.set('view engine','ejs');
request({
    url:'https://pomber.github.io/covid19/timeseries.json',
    json:true
},(err,response,body)=>{
app.get('/',function(req,res){
    res.render('index',{body:body});
})

});
app.listen(port);














