var express = require("express");
var server  = express();
var stylus  = require('stylus');
var nib     = require('nib');
var morgan  = require('morgan');
var jade    = require('jade');
var port    = process.env.PORT || 3000;

server.use(morgan('dev'));

server.set('views', __dirname+'/server/views');
server.set('view engine', 'jade');
server.engine('jade', require('jade').__express);


server.use('/', function(req,res){
    res.render('index', {title:'Home'});
})
server.use("/static", express.static(__dirname+"/public"));

server.listen(port, function(){
    console.log("Server up and running");
});
