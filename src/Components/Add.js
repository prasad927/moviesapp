import React,{useEffect, useState,useContext}from 'react';
import { MovieCard } from './MovieCard';
import { GlobalProvider } from '../Context/GlobalState';
import { GlobalState } from '../Context/GlobalState';
export const Add = () => {
    const [searchedText,setSearchedText]=useState('');
    // const [recommended,setRecommended]= useState([]);
    // const [resultMovies,setMovies] = useState([]);
    const {recommended,setRecommended,resultMovies,setResultMovies} = useContext(GlobalState);

    console.log(recommended);
    const handleChange =(e)=>{
        e.preventDefault();
        setSearchedText(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${'9742dd60963beba36e5fe755f7e5ca8d'}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
            if(!data.errors){
               setResultMovies(data.results);
               setRecommended([]);
            }else{
               setResultMovies([]);
            }
        }).catch(function(err){
            console.log(err);
        });
    }


    //  run as component did mount.
    useEffect(()=>{
        console.log("FROM COMPONET DID MOUNT")
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9742dd60963beba36e5fe755f7e5ca8d&language=en-US&page=${1}`)
        .then(res=>{
            return res.json();
        }).then(data=>{
            const results = data.results.slice(0,10);
            setRecommended([...results]);
            setResultMovies([]); //debug the line
        })
    },[])


    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <input type="text" 
                            placeholder='Search for movie' 
                            value={searchedText}
                            onChange={handleChange}
                        ></input>
                    </div>

                    {resultMovies.length>0 ? (
                        <>
                        <h3 className='heading'>Searched results...</h3>
                        <ul className='results'>
                            {
                                resultMovies.map(movie=>(
                                    <li key={movie.id}>
                                        <MovieCard movie={movie}/>
                                    </li>
                                ))
                            }
                        </ul>
                        </>
                    ) :(
                        <>
                        <h2 className='heading'>Recommended!!!</h2>
                        <ul className='results'>
                            {
                                recommended.map(movie=>(
                                    <li key={movie.id}>
                                        <MovieCard movie={movie}/>
                                    </li>
                                ))
                            }
                        </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
