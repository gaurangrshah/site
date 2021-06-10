const Posts = ({ posts }) => {
  return <div>{JSON.stringify(posts)}</div>;
};

export default Posts;

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
  const posts = await res.json();
  return { props: { posts } };
}
