import React from 'react';
import { Box, Typography, Stack } from '@mui/material';


import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaTwitch,
} from 'react-icons/fa'

const Footer = () => (
  <Box mt="80px" bgcolor="#edf2f8">
    <Box className='w-full mt-24 bg-gray-90 text-black py-y px-2'>
        <Box className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            
            <Box>
                <h6 className='font-bold text-primary uppercase pt-2'>Support</h6>
                <Stack>
                    <a href='/' className='cursor-pointer   hover:underline py-1'>Pricing</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Documentation</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Guides</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>API Status</a>
                </Stack>
            </Box>
            <Box>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <Stack>
                    <a href='/' className='cursor-pointer hover:underline py-1'>About</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Blog</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Jobs</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Press</a>
                    <a href='/' className='cursor-pointer hover:underline py-1'>Partners</a>
                </Stack>
            </Box>
           
            <Box className='col-span-2 pt-8 md:pt-2'>
                <Typography className='text-bold text-3xl text-color-secondary uppercase'>Subscribe to our newsletter</Typography>
                <Typography className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</Typography>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 rounded-md mb-4 bg-slate-300 ' type="email" placeholder='Enter email..'/>
                    <button className="hover:shadow-xl bg-blue-600 text-white font-bold rounded-full my-0 py-0 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Subscribe</button>
                </form>
            </Box>
        </Box>

        <Box className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <Typography className='py-4'>2022 Made with ❤️ in University Of Narowal. All rights reserved</Typography>
        <Box className='flex cursor-pointer hover:color-primary justify-between sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook  />
            <FaInstagram />
            <FaTwitter />
            <FaTwitch />
            <FaGithub />
        </Box>
        </Box>
    </Box>

  </Box>
);

export default Footer;
