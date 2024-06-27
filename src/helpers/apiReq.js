import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${!localStorage.token? " " : localStorage.token}`
    },
  });

// פונקציה גנרית לביצוע בקשות
export const apiReq = async ({ url, method = 'GET', data, params = {} }) => {
    if (!url) {
        console.warn('No URL provided for the request');
        return '';
      }

    console.log(`Making request to: ${url} with method: ${method}`);
  
    try {
      const response = await apiClient({
        url,
        method,
        data,
        params,
      });
  
      return response.data;
    } catch (error) {
      console.error(`Error making request to: ${url}`, error.message);
      
      throw error;
    }
  };
