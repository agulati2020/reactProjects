import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/container";
import Controls from "./components/controls";
import DisplayCounter from "./components/displayCounter";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyMessage from "./components/privacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
