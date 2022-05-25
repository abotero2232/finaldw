import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function  MoviesGrid(){
    // let movies = [];
    const [movies, setMovies]= useState([]);
    
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers:{
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmNkZWU5OGNlYzBiYjZhNTFmYjY2Mzg3MWNjZTUzNCIsInN1YiI6IjYyOGRkMWQ1MzIzZWJhMDA2NjhmNDc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGg-IGf-kTxUdo-2ky4caEniR_chJbX2B_Hapq22v4Y",
                'Content-Type':' application/json;charset=utf-8',
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setMovies(data.results) ;
                
            })
        }, []);
    
    return(
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}