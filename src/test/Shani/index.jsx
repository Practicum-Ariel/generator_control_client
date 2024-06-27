import { useEffect } from 'react'
import styles from './style.module.css'
import { apiReq } from '../../helpers/apiReq'
import TechnicianTable from "../../components/TechnicianTable"


// creator: Shani
// props: { title: string }
export default function Shani() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await apiReq({ url: '/test' });
        console.log('Response data:', responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.Shani}>
      Shani
      <TechnicianTable />
    </div>
  )
}
