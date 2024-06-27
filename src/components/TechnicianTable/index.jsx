import React, { useState } from 'react';
import useApi from '../../hooks/useApi';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSort  } from '@fortawesome/free-solid-svg-icons';

function TechnicianTable() {
  const [searchIn, setSearchIn] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState('');
  const baseUrl = `/technician/by-filter`;
  const [url, setUrl] = useState(baseUrl);

  const { data: technicians, loading, error } = useApi(url, 'GET', null);

  if (loading) return <div className={styles.loading}>loading...</div>;
  if (error) return <div className={styles.error}>ERROR</div>;

  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(`/technician/by-filter?searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&sortDir=${sortDir}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
      <input
  type="text"
  value={searchIn}
  placeholder="חיפוש ב:"
  onChange={(e) => setSearchIn(e.target.value.trim())}
  className={`${styles.input} ${styles.rounded} ${styles.inputWrapper}`}
/>
<input
  type="text"
  value={searchBy}
  placeholder="חיפוש לפי:"
  onChange={(e) => setSearchBy(e.target.value.trim())}
  className={`${styles.input} ${styles.rounded} ${styles.inputWrapper}`}
/>
<input
  type="text"
  value={sortBy}
  placeholder="מיין לפי:"
  onChange={(e) => setSortBy(e.target.value.trim())}
  className={`${styles.input} ${styles.rounded} ${styles.inputWrapper}`}
/>
<select
  value={sortDir}
  onChange={(e) => setSortDir(e.target.value.trim())}
  className={`${styles.input} ${styles.rounded} ${styles.inputWrapper}`}
>
  <option value="" disabled>כיוון מיון:</option>
  <option value="asc">א - ת</option>
  <option value="desc">ת - א</option>
</select>


        <button type="submit" className={styles.button}>
          <FontAwesomeIcon icon={faSearch} /> חיפוש
        </button>
      </form>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>תעודת זהות</th>
            <th>שם מלא</th>
            <th>מזהה טיפול</th>
            <th>מספר טלפון</th>
            <th>תמונת פרופיל</th>
          </tr>
        </thead>
        <tbody>
          {technicians?.map((tech) => (
            <tr key={tech.idNum}>
              <td>{tech.idNum}</td>
              <td>{tech.fullName}</td>
              <td>{tech.treatmentsId}</td>
              <td>{tech.phoneNumber}</td>
              <td>
                <img
                  src={tech.img || '/images/default_img.jpg'}
                  alt={`Img for ${tech.fullName}`}
                  className={styles.profileImage}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianTable;
