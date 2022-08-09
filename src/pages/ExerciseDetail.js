import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';



const ExerciseDetail = () => {
  /* This is a React Hook. It is a function that lets you “hook into” React state and lifecycle
  features from function components. */
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
 
  /* Destructuring the id from the useParams hook. */
  const { id } = useParams();

 /* The above code is using the useEffect hook to fetch data from the exercise database and youtube. */
  /**
   * We're using the `useEffect` hook to fetch the exercise data from the RapidAPI exercise database
   * and the YouTube search API
   */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);   
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
     {/* The above code is passing the exerciseDetail and exerciseVideos props to the Detail and
     ExerciseVideos components.  */}
     <Detail exerciseDetail={exerciseDetail} />
        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      {/*<SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> */}
    </Box>
  );
};

export default ExerciseDetail;
