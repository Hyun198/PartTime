import React, { useEffect, useState } from 'react'
import './Movie.css';

function Movie() {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        const today = new Date();
        const currentDay = today.getDay();
        //일요일 설정
        today.setDate(today.getDate() - currentDay);
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;
        let targetDt = `${year}${month}${day}`;

        const api_key = `924e226f51dd500f8092112eab54833f`;
        const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${api_key}&weekGb=0&targetDt=${targetDt}`;
        const response = await fetch(url);
        const data = await response.json();
        const BoxOfficeList = data.boxOfficeResult.weeklyBoxOfficeList;

        const posterMoviesList = await Promise.all(BoxOfficeList.map(async (movie) => {
            const posterURL = await getPoster(movie.movieNm, movie.openDt);
            return { ...movie, posterURL };
        }));
        setMovieList(posterMoviesList);
    };

    const getPoster = async (title, openDt) => {
        const KMDB_API_KEY = 'Q0YF214E5O2XQR10ZF51';
        const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&listCount=30&query=${title}&releaseDts=${openDt}&ServiceKey=${KMDB_API_KEY}`
        const response = await fetch(url);
        const data = await response.json();
        const poster = data.Data[0].Result[0].posters;
        const posterURLs = poster.split('|');
        return posterURLs[0];

    }

    return (
        <div className="movies-board">
            {movieList.map((movie) => (
                <div className="movies" key={movie.movieCd}>
                    <div className="movie">
                        <img src={movie.posterURL} alt={movie.movieNm} />
                        <div className="movie-title">
                            {movie.movieNm}
                        </div>
                        <div className="movie-desc">
                            <p className="rank">박스오피스 순위: {movie.rank}</p>
                            {/* <p className="movie-start">영화 개봉일: {movie.openDt}</p> */}
                            <p className="movie-audCnt">오늘 관객 수: {movie.audiCnt} 명</p>
                            <p className="movie-audAll">누적 관객 수: {movie.audiAcc} 명</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Movie