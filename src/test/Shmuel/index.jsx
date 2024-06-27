import TechCheck from '../../components/TechCheck';
import TechCheckList from '../../components/TechCheckList';
import useApi from '../../hooks/useApi';
import MainLayout from '../../layout/MainLayout';
import styles from './style.module.css';

// creator: Shmuel
// props: { title: string }
export default function Shmuel() {
  // const { data, loading, error } = useApi(
  //   'https://api.spaceflightnewsapi.net/v4/articles'
  // );

  // if (loading) return '...Loading';
  // if (error) return error;
  // if (data) return console.log(data);

  return (
    <div className={styles.Shmuel}>
      <TechVisitrForm />
      {/* <MainLayout /> */}
      {/* {data} */}
      {/* <button>useApi</button> */}
    </div>
  );
}
