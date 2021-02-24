import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

// import Canvas from '../Canvas/Canvas'

import socket from '../socket'

const Room = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        console.log("yes");

        setName(name);
        setRoom(room);

        console.log(name);

        socket.emit('join', { name, room }, () => {
        });

        //socket.emit('message', (data), () => {

        //});

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        });

        return () => {
            //socket.emit('disconnect');
            //socket.off();
        }
    }, ['localhost:5000', location.search]);

    return (
        <div >
        <div class="row justify-content-between">
            <div class="col col-md-3">
                {/* <UserCount class="d-flex" users={users}></UserCount> */}
            </div>
            <div class="col col-md-5">

                {/* <Canvas class="d-flex"></Canvas> */}
            </div>
            <div class="col col-md-3">

                {/* <Chat class="d-flex" room={room} name={name}></Chat> */}
            </div>
            LOLOLOLOLOL
        </div>
        {/* <div class="d-flex justify-content-between bg-dark">
            <UserCount class="d-flex" users={users}></UserCount>
            <Canvas class="d-flex"></Canvas>
            <Chat class="d-flex" room={room} name={name}></Chat>
        </div> */}
    </div>
    )
}

export default Room;