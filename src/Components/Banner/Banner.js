import React, { useEffect, useState } from "react";
import { APIKey, ImageURL } from "../../Constants/Constants";
import axios from "../../axios";
import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${APIKey}&language=en-US`)
      .then((response) => {
        const ban = Math.floor(Math.random() * 19 + 1);
        setMovie(response.data.results[ban]);
      })
      .catch(() => {
        alert("Network Error");
      });
  }, []);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7), 
      rgba(0, 0, 0, 0.7)
    ),
    url(${movie ? ImageURL + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h5 className="title">
          {movie ? (movie.media_type === "tv" ? movie.name : movie.title) : ""}
        </h5>
        <div className="banner_btns">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">
          {movie ? truncate(movie.overview, 150) : ""}
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
