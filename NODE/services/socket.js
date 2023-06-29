const socket = require('socket.io').Server
const Room = require('../modules/Room');
const room = require('../modules/Room');

module.exports = (server)=>{

    const io = new socket(server,{cors:true});

    // Middleware
    io.use((socket,next)=>{

        const email = socket.handshake.auth.email;
        if(email)
        {
            socket['user'] = {email:email};
            next();
       
        }
        else
        {
            next(new Error("Authentication failed"));
        }
    });

    io.on("connection", (socket) => {


        socket.on('joinroom',async(roomcode)=>{

            const room = await Room.findOneAndUpdate(
                {roomcode:roomcode},
                {$push:{users:socket.user.email}},
                {upsert:true,new:true});
            
            socket.join(roomcode);
            io.to(roomcode).emit("newjoiner",room.users);
            
        })


        socket.on('sendmessage',async(message)=>{

            
            // checking for value inside the array field of the collection
            const room = await Room.findOne({ users: { "$in" : [socket.user.email]} });

            if(room){

                io.to(room.roomcode).emit("newmessage",message,socket.user.email);
            }
            
        })


        socket.on("disconnect",async()=>{

            const room = await Room.findOneAndUpdate({
                users: { "$in" : [socket.user.email]}},
                {$pull:{users:socket.user.email}},
                {new:false}
                 );


                if(room)
                io.to(room.roomcode).emit("newjoiner",room.users);
        })


    });
   
}