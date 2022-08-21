import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { Section } from "./components/Section/Section";
import { ShortenInput } from "./components/ShortenInput/ShortenInput";
import { AdvancedStatistic } from "./components/AdvancedStatistics/AdvancedStatistis";

const App = () => {
  return (
    <>
      <div className="wrapper-white-bg">
        <Nav />
        <Section />
        <ShortenInput />
      </div>
      <div className="wrapper-grey-bg">
        <AdvancedStatistic />
      </div>
    </>
  );
};

export default App;
