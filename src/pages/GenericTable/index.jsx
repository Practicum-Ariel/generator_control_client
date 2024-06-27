import styles from './style.module.css'
import useApi from '../../hooks/useApi'
import Loader from '../../components/Loader'
import { useState, useEffect } from 'react'
import { FaRegEye, FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'

// Instructions to use GenericTable:

// from the mother component, you should pass 6 params:

// 1. tableName (type: String)
// 2. columns (type: Array) >> example:
// [
//   { header: 'מזהה', accessor: 'index' },
//   { header: 'שם', accessor: 'name' },
//   { header: 'גיל', accessor: 'age' },
//   { header: 'כתובת', accessor: 'email' },
// ]
// 3. rows (type: Array) >> this is the data that returns from useApi
// 4. function onDelete - get the row object, and do other actions as you like
// 5. function onDetails - get the row object, and do other actions as you like
// 6. function onEdit - get the row object, and do other actions as you like


// example below: 

export default function MotherComponent() { // the component that call GenericTable
  const { data = [], loading, error } = useApi('/technician')
  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])
  const [tableName, setTableName] = useState('')

  useEffect(() => {
    setTableName('טכנאים')

    const columns = [{ header: 'מזהה', accessor: 'index' }, { header: 'שם', accessor: 'fullName' }, { header: 'טלפון', accessor: 'phoneNumber' },]

    setColumns(columns)

    if (data) setRows(data.map((d, i) => ({ ...d, index: i + 1 })))
  }, [data])

  // user should write here 3 functions: onDelete, onDetails, onEdit
  const onDelete = (row) => {
    console.log('delete row:', row)
  }

  const onDetails = (row) => {
    console.log('item details:', row)
  }

  const onEdit = (row) => {
    console.log('edit item:', row)
  }

  if (loading) return <Loader />
  if (error) return error

 return (
    <div>
      <GenericTable tableName={tableName} columns={columns} rows={rows} onDelete={onDelete} onDetails={onDetails} onEdit={onEdit} />
    </div>
  )
}

// creator: Eti
function GenericTable({ tableName, columns, rows, onEdit, onDetails, onDelete }) {
  return (
    <section className={styles.genericTable}>
      <h1>{tableName}</h1>
      <table>
        <thead>
          <tr>
            {columns?.map((col) =>
              <th key={col.accessor}>{col.header}</th>
            )}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row) =>
            <tr key={row._id}>
              {columns?.map((col) =>
                <td key={col.accessor}>
                  {row[col.accessor]}
                </td>
              )}
              <td>
                <button onClick={() => onEdit(row)}><FaRegEdit /></button>
                <button onClick={() => onDetails(row)}><FaRegEye /></button>
                <button onClick={() => onDelete(row)}><FaRegTrashAlt /></button>
              </td>
            </tr>)}
        </tbody>
      </table>
    </section>
  )
}
