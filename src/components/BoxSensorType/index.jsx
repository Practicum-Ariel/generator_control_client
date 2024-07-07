import styles from './style.module.css'

export default function BoxSensorType({ setSelected, types, selected }) {

    const handleSelected = (e, type) => {
        e.preventDefault()
        setSelected(type.value)
    }

    return (
        <div className={styles.box}>
            <menu>
                {types.map(type => {
                    return <button className={`${styles[type.value]} ${selected === type.value ? styles.selected : ''}`}
                    onClick={(e) => handleSelected(e, type)} key={type.value}>
                    {type.text}
                </button>})}
            </menu>
        </div>
    )
}