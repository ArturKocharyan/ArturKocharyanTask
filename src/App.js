import {React} from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllIMG from './pages/AllIMG';
import MainPage from './pages/MainPage';

function App() {


  return (
    <div >
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/image' element={<AllIMG/>}/>
      </Routes>
    </div>
  );
}

export default App;
