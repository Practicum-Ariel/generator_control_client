import styles from './style.module.css'
import useApi from '../../hooks/useApi'
import TechCheck from '../TechCheck';
import Loader from '../Loader/index'
import { useState } from 'react';

// import apihook 
// set state 
//url 
//props{items contains :fullName, date, check, avatar, content}
export default function TechCheckList({ items }) {
    // const [items, setItems] = useState([])
    //  let genid = '6678464e815884d6e23a4542'
    // const { data, loading, error } = useApi('http://localhost:3000/api/visit/6678464e815884d6e23a4542?populate=genId')

    // if (loading) return <Loader />
    // if (error) return <>Error</>
    // if (data) console.log(data)

    return (
        <div  >
            {items.map(i => <TechCheck key={i.fullName} fullName={i.fullName} date={i.date} content={i.content} />)}
        </div>
    )
}