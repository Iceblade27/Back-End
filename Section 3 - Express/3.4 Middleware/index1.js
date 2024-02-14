import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); //Generate Dynamic Paths to ensure that the directory location is consistent across differnt enviroments. Saves alot of code.

const app = express();
const port = 3000;

//Example of parsing a body so that it returns a json map that can be used to easily process the data sent.

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
 