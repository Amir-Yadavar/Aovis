import styles from "@/styles/documentary.module.css";
import Image from "next/image";
import { RiMovie2Fill } from "react-icons/ri";

function Documentary() {
  return (
    <section className={styles.container}>
      <div className="container  p-3">
        <div className="my-4">
          <span className="logo">
            <RiMovie2Fill />
          </span>
          <h4 className="titleLogo">Documentary</h4>
          <h3 className="textLogo text-light">Life Under an Umbrella</h3>

          <p className="text-secondary">
            Phasellus non cursus ligula, sed mattis urna. Aenean ac tor gravida
            ,<br /> volutpat quam eget, consequat elit.
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
        </div>
      </div>
    </section>
  );
}

export default Documentary;
