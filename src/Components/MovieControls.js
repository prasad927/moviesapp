import React,{useContext}from 'react';
import { GlobalState } from '../Context/GlobalState';

export const MovieControls = ({ movie, type }) => {
    const {changeMoviesState} = useContext(GlobalState);

     return (
        <div className='inner-card-controls'>
            {
                type === 'watchList' ? (
                    <>
                        <button className='ctrl-btn' onClick={()=>{changeMoviesState('ADD_TO_WATCHED',movie)}}>
                             <i class="fa-solid fa-eye"></i>
                        </button>

                        <button className='ctrl-btn' onClick={()=>{changeMoviesState('REMOVE_FROM_WATCHLIST',movie)}}>
                             <i class="fa-solid fa-circle-xmark"></i>
                        </button>

                    </>
                ) : (<>
                        <button className='ctrl-btn' onClick={()=>{changeMoviesState('ADD_TO_WATCHLIST_FROM_WATCHED',movie)}}>
                            <i class="fa-solid fa-eye-slash"></i>
                        </button>

                        <button className='ctrl-btn' onClick={()=>{changeMoviesState('REMOVE_FROM_WATCHED_COMPLETELY',movie)}}>
                             <i class="fa-solid fa-circle-xmark"></i>
                        </button>
                     </>)
            }
        </div>
    )
}
