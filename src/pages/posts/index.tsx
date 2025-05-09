import client from '@/tina/__generated__/client';
import { Link } from 'waku';

export default async function PostsPage() {
  const postsResponse = await client.queries.postConnection();

  const posts = postsResponse?.data?.postConnection?.edges?.map((post) => {
    return { slug: post?.node?._sys.filename };
  });

  return (
    <>
      <ul>
        {posts?.map((post) => (
          <li>
            <Link to={`/posts/${post.slug}`}>{post.slug}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
