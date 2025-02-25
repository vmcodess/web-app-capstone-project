import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// user will see all posts here
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// form to upload new post
app.get("/new", (req, res) => {
  res.render("new.ejs");
})

// post route -- for uploading new posts
app.post("/submit", (req, res) => {

});

// update route -- for editing posts
app.put("/new", (req, res) => {
  res.render("new.ejs");
});

// delete route -- deleting posts
app.delete("delete", (req, res) => {

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});