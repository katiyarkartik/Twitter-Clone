import React from "react";

import "./NewsCard.css";
const NewsCard = () => {
  return (
    <div>
      <div className="newscard">
        
        <p className="trending-content">#Lewandowski</p>
        <p className="trending-header">114k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#Manchester City</p>
        <p className="trending-header">95k tweets</p>
      </div>
      <div className="newscard">
       
        <p className="trending-content">#Netherlands</p>
        <p className="trending-header">76k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#HBDMegastarChiranjeevi</p>
        <p className="trending-header">68k tweets</p>
      </div>

      <div className="newscard">
        
        <p className="trending-content">#Newcastle</p>
        <p className="trending-header">51k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#Neymar</p>
        <p className="trending-header">46k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#SA News Channel YouTube</p>
        <p className="trending-header">40k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#Ferran</p>
        <p className="trending-header">35k tweets</p>
      </div>
      <div className="newscard">
        
        <p className="trending-content">#Balde</p>
        <p className="trending-header">26k tweets</p>
        
      </div>
      
    </div>
  );
};

export default NewsCard;


/*

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.twitter.com/1.1/trends/place.json?id=1')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      // <h1>{data.title}</h1>
      // <p>{data.description}</p>
    </div>
  );
}
*/