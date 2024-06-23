import styles from "./style.module.css";
import { FaHamburger } from "react-icons/fa";

// creator: Ilay
// props: { title: string }
export default function Ilay() {
  return (
    <div className={styles.Ilay}>
      <h3>
        h3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
        eligendi!
      </h3>

      <h2>
        h3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
        eligendi!
      </h2>

      <button>
        <FaHamburger />
        Ilay test
      </button>

      <input
        type="text"
        placeholder="Ilay test"
        value={"this is a test of imput"}
      />

      <input type="checkbox"></input>

      <div className={styles.errorContainer}>error lorem 8</div>
      <div className={styles.graphsContainer}>graph</div>
    </div>
  );
}
