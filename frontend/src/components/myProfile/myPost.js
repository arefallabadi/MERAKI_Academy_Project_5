import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../reducers/post";
import Comment from "../main/comment/index";
import Like from "../main/like/index";
import Save from "../main/save/index";
import MenuItem from "../main/postList";
import post from "./myProfile.css";
import ShowComment from "../main/comment/show";
import Divider from "@material-ui/core/Divider";

const MyPost = () => {
  const dispatch = useDispatch();
  const [_IdPost, set_IdPost] = useState("");
  const [userId, setUserId] = useState("");
  const [aref, setAref] = useState(false);
  const [idPost, setIdPost] = useState("");

  const state = useSelector((state) => {
    return {
      posts: state.posts.posts,
      user: state.login.user,
    };
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/post/`)
      .then((res) => {
        dispatch(
          setPost(
            res.data.filter((elem, i) => {
              console.log(elem);
              return elem.userId == localStorage.getItem("_IdUser");
            })
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {state.posts.map((post, i) => {
          return (
            <>
              <div className="div-post-comment" key={i}>
                <div className="post-div" key={i}>
                  <div className="user-information-list">
                    <div className="user-information">
                      <img
                        className="profile-picture"
                        src="https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg"
                      />
                      <p className="user-post-name">{post.name}</p>
                      <div className="user-msg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-chat-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                        </svg>
                      </div>
                      <div className="post-tp">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="currentColor"
                          class="bi bi-clock-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        </svg>
                      </div>

                      <div className="post-td">
                        <h5>3 min ago</h5>
                      </div>
                    </div>

                    <MenuItem
                      id={post._IdPost}
                      onClick={() => {
                        return set_IdPost(post._IdPost);
                      }}
                      userIdP={post.userId}
                      onClick={() => {
                        return setUserId(post.userId);
                      }}
                    />
                  </div>
                  <div className="post-informations">
                    <p className="post-title">{post.title}</p>
                    <p className="post-description">{post.description}</p>
                  </div>

                  <div className="post-information">
                    <img className="post-image" src={post.url} />
                    <div className="post-information-2"></div>
                  </div>
                  <br />
                  <Divider />

                  <div className="post-reaction">
                    <div className="post-reaction-2">
                      <Like id={post._IdPost} i={i} />
                      <Comment
                        setIdPost={setIdPost}
                        setAref={setAref}
                        aref={aref}
                        id={post._IdPost}
                        i={i}
                      />
                    </div>
                    <Save id={post._IdPost} i={i} />
                  </div>
                </div>
                <div>
                  <ShowComment
                    idPost={idPost}
                    id={post._IdPost}
                    aref={aref}
                  />
                </div>
              </div>
            </>
          );
      })}
    </>
  );
};

export default MyPost;

 