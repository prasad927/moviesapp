import React,{useContext}from 'react';
import { GlobalState } from '../Context/GlobalState';
import {useParams} from 'react-router-dom';

export default function MovieInfo() {
    const {id} = useParams();
    console.log(typeof id);
    const {recommended,resultMovies} = useContext(GlobalState);
    let movie = {};
    if(recommended.length==0){
         movie = resultMovies.find(movie=>(movie.id).toString()===id);
    }else if(resultMovies.length==0){
         movie = recommended.find(movie=>(movie.id).toString()===id);
    }
  
    return (
        <div className='moviesInfoPage'>
            <div className='container'>

                    <div class="card mb-3 movieInfo">
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} class="card-img-top" alt="mvposter"/>
                            <div class="card-body">
                                <h5 class="card-title">
                                    {movie.original_title}
                                </h5>
                                <p class="card-text">
                                    {movie.overview}
                                </p>
                            </div>
                    </div>
            </div>
        </div>
    )
}
