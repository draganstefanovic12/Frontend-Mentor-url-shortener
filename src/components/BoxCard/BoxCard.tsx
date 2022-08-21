import "./boxcard.css";
import { CardData } from "../../assets/data/CardData";

type BoxCardProps = CardData & { logo: string };

export const BoxCard = ({ name, paragraph, logo }: BoxCardProps) => {
  return (
    <div className="box">
      <img src={logo} alt="box-logo" />
      <h2>{name}</h2>
      <p>{paragraph}</p>
    </div>
  );
};
