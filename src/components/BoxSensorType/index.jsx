import styles from './style.module.css'

export default function BoxSensorType({ setSelected, types, selected }) {

    const handleSelected = (e, type) => {
        e.preventDefault()
        setSelected(type.value)
    }

    return (
        <div className={styles.box}>
            <menu>
                {types.map(type => <button className={selected === type.value ? styles.selected : ''}
                    onClick={(e) => handleSelected(e, type)}>
                    {type.text}
                </button>)}
            </menu>
        </div>
    )
}