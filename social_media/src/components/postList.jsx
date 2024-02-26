import { useContext } from "react";
import Post from "./post";
import { PostList as PostlistData } from "../store/post-list-store";
const PostList = () => {
  const { postList } = useContext(PostlistData);
  //console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
