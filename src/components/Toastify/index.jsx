import React, { useContext, useState } from 'react'
import style from './style.module.css'
import { toastify } from '../../layout/MainRoutes';

export default function index({text,status}) {
    // const [toshow, setToshow] = useState(true)
  const { toshow,setToshow } = useContext(toastify);

    setTimeout(()=>{
        setToshow(false)
    },5000)
  return (<>
   {toshow && <div className={`${style.main} ${style[status]}`}>{text}</div>}
  </>
  )
}
