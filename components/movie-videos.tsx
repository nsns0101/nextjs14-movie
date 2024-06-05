import { API_URL } from "../app/(Home)/page";

async function getVideos(id:string) {
    // console.log(`Fetching videos: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVidos({id} : {id:string}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}