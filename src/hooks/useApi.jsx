import { useEffect, useState } from "react";
import { apiReq } from "../helpers/apiReq";

/**
 *  a custom hook to fetch data from any component in the DOM tree.
 * @param {String | required} url  the request endpoint / url
 * @param {String | 'GET'} method  the request method (default = 'GET')
 * @param {object | null} body  the request body if exist, if not body null
 * @param {Object | undefined} params the request params, default is empty object
 * @returns data, loading, error
 */
function useApi(url, method = "GET", body = {}, params = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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
        console.log("useApi error --> ", error.message);
        setError(error);
        setData("");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useApi;
