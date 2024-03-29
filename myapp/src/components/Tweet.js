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
       // Pass the delete callback
        />
      ))}
    </div>
  );
};

export default Tweet;

