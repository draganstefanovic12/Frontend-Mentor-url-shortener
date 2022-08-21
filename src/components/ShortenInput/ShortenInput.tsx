import "./shorteninput.css";
import { Button } from "../Button/Button";

export const ShortenInput = () => {
  return (
    <div className="shorten-wrapper">
      <input placeholder="Shorten a link here..." />
      <Button className="green-bg-btn section-btn">Shorten it!</Button>
    </div>
  );
};
