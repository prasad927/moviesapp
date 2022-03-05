import React,{useContext} from 'react';
import { GlobalState } from '../Context/GlobalState';
import { MovieCardWatchList } from './MovieCardWatchList';

export const WatchList = () => {
  console.log("WATCH LIST RENDERED");
  const {watchList} = useContext(GlobalState);
  return (
    <div className='movie-page'>
          <div className='container'>
                <div className='header'>
                    <h1 className='heading'>My WatchList</h1>
                </div>
                
                <div className='movie-grid'>
                  {watchList.length>0 ? watchList.map(cmovie=>(
                    <MovieCardWatchList movie={cmovie} type="watchList"/>
                  )):<h2 className='no-movies'>No movies in your watchList,please add some!!!</h2>}
                </div>
          </div>
    </div>
  )
}
