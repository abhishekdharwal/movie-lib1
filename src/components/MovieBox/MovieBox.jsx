import React, { useContext, useEffect, useState } from "react";
import styles from "./MovieBox.module.css";
import axios from "../../config/axios";
// import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { Data } from "../../App";
import uuid from "react-uuid";
import useId from "react-use-uuid";
const MovieBox = (props) => {
  const [data, setData] = useState(null);
  const {
    ModalState,
    setModalState,
    MovieID,
    setMovieID,
    uuid1,
    setuuid1,
    AllMovies,
    setAllMovies,
    HoverEnter,
    setHoverEnter,
  } = useContext(Data);

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?i=${props.movie.imdbID}&apikey=25097c37`
      )
      .then((res) => res.data)
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [props]);
  if (data) {
    var text = data.Genre;
    text = text.replaceAll(",", "| ");
    const data3 = {
      Title: data.Title,
      Rating: data.imdbRating,
      Genre: data.Genre,
      Director: data.Director,
      Actors: data.Actors,
      Plot: data.Plot,
    };
    // setAllMovies((oldarray) => [...oldarray, data3]);
  }
  var id = uuidv4();
  function handleClick(index) {
    setMovieID(index);
    setuuid1(id);
    setModalState(true);
  }
  const handleH = () => {
    if (HoverEnter === false) {
      setHoverEnter(true);
      console.log("hover");
    } else {
      setHoverEnter(false);
    }
  };
  return (
    <div className={styles.box} onMouseEnter={handleH} onMouseLeave={handleH}>
      <div className={styles.box1}>
        <img src={props.movie.Poster} alt="movie" />
      </div>
      <div className={styles.title}></div>
      {data ? (
        <div className={styles.moive_data}>
          <h3>{data.Title} </h3>
          <div className={styles.rat}>
            Rating: {data.imdbRating}{" "}
            <button
              className={styles.btn}
              onClick={() => {
                handleClick(data.imdbID);
              }}
            >
              ADD
            </button>
          </div>
          <div>{text}</div>
          <div>Director: {data.Director}</div>
          <div>Actors :{data.Actors}</div>
          <div>{data.Plot}</div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieBox;
