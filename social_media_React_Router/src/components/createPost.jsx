import { Form, redirect } from "react-router-dom";
const CreatePost = () => {
  //const { addPost } = useContext(PostList);
  return (
    <Form method="POST" className="createPost">
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id:
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Your User ID"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
