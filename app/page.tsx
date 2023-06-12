const getTodos = async () => {};

export default function Home() {
  const addTodo = async (data: FormData) => {
    'use server';

    const todo = data.get('todo') as string;

    //
  };

  return (
    <main className="py-8 container mx-auto">
      <h1 className="font-heading text-5xl text-center mb-10">
        Drizzle + Vercel Postgres 🚀
      </h1>

      <form action={addTodo} className="flex items-center justify-center mb-6">
        <input
          type="text"
          name="todo"
          placeholder="Enter todo name..."
          className="text-white bg-slate-800 focus:outline-none rounded-l-sm px-3 py-1"
        />
        <button
          type="submit"
          className="bg-white text-slate-800 rounded-r-sm px-3 py-1"
        >
          Add Todo
        </button>
      </form>

      <div>
        <h3 className="font-heading text-2xl text-center">Todos</h3>
      </div>
    </main>
  );
}
