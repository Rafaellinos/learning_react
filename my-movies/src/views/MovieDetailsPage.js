import { MoviesServices } from "../api/MoviesServices"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export const MovieDetailsPage = () => {
    let { movieId } = useParams();

    const [ movieDetails, setMovieDetails ] = useState({});

    useEffect(() => {
        const fetchMovieById = async () => {
            const { data } = await MoviesServices.getMovieById(movieId);
            setMovieDetails(data);
        }
        fetchMovieById(movieId);
    }, [movieId])

    console.log(movieDetails);
    return (
        <h1>Detalhes filme: {movieDetails.original_title} </h1>
    )
}