import React, { useState } from "react"
import { nameContext } from '../App'
import Button from "./Button"
import { Socket, io } from "socket.io-client";
var socket:Socket;
export const Message=()=>{

    const name = React.useContext(nameContext);
    const [connection,setConnection] = useState(false);
    const [socketId, setSocketId] = useState("");

    const createConnection=()=>{

        socket = io("http://127.0.0.1:8080");

        socket.on("connect", () => {
            setConnection(true);
            setSocketId(socket!.id);

            initializeEvents();
        });
        socket.on("disconnect",()=>{
            setConnection(false);
            setSocketId("");
        })

        socket.on("connect_error",(err)=>{
            alert(err);
        })
    }

    const closeConnection = ()=>{

        socket.emit("end");
       
    }

    const initializeEvents = ()=>{
        // Custom socket listeners here
        
    }

    return(
        <div>
            <h2>Third Component</h2>
            { name && <h3>Your name is {name}. We get it using context </h3> }

            {
                !connection &&
                <Button clickHandler={createConnection}>Click to create Socket Connection</Button>
            }
            {
                connection &&
                <Button clickHandler={closeConnection}>Close Socket Connection</Button>
            }
            {
                socketId && <p>Socket Id : {socketId} </p>
            }
            <p style={{color:"white",fontSize:"18px"}}>Socket server should be running before connecting</p>
        </div>
    )

}