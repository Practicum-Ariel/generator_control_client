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
      <ul className={styles.boxes}>
        <li className={styles.rightBox}><a href="/">
          <h3>סימולטור גנרטורים</h3>
          <p>השתמש בסימולטור כדי לנתח ולשפר את
            <br></br>
            ביצועי הגנרטורים באופן בטוח וללא השפעה<br></br> על המערכת האמיתית.
          </p>
        </a>
        </li>
        <li className={styles.leftBox}><a href="/">
          <h3>תצוגת חיישנים בזמן אמת</h3>
          <p>ראה נתונים דינמיים מעכל החיישנים בזמן אמת,
            <br></br>
            תוך כדי פעולת הגנרטורים,לניטור מדויק
            <br></br>
            ולזיהוי בעיות מהיר במערכת.
          </p>
        </a>
        </li>
      </ul>

      <a className={styles.generator} href="/">צפה בכל הגנרטורים</a>
    </div>
  )
}
