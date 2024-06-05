import { API_URL } from "../app/(Home)/page";

async function getMovie(id:string) {
    // console.log(`Fetching movie: ${Date.now()}`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfo({id} : {id:string}){
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}