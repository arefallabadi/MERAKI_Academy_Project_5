const express = require("express");

const {
  createPost,
  getAllPost,
  getPostById,
  getPostByTitle,
  deletePost,
  editPost,
  getPostByType,
  getArchivePost,
  archivePost,
  addComment,
  showComment
} = require("../controllers/post");

const postRouter = express.Router();

postRouter.post("/create", createPost);
postRouter.get("/", getAllPost);
postRouter.get("/archive", getArchivePost);
postRouter.get("/title/:title", getPostByTitle);
postRouter.delete("/:id", deletePost);
postRouter.put("/edit/:id", editPost);
postRouter.get("/filter/:type", getPostByType);
postRouter.post("/archive/:id", archivePost);
postRouter.get("/:id", getPostById);
postRouter.get("/comment", showComment);
postRouter.put("/comment/:id", addComment);



module.exports = postRouter;

