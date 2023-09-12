import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";
const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=3e59019ce7794ba0b21e5b88507f47f0"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);

  return (
    <>
      <div className="news-box">
        <div className="news-container">
          <h1 style={{ marginBottom: "1rem" }}>Top News</h1>
          {news.map((val, index) => {
            if (val.urlToImage) {
              return (
                <div className="news-element">
                  <div className="news-img">
                    <img src={val.urlToImage} alt="" srcset="" />
                  </div>
                  <p key={index}>{val.title}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default News;
