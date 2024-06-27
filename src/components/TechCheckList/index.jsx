import styles from './style.module.css'
import TechCheck from '../TechCheck';
import useApi from '../../hooks/useApi';
import Loader from '../Loader';
import { useState, useEffect } from 'react';
import { da } from '@faker-js/faker';


//props{items contains :fullName, date, check, avatar, content}
export default function TechCheckList({ genId }) {
    //   const [items, setItems] = useState("")
    const GenId = '6667a8c00e30b38c5dad90562'


    const { loading, error, data } = useApi(`http://localhost:3000/api/visit?${GenId}&limit=5`)


    if (loading) return <Loader />
    else if (error) return <>error</>





    return (
        <div  >
            {data ?
                data.map(d => <TechCheck key={d._id} fullName={d.techId?.fullName} date={d.date} content={d.text} />)
                : <div></div>}

        </div>
    )
}