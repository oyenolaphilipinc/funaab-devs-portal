import Head from "next/head";
import Link from "next/link";

function Users({ users }) {
  return (
    <>
      <Head>
        <title>List Of All Users</title>
      </Head>
      <div className="w-9/12 mx-auto mt-20">
        <h1 className="text-3xl font-bold">List Of Users</h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
          {users.map((user) => (
            <div key={user.id} className="my-4 p-4 shadow-md rounded-md">
              <p className="text-xl font-semibold py-3">{user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>

        <Link href="/" className="px-4 py-2 rounded-md shadow-md border">
          Home
        </Link>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
