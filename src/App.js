import React, { useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import MoviePage from "./components/MoviePage/MoviePage";
import { useContext } from "react";
import ListPage from "./components/ListPage/ListPage";
const Data = React.createContext(null);
export { Data };
function App() {
  const [ModalState, setModalState] = useState(false);
  const [listState, setListState] = useState([]);
  const [MovieID, setMovieID] = useState("");
  const [listWithMovie, setlistWithMovie] = useState([]);
  const [uuid1, setuuid1] = useState("");
  const [NewMovie, setNewMovie] = useState([]);
  const [NewSearch, setNewSearch] = useState("");
  const [AllMovies, setAllMovies] = useState([]);
  const [HoverEnter, setHoverEnter] = useState(false);
  const [GlobalID, setGlobalID] = useState("");

  const [Movies, setMovies] = useState([
    {
      Title: "Spider-Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: No Way Home",
      Year: "2021",
      imdbID: "tt10872600",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider-Man",
      Year: "2012",
      imdbID: "tt0948470",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man 2",
      Year: "2004",
      imdbID: "tt0316654",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: Homecoming",
      Year: "2017",
      imdbID: "tt2250912",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man 3",
      Year: "2007",
      imdbID: "tt0413300",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: Into the Spider-Verse",
      Year: "2018",
      imdbID: "tt4633694",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg",
    },
    {
      Title: "The Amazing Spider-Man 2",
      Year: "2014",
      imdbID: "tt1872181",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: Far from Home",
      Year: "2019",
      imdbID: "tt6320628",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man: The Animated Series",
      Year: "1994–1998",
      imdbID: "tt0112175",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmQ1NzBlYmItNmZkZi00OTZkLTg5YTEtNTI5YjczZjk3Yjc1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
  ]);
  return (
    <div className="App">
      <Data.Provider
        value={{
          Movies,
          setMovies,
          setModalState,
          ModalState,
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
          AllMovies,
          setAllMovies,
          HoverEnter,
          setHoverEnter,
          GlobalID,
          setGlobalID,
        }}
      >
        <BrowserRouter>
          <Switch>
            <MainRoute exact path="/signupPage">
              <SignUpPage />
            </MainRoute>
            <GuestRoute exact path="/loginPage">
              <LoginPage />
            </GuestRoute>
            <DashBoard exact path="/">
              <MoviePage />
            </DashBoard>
            <DashBoard exact path="/listpage/:id">
              <ListPage />
            </DashBoard>
          </Switch>
        </BrowserRouter>
      </Data.Provider>
    </div>
  );
}
const GuestRoute = ({ children, ...rest }) => {
  const { isAuth, isActive } = useSelector((state) => state.auth);
  // console.log(isActive);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth && isActive ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : !isAuth && !isActive ? (
          <Redirect
            to={{
              pathname: "/signupPage",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const MainRoute = ({ children, ...rest }) => {
  const { isAuth, isActive } = useSelector((state) => state.auth);
  console.log(isAuth);
  console.log(isActive);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth && isActive ? (
          <Redirect
            to={{
              pathname: "/loginPage",
              state: { from: location },
            }}
          />
        ) : isAuth && isActive ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};
const DashBoard = ({ children, ...rest }) => {
  const { isAuth, isActive } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth || !isActive ? (
          <Redirect
            to={{
              pathname: "/signupPage",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};
export default App;
