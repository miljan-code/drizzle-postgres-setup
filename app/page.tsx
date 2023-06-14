import { db } from '@/db';
import { todos } from '@/db/schema';
import { revalidatePath } from 'next/cache';

export default async function Home() {
  const todoItems = await db.select().from(todos);

  async function addTodo(data: FormData) {
    'use server';

    const todo = data.get('todo') as string;

    if (!todo) return null;

    await db.insert(todos).values({ todo });

    revalidatePath('/');
  }

  return (
    <main className="py-8 container mx-auto">
      <h1 className="font-heading text-5xl text-center mb-10">
        Drizzle ORM 🚀
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

      <div className="text-center">
        <h3 className="font-heading text-2xl mb-4">Todos</h3>
        {todoItems?.length ? (
          <div className="flex flex-col gap-1">
            {todoItems.map(todo => (
              <p key={todo.id}>{todo.todo}</p>
            ))}
          </div>
        ) : (
          <p>There are no todos, please add one</p>
        )}
        <div className="flex flex-col gap-1"></div>
      </div>
    </main>
  );
}
