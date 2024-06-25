import styles from './style.module.css'
import TechCheck from '../TechCheck';


//props{items contains :fullName, date, check, avatar, content}
export default function TechCheckList({ items }) {




    return (
        <div  >
            {items.map(i => <TechCheck key={i.fullName} fullName={i.fullName} date={i.date} check={i.check} avatar={i.avatar} content={i.content} />)}
        </div>
    )
}