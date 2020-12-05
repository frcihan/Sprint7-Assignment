const express = require("express");

const port = process.env.port || 8080;
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/pages/register.html");
});

app.listen(port, () => {
    console.log(`I'm listening on port ${port}`);
});