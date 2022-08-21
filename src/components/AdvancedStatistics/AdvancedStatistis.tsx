import "./advancedstatistics.css";
import { CardData, cardData } from "../../assets/data/CardData";
import { BoxCard } from "../BoxCard/BoxCard";
import brand from "../../assets/images/icon-brand-recognition.svg";
import records from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";

export const AdvancedStatistic = () => {
  const cardLogos = [brand, records, customizable];

  return (
    <section className="adv-statistics">
      <div className="adv-text-wrapper">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="card-wrapper">
        <span className="cyan-line"></span>
        {cardData.map((card: CardData, index: number) => (
          <BoxCard
            logo={cardLogos[index]}
            name={card.name}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </section>
  );
};
