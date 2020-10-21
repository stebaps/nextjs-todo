import Head from "next/head";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TodoList />
      </main>
    </div>
  );
}
