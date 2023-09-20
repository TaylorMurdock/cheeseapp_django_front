import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";

const Index = (props) => {
  const cheese = useLoaderData();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Create a Cheese</h2>
        <Form action="/create" method="post">
          <input type="text" name="name" placeholder="write name here" />
          <input
            type="text"
            name="origin_country"
            placeholder="write origin_country here"
          />
          <input type="text" name="type" placeholder="write type here" />
          <button>Create New Cheese</button>
        </Form>
      </div>
      {cheese.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default Index;
