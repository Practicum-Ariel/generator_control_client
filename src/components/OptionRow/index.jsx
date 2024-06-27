import styles from './style.module.css'

function OptionRow({option}){
    return (
        <button className={styles.optionRow} onClick={option.func}>
            {option.icon} {option.text}
        </button>
    )
}

export default OptionRow