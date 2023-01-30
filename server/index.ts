const express = require("express");
const cors = require("cors");
import { Request, Response } from "express";

const app = express();
app.use(cors());


app.use(express.urlencoded({
    extended: false
}))

app.use(express.json());

const SECRET_WORDS = ["WORLD", "BOARD", 'FLOOR','DREAM','GREEN'];

let USERS = [
                {username: "avi", password: "111"}, 
                {username: "ben", password: "222"},
                {username: "cadi", password: "333"},
            ];

app.get("/", function(req: Request, res: Response) {
    res.send("Hello there");
});

app.get("/secretWord", function(req: Request, res: Response) {
    let secretWordIndex = Math.floor(Math.random() * SECRET_WORDS.length);
    res.send(SECRET_WORDS[secretWordIndex]);
});


app.post("/login", function(req: Request, res: Response) {
    let foundUserIndex = USERS.findIndex(user => user.username === req.body.username && user.password === req.body.password);
    res.send(foundUserIndex >= 0 ? "ok" : "invalid user");
})


app.listen(3333, () => {
    console.log("Wordle server listens on port 3333");
})

