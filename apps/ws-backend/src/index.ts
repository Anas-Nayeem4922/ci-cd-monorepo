import { WebSocket, WebSocketServer } from "ws";
const port = 3002;

const wss = new WebSocketServer({port}, () => {
    console.log(`WS Server running on port ${port}`)
})