import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/auth/login/index";
import CreatePosts from "./components/post/postCreate";
import Register from "./components/auth/signUp/index";
import GetPost from "./components/main/post";
import { Header } from "./components/header/index";
import GetFavorites from "./components/favorite/favorite";
import Main from "./components/main/index";
import postList from "./components/main/postList";



const App = () => {
  return (
    <>
      <Route path="/" component={Header} />
      <Route path="/main" component={Main} />
      <Route exact path="/" component={GetPost} />
      <Route path="/login" component={Login} />
      <Route path="/createPost" component={CreatePosts} />
      <Route path="/register" component={Register} />
      <Route path="/favorite" component={GetFavorites} />
<<<<<<< HEAD
=======
      <Route path="/post" component={postList} />
>>>>>>> 48a6300984108f786313abb24b2e316587ba4c5e
    </>
  );
};

export default App;
