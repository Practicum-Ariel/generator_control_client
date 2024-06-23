
import LineGraph from '../../components/LineGraph';
import PointsGraph from '../../components/PointsGraph';
import SensorCheckBox from '../../components/SensorCheckbox';

import styles from './style.module.css';



const Sivan = () => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.canvasContainer}>
      <LineGraph/>
      <PointsGraph/>

      </div>
     <SensorCheckBox/>
    </div>
  );
};

export default Sivan;
