import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

import HeroBannerImage from '../assets/images/choose-img.png';

const HeroBanner = () => (
  
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#6b7688" fontWeight="800" fontFamily="Kaushan Script" fontSize="26px">Aima Fitness Club</Typography>
    <Typography fontWeight={700} fontFamily="mono"  sx={{ fontSize: { lg: '40px', xs: '30px' } }} mb="23px" mt="30px">
    In here we will help you to shape and build your ideal 
body and<br />
live your life to the fullest. 
    </Typography>
    <Typography fontSize="22px"  color="#6b7688" fontFamily="Alegreya" lineHeight="35px">
    Explore the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'blue', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore</a>
    </Stack>
    <Typography fontWeight={600} color="#46364a" sx={{ opacity: '0.1',  fontSize: '200px' }}>
      Exercise 
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
  
);

export default HeroBanner;
