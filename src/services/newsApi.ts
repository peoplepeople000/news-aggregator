import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getTopHeadlines = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching top headlines');
  }
};
