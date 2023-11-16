import axios from 'axios';

const apiUrl = 'https://mocki.io/v1/3a4b56bd-ad05-4b12-a181-1eb9a4f5ac8d';

export const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
