import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${!localStorage.token? " " : localStorage.token}`
    },
    timeout: 5000, 
  });

// פונקציה גנרית לביצוע בקשות
export const apiReq = async ({ url, method = 'GET', data = null, params = {} }) => {
    if (!url) {
        console.warn('No URL provided for the request');
        return ''; // במידה ואין כלום מחזיר סטרינג ריק
      }
    // לוג בתחילת הבקשה
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
      // לוג בשגיאה
      console.error(`Error making request to: ${url}`, error.message);
  
      // זריקת השגיאה הלאה
      throw error;
    }
  };
