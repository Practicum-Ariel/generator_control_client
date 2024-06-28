import { useEffect, useState } from 'react'
import { apiReq } from '../../helpers/apiReq';

import styles from './styles.module.css';

function TechVisit({ techId, genId = '667a8c00e30b38c5dad90562' }) {
  const visitTypes = ['יומי', 'שבועי', 'חודשי', 'כללי'];

  const dict = { true: 'עשית טיפול היום', false: 'לא עשית טיפול היום' };

  const [lastVisit, setLastVisit] = useState({});

  useEffect(() => {
    apiReq({ url: `/visit/lastVisit/${genId}` }).then((r) => {
      setLastVisit(r);
    });
  }, []);

  const timeToNextVisit = (dateA) => {
    const date = new Date(dateA);
    let currentDate = new Date();
    const nextWeekVisit = new Date(date);
    nextWeekVisit.setUTCDate(nextWeekVisit.getUTCDate() + 7);

    const nextMonthVisit = new Date(date);
    nextMonthVisit.setUTCMonth(nextMonthVisit.getUTCMonth() + 1);

    const didDayVisit =
      date.getUTCFullYear() === currentDate.getUTCFullYear() &&
      date.getUTCMonth() === currentDate.getUTCMonth() &&
      date.getUTCDate() === currentDate.getUTCDate();

    const nextVisit = {
      nextWeekVisit:
        (nextWeekVisit > currentDate &&
          Math.ceil(Math.abs(nextWeekVisit - date) / (1000 * 60 * 60 * 24))) ||
        'passed',
      nextMonthVisit:
        (nextMonthVisit > currentDate &&
          Math.ceil(Math.abs(nextMonthVisit - date) / (1000 * 60 * 60 * 24))) ||
        'passed',
      didDayVisit: didDayVisit ? 'true' : 'false',
    };

    return nextVisit;
  };

  const DaysLeftToNextVisit = timeToNextVisit(lastVisit.date);

  return (
    <div className={styles.techVisit}>
      <div className={styles.alertNextVisit}>
        <span>{`הטיפול האחרון :${lastVisit.date}`}</span>
        <span
          style={{
            backgroundColor:
              DaysLeftToNextVisit.nextWeekVisit == 'passed'
                ? 'red'
                : DaysLeftToNextVisit.nextWeekVisit >= 4
                ? 'green'
                : 'orange',
          }}>
          {`הזמן שנשאר לטיפול שבועי :${DaysLeftToNextVisit.nextWeekVisit}`}
        </span>
        <span
          style={{
            backgroundColor:
              DaysLeftToNextVisit.nextMonthVisit == 'passed'
                ? 'red'
                : DaysLeftToNextVisit.nextMonthVisit >= 20
                ? 'green'
                : 'orange',
          }}>
          {` הזמן שנשאר לטיפול חודשי :${DaysLeftToNextVisit.nextMonthVisit}`}
        </span>
        <span
          style={{
            backgroundColor:
              DaysLeftToNextVisit.didDayVisit == 'false' ? 'red' : 'grren',
          }}>
          {dict[DaysLeftToNextVisit.didDayVisit]}
        </span>
      </div>
      <div className={styles.sortAndTable}>
        <div className={styles.sortByVisitType}>
          {visitTypes.map((type, i) => {
            return (
              <div key={i} className={styles.type}>
                <span>{type}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.visitTable}></div>
      </div>
      <div className={styles.newVisit}>
        <button> צור ביקור חדש </button>
      </div>
    </div>
  );
}

export default TechVisit;