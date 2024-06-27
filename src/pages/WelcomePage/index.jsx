import styles from './style.module.css'


// creator: yosef
// props: { title: string }
export default function WelcomePage() {
  return (
    <div className={styles.WelcomePAge}>
      <div className={styles.message}>
        <h1>ברוכים הבאים למערכת ניטור גנרטורים</h1>
      </div>
      <div className={styles.paragraph}>
        <p>המערכת שלנו מאפשרת לך לנטור את מחוללי החשמל באופן יעיל ומדויק.תוכל לקבל מידע על הפעולה של
          <br></br>
          הגנרטורים,להשתמש בסימולטור לניתוח ולתפעול,ולצפות בנתונים בזמן אמת מכל החיישנים.</p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.rightBox}>
          <h3>סימולטור גנרטורים</h3>
        </div>
        <div className={styles.leftBox}>

        </div>
      </div>
    </div>
  )
}
