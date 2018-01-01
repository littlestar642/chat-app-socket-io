var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',(req,res)=>res.sendFile(__dirname+'/index.html'));

io.on('connection',(socket)=>{
    console.log('a user connected');
    socket.on('disconnect',()=>io.emit('chat message','User disconnected'));
    socket.on('chat message',(msg)=>io.emit('chat message',msg));

});


app.set('port', (process.env.PORT || 5000));
http.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });