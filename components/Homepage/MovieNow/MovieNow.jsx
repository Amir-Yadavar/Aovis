import styles from "@/styles/movieNow.module.css";
import { FaAward } from "react-icons/fa6";
import { GiDualityMask } from "react-icons/gi";
import { FaTheaterMasks } from "react-icons/fa";
import BoxSecMovieNow from "@/module/BoxSecMovieNow/BoxSecMovieNow";

function MovieNow() {
  return (
    <section className={styles.containerMovieNow}>
      <div></div>
      <div className="d-flex align-items-center justify-content-center flex-wrap my-4">
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
    </section>
  );
}

export default MovieNow;
