import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";
import { Subtitle } from "../style/Subtitle";
import { Paragraph } from "../style/Paragraph";
import {DetailsContainer} from "../style/DetailsContainer";

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    try {
      console.log(`Fetching movie with id: ${id}`);
      const { data } = await MoviesService.getMovieById(id);
      console.log(`Data fetched:`, data);
      setMovie(data);
    } catch (error) {
      console.error(`Error fetching movie:`, error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovie();
    } else {
      console.error(`No id found in useParams`);
    }
  }, []);

  return (
    <DetailsContainer>
    <Subtitle>{movie.title}</Subtitle>
      <Paragraph>Release date: {movie.release_date}</Paragraph>
      <Paragraph>Overview:</Paragraph>
      <Paragraph>{movie.overview}</Paragraph>
    </DetailsContainer>
      
  );
};
