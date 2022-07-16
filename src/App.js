import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import './App.css';
import Home from './pages/Home'
import ExcerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Box>
    <Navbar />
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path = "/exercise/:id" element={<ExcerciseDetail/>} />
      </Routes>
    </Box>
  )
}

export default App