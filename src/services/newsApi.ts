import axios from 'axios';

const API_KEY = '2c7ac39b4b4e4469bf175d4013713018';

export const getTopHeadlines = async () => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching top headlines');
  }
};
