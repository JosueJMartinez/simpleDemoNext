import ListPosts from "../components/ListPosts";
import Axios from "axios";

function Index({ posts }) {
  return (
    <div>
      <h1>Index For Posts</h1>
      <ListPosts posts={posts} />
    </div>
  );
}

// export async function getStaticProps(context) {
Index.getInitialProps = async () => {
  try {
    const res = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { posts: res.data };
  } catch (error) {
    console.log("unable to get api requests for posts");
    return { posts: "unable to get data" };
  }
};

export default Index;
