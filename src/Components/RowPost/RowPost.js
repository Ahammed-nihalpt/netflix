import React, { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { APIKey, ImageURL } from '../../Constants/Constants'
import axios from '../../axios'
import "./RowPost.css"

function RowPost(props) {
  const [movie, setMovie] = useState();
  const [urlid, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    })
  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${APIKey}&language=en-US`).then((response) => {
      if (response.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie && movie.map((data) => {
          return (<img
            onClick={() => handleMovie(data.id)}
            className={props.isSmall ? 'small_poster' : 'poster'}
            key={data.id}
            src={`${ImageURL + data.backdrop_path}`}
            alt="Poster"
          />)
        })}
      </div>
      {
        urlid && <YouTube videoId={urlid.key} opts={opts} />
      }
    </div>
  );
}

export default RowPost;
