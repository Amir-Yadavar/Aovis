import styles from "@/styles/documentary.module.css";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";

function Documentary() {
  return (
    <section className={styles.container}>
      <div className="container  p-3">
        <div className="row">
          <div className="col-12 col-xl-5 col-xxl-6 p-2">
            <div className="my-4">
              <span className="logo">
                <RiMovie2Fill />
              </span>
              <h4 className="titleLogo">Documentary</h4>
              <h3 className="textLogo text-light">Life Under an Umbrella</h3>

              <p className="text-secondary px-3">
                Phasellus non cursus ligula, sed mattis urna. Aenean ac tor
                gravida ,<br /> volutpat quam eget, consequat elit.
              </p>
              <div className="d-flex align-items-center my-2 containerAwards">
                <Image
                  src={"/img/content3/awards-banner-01.png"}
                  alt="awards"
                  width={116}
                  height={95}
                  className="mx-3"
                />
                <Image
                  src={"/img/content3/awards-banner-02.png"}
                  alt="awards"
                  width={116}
                  height={95}
                  className="mx-3"
                />
              </div>
              <button className={styles.btnWhite}>More Info</button>
            </div>
          </div>
          <div className="col-12 col-xl-7 col-xxl-6 p-2 d-flex align-items-center justify-content-center">
            <Image
              src={"/img/content3/image-arrow-video.png"}
              alt="arrow-img"
              width={200}
              height={100}
            />
            <p className={styles.textTrailer}>Watch the Trailer </p>
            <div className={styles.btnPlay}>
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Documentary;
