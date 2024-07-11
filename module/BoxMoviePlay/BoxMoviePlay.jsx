import styles from "@/styles/boxMoviePlay.module.css";
import Image from "next/image";
function BoxMoviePlay(props) {
  return (
    <div className={styles.container}>
      <figure>
        <img
          src={props.img}
          alt="img-play"
          className={styles.img}
        />
      </figure>
      <div className={styles.infoBox}>
        <h4>{props.category}</h4>
        <h3>{props.name}</h3>
        <button>Get Ticket</button>
      </div>
    </div>
  );
}

export default BoxMoviePlay;
