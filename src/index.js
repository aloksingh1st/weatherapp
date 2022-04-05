const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const app = express();

const partialPath = path.join(__dirname, "../template/partials");
const viewsPath = path.join(__dirname, "../template/views");
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

hbs.registerPartials(partialPath);
app.set("view engine", "hbs");
app.set("views", viewsPath);

app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/weather", (req,res)=>{
    res.render("weather")
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.listen(port, ()=>{
    console.log("server started");
})