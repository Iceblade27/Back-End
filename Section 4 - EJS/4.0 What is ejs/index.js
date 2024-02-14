import express from "express";
const app = express();
const port = 3000;

//Example of rendering an EJS file and passing a value for output within a H1 element

app.get("/", (req, res) => {
    const d = new Date();
    var dayString = d.getDay() == 0 || d.getDay() == 6 ? "the weekend, Relax and chill out man!" : "a weekday, it's time to work hard!";
    res.render("index.ejs", {dayTag : dayString});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});