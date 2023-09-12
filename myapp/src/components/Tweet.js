import axios from "axios";
import React, { useState, useEffect } from "react";
import TweetCard from "./TweetCard";

const Tweet = () => {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  
  const [tweets, settweets] = useState([{}]);
  useEffect(() => {
    axios
      .get("/gettweets")
      .then(({ data }) => {
        if (data) {
          return data;
        }
      })
      .then((result) => settweets(result));
  }, []);

  const handleDeleteTweet = async (deletedTweetId) => {
    try {
      // Make a DELETE request to delete the tweet by its _id
      await axios.delete(`/deletetweet/${deletedTweetId}`);
      // After successful deletion, update the UI by removing the deleted tweet
      settweets((prevTweets) =>
        prevTweets.filter((tweet) => tweet._id !== deletedTweetId)
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard
          name={tweet.name}
          img={tweet.img}
          phonenumber={tweet.phonenumber}
          tweet={tweet.tweet}
          addimgUrl={tweet.addimgUrl}
          date={tweet.date}
          // Use _id as the unique identifier
          onDelete={handleDeleteTweet} // Pass the delete callback
        />
      ))}
    </div>
  );
};

export default Tweet;

