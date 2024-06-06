import { API_URL } from "../app/(Home)/page";
import styles from "../styles/movie-info.module.css";
export async function getMovie(id:string) {
    // console.log(`Fetching movie: ${Date.now()}`);
    // await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({id} : {id:string}){
    const movie = await getMovie(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3 className="">⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                {/* target="_blank"는 링크가 새 창 또는 새 탭에서 열리도록 지정하는 HTML 속성 */}
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}