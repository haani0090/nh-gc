import React from 'react';
import { Box, Typography } from '@mui/material';
import { CheckIcon } from '@heroicons/react/solid';

const Sohailzack = () => {
  return (
    <Box name='pricing' className='w-full bg-white text-black my-24'>
      <Box className='w-full h-[800px] bg-black absolute mix-blend-overlay'></Box>

      <Box className='max-w-[1240px] mx-auto py-12'>

        <Box className='text-center py-8 text-black'>
          <h2 className='text-7xl font-mono uppercase'>Sohail_Zack</h2>
          <h3 className='text-5xl font-bold text-black py-8'>The Special price for Sohail_zack!</h3>
        </Box>

        <Box className='grid md:grid-cols-2'>

          <Box className='bg-white text-black m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Max</span>
            <Box>
              <Typography className='text-6xl font-bold py-4 flex'>$0<span className='text-xl text-black  flex flex-col justify-end'>/mo</span></Typography>
            </Box>
            <Typography className='text-2xl py-8 text-black '>Special Offer </Typography>
            <Box className='text-2xl'>
                <Typography className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Unlimited Sessions</Typography>
                <Typography className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Life Time Offer </Typography>
                
                <button className="hover:shadow-xl bg-blue-600 text-white font-bold rounded-full my-0 py-0 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Get Started</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sohailzack;
