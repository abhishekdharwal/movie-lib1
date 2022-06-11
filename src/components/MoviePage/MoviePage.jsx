import React, { useContext, useEffect, useState } from "react";
import { Data } from "../../App";
import MovieBox from "../MovieBox/MovieBox";
import Navigation from "../Navigation/Navigation";
import styles from "./MoviePage.module.css";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  color: "black",
  p: 4,
};
const MoviePage = () => {
  const {
    ModalState,
    setModalState,
    listState,
    setListState,
    MovieID,
    setMovieID,
    listWithMovie,
    setlistWithMovie,
    uuid1,
    setuuid1,
    NewMovie,
    setNewMovie,
    NewSearch,
    setNewSearch,
    Movies,
    setMovies,
    AllMovies,
    setAllMovies,
    HoverEnter,
    setHoverEnter,
    GlobalID,
    setGlobalID,
  } = useContext(Data);
  const [ListName, setListName] = useState("");
  const [currData, setcurrData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setModalState(false);
    setOpen(false);
  };
  useEffect(() => {
    if (ModalState === true) {
      handleOpen();
    }
  }, [ModalState]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  function handleClick() {
    axios
      .get(`https://www.omdbapi.com/?i=${MovieID}&apikey=25097c37`)
      .then((res) => res.data)
      .then((res) => {
        setcurrData(res);
        console.log(currData);
        setListState((oldArray) => [...oldArray, uuid1]);
        console.log(listState);
        const data = {
          uuid: uuid1,
          Name: ListName,
          Movies: [
            {
              Poster: res.Poster,
              Title: res.Title,
              Rating: res.imdbRating,
              Genre: res.Genre,
              Director: res.Director,
              Actors: res.Actors,
              Plot: res.Plot,
            },
          ],
        };
        const data2 = {
          Poster: res.Poster,
          MovieID: MovieID,
          Title: res.Title,
          Rating: res.imdbRating,
          Genre: res.Genre,
          Director: res.Director,
          Actors: res.Actors,
          Plot: res.Plot,
        };
        // setAllMovies((oldArray1) => [...oldArray1, data2]);
        setlistWithMovie((oldArray) => [...oldArray, data]);
        console.log(listWithMovie);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    if (NewSearch) {
      const fetch = async () => {
        await axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?s=${NewSearch}&apikey=25097c37`
          )
          .then((res) => res.data)
          .then((res) => {
            console.log(res.Search);
            setMovies(res.Search);
            console.log(Movies);
          })
          .catch((e) => {
            console.log(e);
          });
      };
      fetch();
    }
  }, [NewSearch]);
  useEffect(() => {
    console.log("working");
  }, [Movies]);
  const arr = listWithMovie;
  arr.forEach((ele, ind, array) => {
    const arr1 = ele.Movies;
    console.log(arr1);
    console.log(ele.uuid);
    console.log(ele.Name);
  });
  const [liName, setliName] = useState("Lists");
  const handleChange = (e) => {
    arr.forEach((ele, ind, arr) => {
      if (e.target.value === ele.uuid) {
        console.log("YE its working");
        setliName(ele.Name);
        const arr1 = ele.Movies;
        const arr2 = AllMovies;
        console.log(AllMovies);
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?i=${MovieID}&apikey=25097c37`
          )
          .then((res) => res.data)
          .then((res) => {
            const data2 = {
              Poster: res.Poster,
              MovieID: MovieID,
              Title: res.Title,
              Rating: res.imdbRating,
              Genre: res.Genre,
              Director: res.Director,
              Actors: res.Actors,
              Plot: res.Plot,
            };
            console.log(data2);
            console.log("goof");
            arr1.push(data2);
            ele.Movies = arr1;
            console.log(arr1);
            console.log(listWithMovie);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  };
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    marginLeft: "3%",
  };
  return (
    <div>
      <Navigation />
      <div className={styles.row}>
        <div className={styles.row1}>
          <Carousel
            responsive={responsive}
            swipeable={true}
            containerClass="imp"
            autoPlay={false}
            infinite
            slidesToSlide={1}
            centerMode={true}
            shouldResetAutoplay={false}
            focusOnSelect={true}
          >
            {Movies.map((movie, index) => (
              <MovieBox movie={movie} />
            ))}
          </Carousel>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <strong>Add to List</strong>
                </Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Movie List
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"SelectList"}
                        label="Movie List"
                        onChange={handleChange}
                      >
                        {arr.map((ele, index) => (
                          <MenuItem value={ele.uuid}>{ele.Name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                ></Typography>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <strong>Create New Favourite List</strong>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <input
                    className={styles.inp}
                    type="text"
                    placeholder="Type List Name"
                    onChange={(e) => {
                      setListName(e.target.value);
                    }}
                  ></input>
                  <button
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    Create List
                  </button>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      {
        <div className={styles.head}>
          <h3>YOU FAVOURITE LISTS</h3>
        </div>
      }

      <div className={styles.list1}>
        {listWithMovie.map((ele, ind) => (
          <Link
            to={`/listpage/${ele.uuid} `}
            style={brandStyle}
            onClick={() => {
              setGlobalID(ele.uuid);
            }}
          >
            <Button
              variant="contained"
              style={{
                backgroundColor: "#faead6",
                color: "black",
                marginLeft: "4%",
                textOverflow: "ellipsis",
              }}
            >
              {ele.Name}
            </Button>
          </Link>
        ))}
      </div>
      {/* {listWithMovie && <h2>Search New Movies</h2>} */}
    </div>
  );
};

export default MoviePage;
