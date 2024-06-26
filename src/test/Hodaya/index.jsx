import React, { useEffect,useState } from 'react'

import useApi from '../../hooks/useApi';


export default function Hodaya() {
  const [rows, setRows] = useState(15)
  const [pageNumber, setPageNumber] = useState(1)
  const [ref, setRef] = useState("6678464e815884d6e23a4542")

  const [dataPage, setdataPage] = useState("6678464e815884d6e23a4542")



  const {data=[], loading, error} = useApi(`generator/pagination?rows=${rows}&pageNumber=${pageNumber}&ref=${ref}`)
  // setdataPage(data)

  // useEffect(() => {
  //   fetchMoreData();
  // }, [rows, pageNumber, ref]);

  // const fetchMoreData = async () => {
  //   try {
  //     // setLoading(true);
  //     // const response = await fetch(`generator/pagination?rows=${rows}&pageNumber=${pageNumber}&ref=${ref}`);
  //     // const result = await response.json();
  //     const {data=[], loading, error} = useApi(`generator/pagination?rows=${rows}&pageNumber=${pageNumber}&ref=${ref}`)
  //     setdataPage(data)
  //     setData(prevData => [...prevData, ...result.data]); // Append new data to existing data
  //     // setLoading(false);
  //   } catch (error) {
  //     // setError(error);
  //     // setLoading(false);
  //   }
  // };

  const handleScroll = (e) => { 
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom ) {
      console.log("ff")
      setPageNumber(prevPageNumber => prevPageNumber + 1); 
    }
  };

  return (
    <div onScroll={handleScroll} style={{overflowY: 'scroll', maxHeight: '100vh'}}>
      <ul>
        {data.map((r,i) => {
          return(
            <li key={i}>
              <h1>{r._id+'\n '}</h1>
              <span>{r.scenarioId}</span>
            </li>
          )
        })}        
      </ul>
    </div>
  )

}





















