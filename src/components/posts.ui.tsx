import { useGetPostsQuery } from "../redux/api/posts";

function Posts() {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading posts.
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Posts
      </h1>
      <div className="space-y-4">
        {data?.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">Views: {post.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Posts;
