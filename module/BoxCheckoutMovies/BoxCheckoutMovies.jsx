import styles from "@/styles/boxCheckoutMovies.module.css";
import { FaClock, FaLayerGroup } from "react-icons/fa6";
function BoxCheckoutMovies(props) {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <img src={props.img} alt="img-movie" />
      </figure>

      <div className={styles.content}>
        <h2 className={styles.title}>{props.title}</h2>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center px-2">
            <span className={styles.icon}>
              <FaLayerGroup />
            </span>
            <span className={styles.text}>{props.category}</span>
          </div>
          <div className="d-flex align-items-center px-2">
            <span className={styles.icon}>
              <FaClock />
            </span>
            <span className={styles.text}>{props.min}</span>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <button className={styles.btn}>Watch Trailer</button>
          <button className={styles.btn}>Get Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default BoxCheckoutMovies;
