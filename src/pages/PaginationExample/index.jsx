import { useEffect, useState } from 'react'

import { apiReq } from '../../helpers/apiReq';


export default function PaginationExample() {
  const [rows, setRows] = useState(15)
  const [pageNumber, setPageNumber] = useState(1)
  const [ref, setRef] = useState("6678464e815884d6e23a4542")

  const [data, setData] = useState([])


  useEffect(() => {
    apiReq({ url: `generator/pagination?rows=${rows}&pageNumber=${pageNumber}&ref=${ref}` })
      .then(r => {
        setData([...data, ...r])
      })
  }, [pageNumber]);


  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  return (
    <div onScroll={handleScroll} style={{ overflowY: 'scroll', maxHeight: '100vh' }}>
      <ul>
        {data.map((r, i) => {
          return (
            <li key={i}>
              <h1>{i}|{r._id + '\n '}</h1>
              <span>{r.scenarioId}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )

}