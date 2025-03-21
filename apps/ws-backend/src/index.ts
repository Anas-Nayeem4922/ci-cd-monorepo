import { WebSocket, WebSocketServer } from "ws";
const port = 3002;
import { client } from "@repo/db/client"

const wss = new WebSocketServer({port}, () => {
    console.log(`WS Server running on port ${port}`)
});

wss.on("connection", async(ws: WebSocket) => {
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    ws.send("Hi, you are connected");
})