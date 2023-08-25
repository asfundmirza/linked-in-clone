import React, { useEffect, useState } from "react";
import "../components/Content.css";
import { Avatar } from "@mui/material";
import InputIcons from "./InputIcons";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ContentPosts from "./ContentPosts";
import { db } from "../firebase";
import {
  getDocs,
  addDoc,
  collection,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";

import { serverTimestamp } from "firebase/firestore";

function Content() {
  const [postArray, setPostArray] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [addPost, setAddPost] = useState([]);

  const getPostsList = async () => {
    try {
      const postRef = collection(db, "posts");
      let postsQuery = query(postRef, orderBy("createdAt", "desc"));

      const data = await getDocs(postsQuery);
      const postsArray = data.docs.map((post) => ({
        ...post.data(),
        id: post.id,
      }));

      setPostArray(postsArray);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPostsList();
    console.log(postArray);
  }, []);

  const sendHandler = async (e) => {
    e.preventDefault();
    try {
      const post = await addDoc(collection(db, "posts"), {
        name: "Asfund Mirza",
        description: "this is the test",
        message: inputMessage,
        createdAt: serverTimestamp(),
      });
      console.log("published");
      setAddPost(post);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="content">
      <div className="input__container">
        <div className="input__search">
          <Avatar />
          <form>
            <input
              type="text"
              placeholder="Start a post"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button type="submit" onClick={sendHandler}>
              Send
            </button>
          </form>
        </div>
        <div className="input__container__icons">
          <InputIcons icons={InsertPhotoIcon} text="Photo" color="#1565c0" />
          <InputIcons icons={SmartDisplayIcon} text="Video" color="#2e7d32" />
          <InputIcons icons={CalendarMonthIcon} text="Event" color="#d50000" />
          <InputIcons
            icons={EditNoteIcon}
            text="Write article"
            color="#dd2c00"
          />
        </div>
      </div>

      {/* {Posts} */}

      {postArray.map((post) => (
        <ContentPosts
          key={post.id}
          name={post.name}
          description={post.description}
          message={post.message}
          photoURL=""
        />
      ))}
    </div>
  );
}

export default Content;
