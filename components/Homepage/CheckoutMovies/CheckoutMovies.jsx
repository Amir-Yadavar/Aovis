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
      </div>
    </section>
  );
}

export default CheckoutMovies;
