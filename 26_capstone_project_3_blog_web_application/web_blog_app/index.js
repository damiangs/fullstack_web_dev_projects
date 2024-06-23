import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let blogPosts = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { blogPosts });
});

app.post("/submit-post", (req, res) => {
  const { title, content } = req.body;
  const date = new Date().toLocaleDateString();

  const newPost = { title, content, date };
  blogPosts.unshift(newPost);

  res.redirect("/");
});

app.post("/delete-post", (req, res) => {
  const { id } = req.params;
  blogPosts = blogPosts.filter((post) => post.id !== id);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
