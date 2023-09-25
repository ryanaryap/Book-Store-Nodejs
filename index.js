const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/buku", function (req, res) {
    res.render("buku");
});

app.get("/user", function (req, res) {
    res.render("user");
});

app.listen(port, () => {
    console.log("Server Berjalan di port " + port);
});
