import { useContext } from "react";
import Post from "./post";
import { PostList as PostlistData } from "../store/post-list-store";
import WelcomeMessage from "./welcomeMessage";
import { useState } from "react";
import { useEffect } from "react";
import LoadingSpinner from "./loadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostlistData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("Cleaning Up");
      controller.abort();
    };
  }, []);

  // We can set Data fetched from server through useState()
  //const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
