import React, {useContext} from 'react';
import { GlobalState } from '../Context/GlobalState';
import { MovieControls } from './MovieControls';


export const MovieCard = ({movie}) => {
  const {changeMoviesState,watchList,watched} = useContext(GlobalState);
  // console.log(watched);

  let storedMovieInWatcheList = watchList.find(cmovie=>cmovie.id===movie.id);
  let storedMovieInWatched = watched.find(cmovie=>cmovie.id===movie.id);
     //if present in watched or in watchedList check here
  let isPresent = storedMovieInWatched || storedMovieInWatcheList ? true:false;

  return (
    <div className='result-card' key={movie.id}>
        <div className='poster-wrapper'>
             {movie.poster_path ? (
                 <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title+" poster"}/>
             ):(
                 <div className='filler-poster'></div>
             )}
        </div>

        <div className="info">
             <div className="header">
                 <h3 className="title">{movie.title}</h3>
                 <h4 className='release-date'>{movie.release_date && movie.release_date.substring(0,4)||'####'}</h4>
             </div>

             <div className='controls'>
                <button className='btn' 
                        onClick={()=>{changeMoviesState('ADD_MOVIE_TO_WATCH_LIST',movie)}} disabled={isPresent}>Add to watchlist</button>
             </div>
        </div>
    </div>
  )
}
