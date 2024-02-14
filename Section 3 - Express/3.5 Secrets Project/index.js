//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //Generate Dynamic Paths to ensure that the directory location is consistent across differnt enviroments. Saves alot of code.

const app = express();
const port = 3000;
var password = false;

//Example of parsing a body so that it returns a json map that can be used to easily process the data sent.

app.use(bodyParser.urlencoded({extended:true}));

//App .use is middleware this means it preprocesses the data before it reaches our routes.

app.use((req,res, next) =>{
    password = req.body["password"] === "secret";
    next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if(password){
    res.sendFile(__dirname + "/public/secret.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});