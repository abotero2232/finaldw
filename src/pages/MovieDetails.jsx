import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css"

export function MovieDetails(){

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/"+movieId, {
            headers:{
                Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmNkZWU5OGNlYzBiYjZhNTFmYjY2Mzg3MWNjZTUzNCIsInN1YiI6IjYyOGRkMWQ1MzIzZWJhMDA2NjhmNDc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YGg-IGf-kTxUdo-2ky4caEniR_chJbX2B_Hapq22v4Y",
                'Content-Type':' application/json;charset=utf-8',
            },
        })
            .then((result) => result.json())
            .then((data) => {
                setMovie(data) ;
                
            })
        }, [movieId]);
        
    if(!movie){
        return null;
    }
    
    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
    <div className={styles.detailsContainer}>
        <img className={styles.col + " " + styles.movieImage} src={imageUrl} alt={movie.title} />
        <div className={styles.col + " " + styles.movieDetails}>
            <p className={styles.firstItem}><strong> Title:</strong> {movie.title}</p>
            <p><strong> Description</strong> {movie.overview}</p>
            <p><strong>Genres: </strong>
            {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            

        </div>
    </div>
    )

}