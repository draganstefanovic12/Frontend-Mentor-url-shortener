import "./shortenedlinks.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { StorageData } from "../ShortenInput/ShortenInput";

export type ShortenProps = {
  shorten: StorageData;
};

export const ShortenedLinks = ({ shorten }: ShortenProps) => {
  const [copy, setCopy] = useState<boolean>(false);

  const handleCopy = (copied: string) => {
    navigator.clipboard.writeText(copied);
    setCopy(true);
  };

  const styles = copy ? "green-bg-btn copied-btn" : "green-bg-btn";

  return (
    <div className="shortened-links">
      <p>{shorten.original_link}</p>
      <div>
        <p>{shorten.short_link}</p>
        <Button
          onClick={() => handleCopy(shorten.short_link)}
          className={styles}
        >
          {copy ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
};
