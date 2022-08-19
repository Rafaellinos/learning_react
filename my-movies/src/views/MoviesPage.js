import { MoviesContainer } from "../styles/MoviesContainer";
import { MoviesList } from "../components/MoviesList";
import { MoviesServices } from "../api/MoviesServices";
import { useState, useEffect } from "react";

export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const {data} = await MoviesServices.getMovies();
        console.log(data);
        setMovies(data.results);
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <MoviesContainer>
            <MoviesList movies={movies}/>
        </MoviesContainer>
    )
};