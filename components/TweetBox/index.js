import React from "react";
import style from "./styles.module.css";
import ProfilePhoto from "../ProfilePhoto";
import TweetButton from "../TweetButton";
function TweetBox() {
  return (
    <div className={style.tweetBox}>
      <form>
        <div className={style.tweetBoxInput}>
          <ProfilePhoto />
          <input type="text" placeholder="What's happening" />
        </div>
        <input
          className={style.addImage}
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <div className={style.tweetButton}>
          <TweetButton>Tweet</TweetButton>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
