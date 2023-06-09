import { Head } from "$fresh/runtime.ts";
import AdminPanel from "../../../islands/AdminPanel.tsx";

export default function Home() {
  const example = {"title":"Hello World","body":"This is a post"}

  return (
    <>
      <Head>
        <title>Admin - post</title>
      </Head>
      <div>
        <AdminPanel collection="post" example={JSON.stringify(example, null, 2)} />
      </div>
    </>
  );
}