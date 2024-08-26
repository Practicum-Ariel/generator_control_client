import styles from './style.module.css'

export default function BoxSensorType({ handleFilter, types, selected, name }) {

    // const handleSelected = (e, type) => {
    //     e.preventDefault()
    //     setSelected(type.value)
    // }

    return (
        <div className={styles.box}>
            <menu>
                {types.map(type => {
                    return <button className={`${styles[type.value]} ${selected === type.value ? styles.selected : ''}`}
                        onClick={(e) => handleFilter(e, type.value, name)} key={type.value}>
                        {type.text}
                    </button>
                })}
            </menu>
        </div>
    )
}