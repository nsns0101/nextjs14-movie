import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata( {params: { id } }: IParams){
// export async function generateMetadata({params: {id}} : IParams){
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}


export default async function MovieDetailPage({params: {id}}: IParams}){
    // console.log("props!! ===========> ", id);

    // 병렬적 실행
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

    return (
        <div>
            {/* page 단위 로딩 => loading.tsx */}
             {/* 서버 컴포넌트 단위 로딩 => Suspense(
                Promise.all과 비슷하지만 Promise.all은 전부 렌더 되어야하는데
                Suspense는 개별적 로딩이 가능
            ) */}
            <Suspense fallback={<h1>Loading moive info</h1>}>
                <MovieInfo id={id}/>
            </Suspense>

            <Suspense fallback={<h1>Loading moive videos</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    )
}