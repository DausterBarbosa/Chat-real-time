import express from "express";
import http from "http";
import io from "socket.io";

const app = express();

const server = http.createServer(app);

const socket = io(server);

interface ConnectedUsersProps{
    [key: number]: string;
};

const connectedUsers = <ConnectedUsersProps>{};

socket.on("connection", (socket) => {
    const {user_id} = socket.handshake.query;

    connectedUsers[user_id] = socket.id;

    socket.on("sendMessage", (data) => {
        socket.to(connectedUsers[data.to]).
        emit("menssageReceived", {user_id: data.from, message: data.message});
    });
});

server.listen(3333);