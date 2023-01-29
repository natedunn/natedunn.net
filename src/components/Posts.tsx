import type { PostsQuery } from '@codegen';
import { useEffect, useState } from 'preact/hooks';
import { invoker } from '@invoker';

type Props = {
  initialPosts: PostsQuery | undefined;
  initialPage: number;
  limit: number;
};

export default function Posts({ initialPosts, initialPage = 1, limit }: Props) {
  const [posts, setPosts] = useState(initialPosts?.posts?.data);
  const [page, setPage] = useState(initialPage);
  const [prev, setPrev] = useState(!!initialPosts?.posts?.links?.prev?.page);
  const [next, setNext] = useState(!!initialPosts?.posts?.links?.next?.page);

  const loadMore = async () => {
    const data = await invoker.posts.query({
      options: {
        paginate: {
          page,
          limit,
        },
      },
    });
    setPosts(data?.posts?.data);
    setPrev(!!data?.posts?.links?.prev?.page);
    setNext(!!data?.posts?.links?.next?.page);
  };

  useEffect(() => {
    loadMore();
  }, [page]);

  return (
    <div>
      <div>
        {posts?.map((post) => {
          return (
            <>
              <div>
                <h1 class='text-2xl'>Title: {post?.title}</h1>
                <div class='mt-2'>{post?.body}</div>
              </div>
              <br />
            </>
          );
        })}
      </div>
      <div class='flex gap-4 mt-6'>
        <button
          class={`px-3 py-1.5 rounded-full ${
            prev
              ? `bg-blue-700 hover:bg-blue-900 text-white`
              : `bg-gray-500 cursor-not-allowed dark:text-slate-400 text-slate-300`
          }`}
          onClick={prev ? () => setPage(page - 1) : () => {}}
        >
          Go to Previous Page
        </button>
        <div class='flex-auto px-3 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-full text-center'>
          Current page: {page}
        </div>
        {next ? (
          <button
            class={`px-3 py-1.5 rounded-full ${
              next
                ? `bg-blue-700 hover:bg-blue-900 text-white`
                : `bg-gray-500 cursor-not-allowed dark:text-slate-400 text-slate-300`
            }`}
            onClick={() => setPage(page + 1)}
          >
            Go to Next Page
          </button>
        ) : null}
      </div>
    </div>
  );
}
