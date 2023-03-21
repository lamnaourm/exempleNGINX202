const express = require("express")

const app = express();

app.get("/", (req, res) => {
    res.json({message:"Reponse de service 2 "})
});

app.listen(3000)