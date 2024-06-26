import { useEffect } from 'react'
import styles from './style.module.css'
import { apiReq } from '../../helpers/apiReq'


// creator: Shani
// props: { title: string }
export default function Shani() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiReq({ url: '/test' });
        console.log('Response data:', responseData); // כאן אני מטפלת בתשובה של הבקשה במקרה של הצלחה
      } catch (error) {
        console.error('Error fetching data:', error.message); //  כאן אני מטפלת בשגיאה במקרה של כישלון הבקשה
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.Shani}>
      Shani
    </div>
  )
}
