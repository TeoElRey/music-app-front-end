import api from './api/axiosConfig'
import './App.css';
import {useState, useEffect} from 'react'
import Layout from './components/Layout';
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
function App() {
  const [music, setMusic] = useState()

  const getMusic = async () => {
    try {
      const response = await api.get("https://cors-anywhere.herokuapp.com/https://da62-68-36-250-212.ngrok.io/api/v1/music");

      console.log(response.data)

      setMusic(response.data);
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMusic();
  },[])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home music={music}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
