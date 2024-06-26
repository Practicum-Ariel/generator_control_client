import React, { useState, useEffect } from 'react';
import { useApi } from '../hook/useApi';

function TechnicianTable() {
  const [technicians, setTechnicians] = useState([])
  const [searchIn, setSearchIn] = useState('')
  const [searchBy, setSearchBy] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [sortDir, setSortDir] = useState('')

  useEffect(() => {
    fetchTechnicians();
  }, []);

  const { data: fetchTechnicians, loading, error } = useApi(
    'http://localhost:3000/api/technician/by-filter',
    'GET',
    null,
    { searchIn, searchBy, sortBy, sortDir }
  );

// כאשר המשתמש לוחץ על הכפתור חיפוש הפונקציה מונעת את השליחה המקורית ומבצעת בקשה חדשה לשרת ע"מ להביא את הנתונים העדכניים
  const handleSearch = (e) => {
    e.preventDefault();
    fetchTechnicians();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search In:
          <input
            type="text"
            value={searchIn}
            onChange={(e) => setSearchIn(e.target.value)}
          />
        </label>
        <label>
          Search By:
          <input
            type="text"
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          />
        </label>
        <label>
          Sort By:
          <input
            type="text"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          />
        </label>
        <label>
          Sort Direction:
          <select
            value={sortDir}
            onChange={(e) => setSortDir(e.target.value)}
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
          </tr>
        </thead>
        <tbody>
          {technicians.map((tech) => (
            <tr key={tech.idNum}>
              <td>{tech.idNum}</td>
              <td>{tech.fullName}</td>
              <td>{tech.treatmentsId}</td>
              <td>{tech.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianTable;
