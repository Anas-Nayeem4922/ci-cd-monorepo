import { client } from "@repo/db/client"

export default async function Home() {
  const user = await client.user.findFirst();
  return <div>
    <p>User id: {user?.id}</p>
    <p>Username: {user?.username}</p>
  </div>
}