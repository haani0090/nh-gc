import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';
import Home from './pages/Home'
import ExcerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
    <Navbar />
      <Routes>
       {/* A route. It is saying that if the path is "/" then render the Home component.  */}
        <Route path= "/" element={<Home/>} />
        <Route path = "/exercise/:id" element={<ExcerciseDetail/>} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App