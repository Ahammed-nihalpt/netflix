import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { APIKey, ImageURL } from "../../Constants/Constants";
import axios from "../../axios";
import "./RowPost.css";

function RowPost(props) {
  const [movie, setMovie] = useState();
  const [urlid, setUrlId] = useState("");
  // const [hover, setHover] = useState(false);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results);
    });
  }, [props.url]);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
      axios
      .get(`movie/${id}/videos?api_key=${APIKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie &&
          movie.map((data, i) => {
            // console.log(data);
            if (data.backdrop_path) {
              return (
                <div className="poster" key={data.id}>
                  <img
                    onClick={() => handleMovie(data.id)}
                    // onMouseEnter={()=>setHover(true)}
                    // onMouseLeave={()=>setHover(false)}
                    className={props.isSmall ? "small_poster" : "poster"}
                    
                    src={`${ImageURL + data.backdrop_path}`}
                    alt={data.id}
                  />
                  <div className={props.isSmall ? "dis_small" : "dis"} >
                    <h5>{data ? data.media_type === "tv" ? truncate(data.name,20) : truncate(data.title,20) : ""}{data.name}</h5>
                    {
                    data.backdrop_path && <p className="overview">
                      {truncate(data.overview, 70)}
                      <br />
                      Rating: {data.vote_average}
                    </p>
                    }
                  </div>
                </div>
              );
            } else{
              return "";
            }
          })}
      </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
