import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/createPost";
import PostList from "./components/postList";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
