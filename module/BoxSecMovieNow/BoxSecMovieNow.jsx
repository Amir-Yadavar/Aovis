import styles from "@/styles/movieNow.module.css";

function BoxSecMovieNow(props) {
  return (
    <div className={styles.containerBoxSec}>
      <div className={styles.boxSecImg}></div>
      <div>
        <div className={styles.titleBoxSec}>
          <span>{props.span}</span>
          <h3>
            {props.title1}
            <br />
            {props.title2}
          </h3>
        </div>
        <div className={styles.iconBoxContainer}>{props.icon}</div>
      </div>
    </div>
  );
}

export default BoxSecMovieNow;
