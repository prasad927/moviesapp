import React,{ createContext,useEffect,useState,useContext} from "react";

//initial state
let initialState={
    watchList:localStorage.getItem('watchList') ? JSON.parse(localStorage.getItem('watchList')):[],
    watched:localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')):[],
}

export const GlobalState = createContext(initialState); //creating context


//provider components.
export const GlobalProvider = (props)=>{

    const [state,setState] = useState(initialState);  //make as state

    const changeMoviesState = (msg,movie)=>{
        if(msg==='ADD_MOVIE_TO_WATCH_LIST'){
            setState({
                ...state,
                watchList:[movie,...state.watchList]
            })
            return;
        }

        if(msg==='ADD_TO_WATCHED'){
            setState({
                ...state,
                watchList:state.watchList.filter(cmoive=>cmoive.id!==movie.id), //remove from watched
                watched:[movie,...state.watched]
            })
        }

        if(msg==='REMOVE_FROM_WATCHLIST'){
            setState({
                ...state,
                watchList:state.watchList.filter(cmoive=>cmoive.id!==movie.id)
            })
        }

        if(msg==='ADD_TO_WATCHLIST_FROM_WATCHED'){
              setState({
                  ...state,
                  watched:state.watched.filter(cmovie=>cmovie.id!==movie.id),
                  watchList:[...state.watchList,movie]
              })
        }

        if(msg==='REMOVE_FROM_WATCHED_COMPLETELY'){
             setState({
                 ...state,
                 watched:state.watched.filter(cmovie=>cmovie.id!==movie.id)
             })
        }
    }
    
    const [recommended,setRecommended]= useState([]);
    const [resultMovies,setResultMovies] = useState([]);
     

    useEffect(()=>{
        // console.log("STATE CHANGED OF MOVIES...");
        //update local storage
        localStorage.setItem('watchList',JSON.stringify(state.watchList));
        localStorage.setItem('watched',JSON.stringify(state.watched));
    },[state]);

    console.log("HELLO FROM GLOBAL PROVIDER..");
    return(

        <GlobalState.Provider value={{watchList:state.watchList,watched:state.watched,changeMoviesState,recommended,setRecommended,resultMovies,setResultMovies}}>
            {props.children}
        </GlobalState.Provider>
    )
}

