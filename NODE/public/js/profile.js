const joinbtn = document.getElementById('joinbtn'); // room join button
const roomcode = document.getElementById('roomcode'); // input field containing room code
const tilecenter = document.getElementById('tilecenter'); // dive for displaying messages
const tiletop = document.getElementById('tiletop'); // div for displaying active users
const message = document.getElementById('message'); // input field containing message
const sendbtn = document.getElementById('sendbtn'); // messege send button


const socket=io.connect({
    // to pass data to server
    auth:{
        email:email
    }
});

joinbtn.addEventListener('click',function(e){

    if(roomcode.value == ""){
        alert("room code cannot be empty");
    }
    else{
        socket.emit("joinroom",roomcode.value);
    }
})

sendbtn.addEventListener('click',function(){
    if(message.value != ""){
        socket.emit("sendmessage",message.value,roomcode.value);
    }
})



socket.on('connect',function(){
    console.log(socket.id);
})
socket.on('disconnect',function(){
    console.log(socket.id);
})

socket.on('newjoiner',function(users){
    tiletop.innerHTML = "";
    users.forEach(element => {
        if(element == email){
            roomJoined();
            tiletop.innerHTML += "<p id='"+element+"'>You have joined!</p>"
        }
        else{
            tiletop.innerHTML += "<p id='"+element+"'>"+element+" have joined!</p>"
        }
    });
    
})

socket.on('newmessage',function(incoming,usermail){
  
        message.value = ""; // making value of input field containing message empty
   
        if(usermail == email){
         
            tilecenter.innerHTML += "<div class='msg'>"+
            "<p class='msgtop'>You</p>"+
            "<p class='msgcnt'>"+incoming+"</p>"+
            "</div>"
        }
        else{
            tilecenter.innerHTML += "<div class='msg'>"+
            "<p class='msgtop'>"+usermail+"</p>"+
            "<p class='msgcnt'>"+incoming+"</p>"+
            "</div>"
        }

        // scrolling the message displaying div to bottom
        var sh = tilecenter.scrollHeight;
        tilecenter.scrollTo(0,sh);
 
    
});


// function to hide the front layer
function roomJoined(){
    var top = document.getElementById('front');
    top.style.transform = "translateY(-100%)";

}