import axios from "axios";
import "./shorteninput.css";
import { Button } from "../Button/Button";
import { useState } from "react";
import { useEffect } from "react";
import { ShortenedLinks } from "../ShortenedLinks/ShortenedLinks";

export type StorageData = {
  original_link: string;
  short_link: string;
};

export const ShortenInput = () => {
  const [data, setData] = useState<StorageData[]>();
  const [value, setValue] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  //Get localstorage info if it exists
  useEffect(() => {
    const links = localStorage.getItem("shortened");
    setData(JSON.parse(links!));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(false);
  };

  const handleFetch = async () => {
    if (!value) {
      setError(true);
      return;
    }
    const shorten = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${value}`
    );
    handleStorage(shorten.data.result);
  };

  const handleStorage = (shorten: StorageData) => {
    const curr = JSON.parse(localStorage.getItem("shortened")!) || [];
    const newItems = {
      original_link: shorten.original_link,
      short_link: shorten.short_link,
    };
    curr.push(newItems);
    setData(curr);
    localStorage.setItem("shortened", JSON.stringify(curr));
  };

  const inputStyle = { outline: error ? "2px hsl(0, 87%, 67%) solid" : "none" };
  const inputClass = error ? "placeholder-color" : "none";

  return (
    <>
      <div className="shorten-wrapper">
        <div>
          <input
            style={inputStyle}
            className={inputClass}
            onChange={(e) => handleChange(e)}
            placeholder="Shorten a link here..."
          />
          {error && <p>Please add a link.</p>}
        </div>
        <Button onClick={handleFetch} className="green-bg-btn section-btn">
          Shorten it!
        </Button>
      </div>
      {data?.map((shorten: StorageData) => (
        <ShortenedLinks shorten={shorten} />
      ))}
    </>
  );
};
