import styles from "@/styles/movieNow.module.css";

function MovieNow() {
  return (
    <section className={styles.containerMovieNow}>
      <div></div>
      <div className="d-flex align-items-center justify-content-center flex-wrap my-4">
        <div className={styles.containerBoxSec}>
          <div className={styles.boxSecImg}></div>
        </div>
        <div className={styles.containerBoxSec}>
          <div className={styles.boxSecImg}></div>
        </div>
        <div className={styles.containerBoxSec}>
          <div className={styles.boxSecImg}></div>
        </div>
       
      </div>
    </section>
  );
}

export default MovieNow;
