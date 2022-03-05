import React,{useContext} from 'react';
import { MovieCardWatchList } from './MovieCardWatchList';
import { GlobalState } from '../Context/GlobalState';

export const Watched = () => {
  console.log("WATCHED RENDERED");
  const {watched} = useContext(GlobalState);

  return (
    <div className='movie-page'>
          <div className='container'>
                <div className='header'>
                    <h1 className='heading'>Watched Movies</h1>
                </div>
                
                <div className='movie-grid'>
                  {watched.length>0 ? watched.map(cmovie=>(
                    <MovieCardWatchList movie={cmovie} type="watched" key={cmovie.id}/>
                  )):<h2 className='no-movies'>No movies in your watched,please add some!!!</h2>}
                </div>
          </div>
    </div>
  )
}
