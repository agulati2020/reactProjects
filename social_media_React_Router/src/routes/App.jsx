import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import PostListProvider from "../store/post-list-store";
//import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  //const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
