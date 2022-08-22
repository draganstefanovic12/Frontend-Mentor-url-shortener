import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Section } from "./components/Section/Section";
import { ShortenInput } from "./components/ShortenInput/ShortenInput";
import { AdvancedStatistic } from "./components/AdvancedStatistics/AdvancedStatistis";
import { BoostLinksToday } from "./components/BoostLinksToday/BoostLinksToday";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="wrapper-white-bg">
        <Nav />
        <Section />
      </div>
      <div className="wrapper-grey-bg">
        <ShortenInput />
        <AdvancedStatistic />
      </div>
      <div className="wrapper-boost-links-today">
        <BoostLinksToday />
      </div>
      <div className="wrapper-footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
