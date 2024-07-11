import styles from "@/styles/movieNow.module.css";
import { FaAward } from "react-icons/fa6";
import { GiDualityMask } from "react-icons/gi";
import { FaTheaterMasks } from "react-icons/fa";
import BoxSecMovieNow from "@/module/BoxSecMovieNow/BoxSecMovieNow";
import { RiMovie2Fill } from "react-icons/ri";
import BoxMoviePlay from "@/module/BoxMoviePlay/BoxMoviePlay";

function MovieNow() {
  return (
    <section className={styles.containerMovieNow}>
      <div></div>
      <div className="d-flex align-items-center justify-content-center flex-wrap my-5">
        <BoxSecMovieNow
          span="Join Now"
          title1="Upcoming"
          title2="Film Festivals"
          icon={<GiDualityMask />}
        />
        <BoxSecMovieNow
          span="Watch Now"
          title1="Watch Film"
          title2="Awards"
          icon={<FaAward />}
        />
        <BoxSecMovieNow
          span="Get Ticket"
          title1="Comedy TV"
          title2="Shows"
          icon={<FaTheaterMasks />}
        />
      </div>

      <div className="d-flex flex-column align-items-center my-4 py-5">
        <span className={styles.logo}>
          <RiMovie2Fill />
        </span>
        <h4 className={styles.titleContent1h4}>Watch New Movies</h4>
        <h3 className={styles.titleContent1h3}>Movies Now Playing</h3>

        <div className="container my-2  p-3">
          <div className="d-flex align-items-center justify-content-around flex-wrap">
            <BoxMoviePlay
              img="/img/Content1/imgMovieContent1.jpg"
              category="Comedy / 180 Mins"
              name="The Fifth Day"
            />
            <BoxMoviePlay
              img="/img/Content1/imgMovieContent1-2.jpg"
              category="Comedy , Fantasy / 180 Mins"
              name="Cruella"
            />
            <BoxMoviePlay
              img="/img/Content1/imgMovieContent1-3.jpg"
              category="Horror / 120 Min"
              name="The Scariest Dream"
            />
            <BoxMoviePlay
              img="/img/Content1/imgMovieContent1-4.jpg"
              category="Crime / 140 Min"
              name="Alis Keep Walking"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieNow;
