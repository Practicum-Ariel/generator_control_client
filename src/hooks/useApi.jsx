import { useEffect, useState } from 'react';
import { apiReq } from '../helpers/apiReq';

function useApi(url, method = 'GET', body = null, params = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //  בניית אובייקט מהפרמטרים שמתקבלים,
  //  apiReq והעברה להמשך טיפול לפונקצית
  const request = { url, method, body, params };

  useEffect(() => {
    setLoading(true);

    apiReq(request)
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((error) => {
        console.log('useApi error --> ', error.message);
        setError(error);
        setData('');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useApi;