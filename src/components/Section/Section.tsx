import "./section.css";
import { Button } from "../Button/Button";
import landingImg from "../../assets/images/illustration-working.svg";

export const Section = () => {
  return (
    <section className="main-page-section">
      <div className="text-wrapper">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="header-btn green-bg-btn section-btn">
          Get Started
        </Button>
      </div>
      <div className="img-wrapper">
        <img src={landingImg} alt="" />
      </div>
    </section>
  );
};
