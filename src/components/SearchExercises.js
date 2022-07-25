import React, { useState, useEffect } from "react";

import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import{ exerciseOptions,fetchData} from '../utils/fetchData'
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercises = ({setExercises, bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
 const [bodyParts, setBodyParts] = useState([])
  //it fetch the catg whenever page load, dependency array is empty coz we call it only once on start
  
  useEffect(() => {
  const fetchExerciseData =async ()=>{
    const bodyPartsdata= await fetchData('https://exercisedb.p.rapidapi.com/exercise/bodyPartLists',exerciseOptions);
  setBodyParts(['all', ...bodyPartsdata]);  
  }
  fetchExerciseData();
  }, [])
  


  const handleSearch = async () =>{
    if(search){
      const exerciseData =await fetchData('https://exercisedb.p.rapidapi.com/exercise',exerciseOptions);
    const searcedExercise = exerciseData.filter(
      (exercise)=> exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodypart.toLowerCase().includes(search)
    );
    setSearch('');
    setExercises(searcedExercise);
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Ecercises You <br />
        Should Know
      </Typography>
      <Box position="reltive" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "#3A1212",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Excercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
          }}
          onCLick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative',width:'100%',p: '20px'}}>
      {/* Passing the Data in This Component */}
          <HorizontalScrollbar data= {bodyParts} 
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}

          />
      </Box>
    </Stack>
  );
};

export default SearchExercises;

// TODOs search logic??
// TODO function handleSearch  error
// async in  handleSearch function take some time to load data from the api