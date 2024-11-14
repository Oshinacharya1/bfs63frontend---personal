import { useGetTodosQuery } from "../redux/api/todos";

function Todos() {
  const { data, isLoading, error } = useGetTodosQuery();

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error loading todos.
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Todos
      </h1>
      <div className="space-y-4">
        {data?.map((todo) => (
          <div
            key={todo.id}
            className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {todo.text || todo.title || "Untitled Todo"}
            </h2>
            <p
              className={`text-gray-600 ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.completed ? "Completed" : "Incomplete"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
