//connection with APi 
//fetching the 'url' and providing the additional 'options' to the site 'url,options' params are here



export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_YT_KEY,
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
// extracting Data
  const data = await res.json();

  return data;
};
