import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './screens/Header';
import RandomGif from './screens/RandomGif';
import Search from './screens/Search';


function App() {
  return (
    <div className="App">
      <div className='links'>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/RandomGif"}>RandomGif</NavLink>
          <NavLink to={"/Search"}>Search</NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/RandomGif" element={<RandomGif/>}/>
        <Route path="/Search" element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;
