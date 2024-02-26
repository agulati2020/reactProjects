import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./components/topHeader";
import HeadingText from "./components/headingText";
import TimeDisplay from "./components/timeDisplay";

function App() {
  return (
    <center>
      <TopHeader />
      <div className="headingText">
        <HeadingText />
      </div>
      <div className="timeDisplay">
        <TimeDisplay />
      </div>
    </center>
  );
}

export default App;
