
const express = require("express");
const app = express();

function anasayfa_fonksiyonu(req, res){
    // request - istek
    // responses - cevap
    res.send("Anasayfaya hosgeldiniz");
}

app.get ("/", anasayfa_fonksiyonu);




function dinliyo_musun(){
    console.log("Server listening on port " + PORT);
}

const PORT = 8080;
app.listen(PORT, dinliyo_musun)

