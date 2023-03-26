import User from "@/components/Users";
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
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {users.map((user) => (
            <>
              <User user={user} key={user.id} />
            </>
          ))}
        </div>

      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();

    return {
      props: {
        users: data.slice(0, 3),
      },
    };
  } catch (e) {
    return {
      props: {
        users: [],
      },
    };
  }
}

export default Users;
