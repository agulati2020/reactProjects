import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = (userId, tags, title, postBody, reactions) => {
    //console.log(`${userId}, ${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        tags: tags,
        reactions: reactions,
        title: title,
        body: postBody,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
    //console.log(`delete post has been called for ${postId}`);
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    userId: "user-1",
    tags: ["vacation", "mumbai", "enjoying"],
    reactions: "25",
    title: "Sunil Gavaskar",
    body: "Gurbaz to the KKR playing XI as one of the four overseas players, citing his aggressive batting style. Mitchell Starc, Andre Russell and Sunil Narine are expected",
  },
  {
    id: "2",
    userId: "user-12",
    tags: ["masti", "passed", "b-tech"],
    reactions: "13",
    title: "Gavaskar Says",
    body: "Gavaskar supports the inclusion of Afghanistan wicketkeeper-",
  },
];
export default PostListProvider;
