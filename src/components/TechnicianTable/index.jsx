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
      {/* <img src="/images/profile_1.jpg" alt="/profile_1" /> */}

      <form onSubmit={handleSearch}>
        <label>
          Search In:
          <input
            type="text"
            value={searchIn}
            onChange={(e) => setSearchIn(e.target.value.trim())}
          />
        </label>
        <label>
          Search By:
          <input
            type="text"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value.trim())}
          />
        </label>
        <label>
          Sort By:
          <input
            type="text"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value.trim())}
          />
        </label>
        <label>
          Sort Direction:
          <select
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value.trim())}
          >
            <option value="">Select</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID Number</th>
            <th>Full Name</th>
            <th>Treatments ID</th>
            <th>Phone Number</th>
            <th>image</th>
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
