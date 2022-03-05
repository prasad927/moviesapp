import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Add } from './Components/Add';
import { Navbar } from './Components/Navbar';
import { WatchList } from './Components/WatchList';
import { Watched } from './Components/Watched';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <>
      <GlobalProvider>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<WatchList />}></Route>
            <Route path="/watched" element={<Watched />}></Route>
            <Route path="/add" element={<Add />}></Route>
          </Routes>
        </Router>
        
      </GlobalProvider>
    </>
  );
}

export default App;
