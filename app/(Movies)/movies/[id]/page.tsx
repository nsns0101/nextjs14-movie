export default function MovieDetail({params: {id},}: {params: {id: string}}){
    console.log("props!! ===========> ", id);
    return (
        <h1>MovieDetail</h1>
    )
}