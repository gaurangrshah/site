export const Post = ({ post }) => {
  return <div>{JSON.stringify(post)}</div>;
};

export default Post;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);

  const posts = await res?.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString(), slug: post.slug },
  }));
  console.log("🚀 ~ file: [id].js ~ line 17 ~ paths ~ paths", paths);

  console.log("\nNumber of posts pre-rendered: ", posts.length);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blog/post/${params.slug}`
  );
  console.log("🚀 ~ file: [id].js ~ line 31 ~ getStaticProps ~ res", res);
  const post = await res?.json();
  return { props: { post } };
}
