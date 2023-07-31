import Form from "./components/Form";
// Import our components
import MovieDisplay from "./components/MovieDisplay";
import { useState, useEffect } from "react";
import styled from "styled-components";
import './index.css'


const Container = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  // background-color: #242424
`;

function App() {
  const apiKey = "529bf2e4"; // variable with your apiKey
  const [movie, setMovie] = useState(null); // state to hold movie data

  // Function to getMovies
  const getMovie = async (searchTerm) => {
    // "promise" request to my api of fetching the data in the background
    // try to do what was promised
    try {
      const response = await fetch(
        // not to hard code the apiKey and movie search we use a "template literals" ${}
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json(); // getting my movie
      console.log(data)
      setMovie(data); // this variable is holding the movie data
      // catch if it fails
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie("Minions");
  }, []);

  return (
    <>
      <Container>
        {/* Passing the function to Form as a prop and calling it movieSearch */}
        <Form movieSearch={getMovie} />
        <MovieDisplay movie={movie} />
      </Container>
    </>
  );
}

export default App;
