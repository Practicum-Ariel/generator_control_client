import { useState } from 'react';
import SelectSensors from '../../components/SelectSensors';
import styles from './style.module.css';

// creator: ShmuelA
// props: { title: string }
export default function ShmuelA() {
    const [sensors, setSensors] = useState([])
    const sensorsArray = ["t1", "t2", "t4", "v1", "v2", "v3", "v4", "t3", "s1", "s2", "s3", "s4"]

    return (
        <div >
            <SelectSensors arraySensors={sensorsArray} sensors={sensors} setSensors={setSensors} nameBtn={"בחירת חיישנים"} />
        </div>
    );
}
