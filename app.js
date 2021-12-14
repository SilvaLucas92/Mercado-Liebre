const express = require("express");

const app = express();

const path = require("path");


app.listen(process.env.PORT || 3000 ,()=>{
    console.log("Servidor corriendo en el puerto 3000")
});

app.use(express.static(path.resolve(__dirname, "public")))

app.get("/", (req, res)=>{
    let htmlPath = path.resolve(__dirname, "views/home.html")
    res.sendFile(htmlPath);
});

app.get("/register", (req, res)=>{
    let registerPath = path.resolve(__dirname, "views/register.html")
    res.sendFile(registerPath);
});

app.get("/login", (req, res)=>{
    let loginPath = path.resolve(__dirname, "views/login.html")
    res.sendFile(loginPath);
});