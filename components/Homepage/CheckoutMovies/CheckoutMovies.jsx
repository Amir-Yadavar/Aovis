import BoxCheckoutMovies from "@/module/BoxCheckoutMovies/BoxCheckoutMovies";
import styles from "@/styles/checkoutMovies.module.css";
import { RiMovie2Fill } from "react-icons/ri";
function CheckoutMovies() {
  return (
    <section className={styles.container}>
      <div className={styles.imgBg}></div>
      <div className="container p-3">
        <div className="row align-items-center my-5">
          <div className="col-12 col-lg-6 p-2">
            <span className="logo">
              <RiMovie2Fill />
            </span>
            <h4 className="titleLogo">Checkout Movies</h4>
            <h3 className="textLogo">Top Featured Movies</h3>
          </div>
          <div className="col-12 col-lg-6 p-2">
            <p className="m-0">
              Phasellus non cursus ligula, sed mattis urna. Aenean ac tor
              gravida ,<br /> volutpat quam eget, consequat elit.
            </p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-around flex-wrap">
          <BoxCheckoutMovies
            img="/img/header/movie-image1.jpg"
            title="The Way Of Water"
            category="Adventure , Crime"
            min="120"
          />
          <BoxCheckoutMovies
            img="/img/header/banner-02.jpg"
            title="The Witcher Season 2"
            category="Action"
            min="60"
          />
          <BoxCheckoutMovies
            img="/img/header/banner-01.jpg"
            title="Wrong Turns Part 2"
            category="Horror"
            min="110"
          />
        </div>
      </div>
    </section>
  );
}

export default CheckoutMovies;
