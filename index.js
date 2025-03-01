import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("/public"));
app.use(bodyParser.urlencoded({ extended: true }));

// create object to hold posts?
let posts = [
  {id: 1, title: "How I Made My First Million", content: "gang gang some random shit how I made my first million. worked hard. played harder. got lucky."},
  {id: 2, title: "Why I started breathing with my stomach.", content: "asdasd assd as das da sd as das da sd asdas da sd asd a sd a das d"}
];


// user will see all posts here
app.get("/", (req, res) => {
  //
  res.render("index.ejs", { posts } );
  //res.json(posts);
});

// form to upload new post
app.get("/new", (req, res) => {
  res.render("new.ejs");
});


// show 1 post
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  res.render("edit", { post });
});



// post route -- for uploading new posts
app.post("/posts", (req, res) => {
  console.log(req.body);
  let title = req.body.title;
  let content = req.body.content;

  const post = {
    id: posts.length + 1,
    title: title,
    content: content
  };

  posts.push(post);
  //console.log(`showing posts array`);

  res.redirect("/");
});


// update route -- for editing posts (PUT)
app.post("/posts/:id/update", (req, res) => {

  const {title, content} = req.body;
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    post.title = title;
    post.content = content;
  }

  res.redirect("/");
});

// delete route -- deleting posts
app.post("/posts/:id/delete", (req, res) => {
  posts = posts.filter(p => p.id != req.params.id);
  console.log(req.params);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});