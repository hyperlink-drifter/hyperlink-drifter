import client from '@/tina/__generated__/client';
import { Link } from 'waku';
import type { PageProps } from 'waku/router';

export default async function PostPage({ slug }: PageProps<'/posts/[slug]'>) {
  const post = await client.queries.post({ relativePath: `${slug}.md` });

  console.log(post.data);

  return (
    <>
      <h1>{post.data.post.title}</h1>
    </>
  );
}
