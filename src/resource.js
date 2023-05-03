import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "./firebase";
import { v4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
const Resource = () => {
  const n = useNavigate();
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [DocFile, setDocFile] = useState("");
  const addData = (e) => {
    e.preventDefault();
    const id = v4();
    const refs = doc(db, "assignments", id);
    const imgRef = ref(storage, id);
    const uploadTask = uploadBytesResumable(imgRef, DocFile);
    uploadTask.on(
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDoc(refs, {
            id: id,
            comment: comment,
            subject: subject,
            date: date,
            doc: downloadURL,
          });
        });
      }
    );
    n("/");
  };
  return (
    <>
      <div class="login-page">
        <SideBar />
        <div class="form">
          <form class="login-form">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              placeholder="Subject"
            />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="datetime-local"
              placeholder="Due Date"
            />
            <input
              type="file"
              onChange={(e) => {
                setDocFile(e.target.files[0]);
              }}
            />
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={addData}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Resource;
