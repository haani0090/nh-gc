//connection with APi 
//fetching the 'url' and providing the additional 'options' to the site 'url,options' params are here


/* The above code is creating an object that will be used to make a GET request to the exercise
database. */

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  },
};

/* This is the youtube API key. */
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_YT_KEY,
  },
};

// The above code is creating an object that will be used to make a GET request to the exercise
//  * It takes a url and an options object as arguments, and returns a promise that resolves to the data
//  * returned from the fetch request
//  * @param url - The URL to fetch.
//  * @param options - This is an object that contains the request method, headers, and body.
//  * @returns The data is being returned.
 
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);

  /* Extracting the data from the response. */
  const data = await res.json();

  return data;
};
