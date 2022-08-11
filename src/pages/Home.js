import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import BMI from '../components/BMI';
import Pricing from './../components/Pricing';
import Sohailzack from './../components/Sohailzack';

const Home = () => {
/* Setting the state of the component. */
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <BMI/>
    
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
     
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <Sohailzack/>
      <Pricing/>
      
    </Box>
  );
};

export default Home;
