import React, { useState, useEffect } from 'react';
import useApi from '../../hooks/useApi';
import styles from './style.module.css';

function TechnicianTable() {
  const [searchIn, setSearchIn] = useState('')
  const [searchBy, setSearchBy] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [sortDir, setSortDir] = useState('')
  const baseUrl = `/technician/by-filter`
  const [url, setUrl] = useState(baseUrl)


  const { data: technicians, loading, error } = useApi(
    url,
    'GET',
    null,

  );
  if (loading) return <>loading...</>
  if (error) return <>ERROR</>
  // כאשר המשתמש לוחץ על הכפתור חיפוש הפונקציה מונעת את השליחה המקורית ומבצעת בקשה חדשה לשרת ע"מ להביא את הנתונים העדכניים
  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(`/technician/by-filter?searchIn=${searchIn}&searchBy=${searchBy}&sortBy=${sortBy}&sortDir=${sortDir}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          חיפוש ב:
          <input
            type="text"
            value={searchIn}
            onChange={(e) => setSearchIn(e.target.value.trim())}
          />
        </label>
        <label>
          חיפוש לפי:
          <input
            type="text"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value.trim())}
          />
        </label>
        <label>
          מיין לפי:
          <input
            type="text"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value.trim())}
          />
        </label>
        <label>
          כיוון מיון:
          <select
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value.trim())}
          >
            <option value="">חיפוש</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <button type="submit">חיפוש</button>
      </form>

      <table>
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
