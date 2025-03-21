import express from "express";
const app = express();

import { client } from "@repo/db/client"

const port = 3001;

app.use(express.json());

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    console.log("Request to /");
    res.send("Hi there");
});

app.post("/create", async(req, res) => {
    const { username, password } = req.body;
    const user = await client.user.create({
        data: {
            username,
            password
        }
    });
    res.json({
        msg: `User created with ${user.id} id`
    })
})