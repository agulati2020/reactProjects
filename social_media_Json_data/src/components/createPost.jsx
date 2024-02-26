import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const postBodyElement = useRef();
  const postTitleElement = useRef();
  const postUserIdElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault;
    const userId = postUserIdElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const title = postTitleElement.current.value;
    const reactions = reactionsElement.current.value;
    const postBody = postBodyElement.current.value;

    postUserIdElement.current.value = "";
    tagsElement.current.value = "";
    postTitleElement.current.value = "";
    reactionsElement.current.value = "";
    postBodyElement.current.value = "";

    addPost(userId, tags, title, postBody, reactions);
  };

  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Your User ID"
          ref={postUserIdElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are You feeling today?"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          rows="4"
          placeholder="Post Content Tell us more about it"
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this Post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your Hash Tags here"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
