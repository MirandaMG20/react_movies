import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
`;

function MovieDisplay({ movie }) {
  const loaded = () => {
    return (
      <>
   
        <img src={movie.Poster || "N/A"} alt={movie.Title} />
        
        <Title>{movie.Title || "N/A"}</Title>

        <h5>Genre: {movie.Genre || "N/A"}</h5>
        <h5>Rated: {movie.Rated || "N/A"}</h5>
        <h5>Runtime: {movie.Runtime || "N/A"}</h5>
        <h5>Released: {movie.Released || "N/A"}</h5>

        
        <h4>Plot: {movie.Plot || "N/A"}</h4>
        <h4>Cast: {movie.Actors || "N/A"}</h4>

      </>
    );
  };



  const loading = () => {
    return <h1>No movie to display</h1>;
  };

  return movie ? loaded() : loading();
}

export default MovieDisplay;
