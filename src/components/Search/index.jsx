import styles from './style.module.css'

export default function Search({onInput}) {
    
    return (
      <div className={styles.search}>
          <input type="search" placeholder="search generators..." onInput={onInput} />
      </div>
    )
  }