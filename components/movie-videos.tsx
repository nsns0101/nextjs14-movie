import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css"
async function getVideos(id:string) {
    // console.log(`Fetching videos: ${Date.now()}`);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    // throw new Error("error!!");
    const response = await fetch(`${API_URL}/${id}/videos`);
    
    const json = await response.json();
    return json;
}

export default async function MovieVidos({id} : {id:string}){
    const videos = await getVideos(id);
    console.log("videos", videos);
    return (
        <div className={styles.container}>
            {videos.map(video => (
                <iframe 
                    key={video.id} 
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    )
}