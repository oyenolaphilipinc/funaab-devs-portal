import { useSession } from "next-auth/react";
import { UserDataProps } from "../../../types/UserData.types";
import { useState } from "react";

const UpdateAccount = ({ userData }: UserDataProps) => {
  const { status } = useSession();
  const [allDisabled, setAllDisabled] = useState(true);

  if (status === "unauthenticated") {
    return null;
  }

  if (status === "authenticated") {
    // const handleEdit = (event: React.MouseEventHandler<HTMLButtonElement>) => {
    //   event.preventDefault();
    //   setAllDisabled(false);
    //   event.target.classList!.add("hidden");
    // };

    return (
      <>
        <div className="bg-white dark:bg-gray-700 shadow-md border">
          <div className="p-6 border">
            <h1 className="text-2xl text-gray-600 dark:text-gray-50 mb-4 font-semibold">Profile</h1>

            <form>
              <div className="grid grid-cols-3 gap-3">
                <div className="my-1">
                  <label htmlFor="fullName" className="font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed disabled:bg-gray-300 mt-2 p-2"
                    name="fullName"
                    id="fullName"
                    placeholder="Your Full Name"
                    value={userData.fullName ? userData.fullName : ""}
                    disabled={userData.fullName && allDisabled ? true : false}
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="username" className="font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed disabled:bg-gray-300 mt-2 p-2"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={userData.username ? userData.username : ""}
                    disabled={userData.username && allDisabled ? true : false}
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed disabled:bg-gray-300 mt-2 p-2"
                    name="email"
                    id="email"
                    placeholder="example@xyz.com"
                    value={userData.email ? userData.email : ""}
                    disabled={userData.email && allDisabled ? true : false}
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="department" className="font-semibold">
                    College/Department
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2 disabled:bg-gray-300"
                    name="department"
                    id="department"
                    value={userData.colFalc ? userData.colFalc : ""}
                    disabled
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="level" className="font-semibold">
                    Level
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed disabled:bg-gray-300 mt-2 p-2"
                    name="level"
                    id="level"
                    placeholder="100 - 700"
                    value={userData.level ? userData.level : ""}
                    disabled={userData.level && allDisabled ? true : false}
                  />
                </div>
                <div className="my-1">
                  <label htmlFor="phoneNumber" className="font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed disabled:bg-gray-300 mt-2 p-2"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+234..."
                    disabled={userData.phoneNumber && allDisabled ? true : false}
                  />
                </div>
                <div className="my-1" style={{ gridColumn: "1 / 3" }}>
                  <label htmlFor="bio" className="font-semibold">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows={4}
                    className="w-full rounded-md outline-1 outline-gray-400 outline-dashed mt-2 p-2"
                    placeholder="A short description of yourself"
                    maxLength={420}
                    disabled={userData.bio && allDisabled ? true : false}
                  ></textarea>
                </div>
              </div>

              <p className="font-mono float-right text-sm font-bold mt-4">Date Joined: {new Date().toLocaleString()}</p>

              <div className="flex items-center space-x-3">
                {/* <button
                  className="bg-purple-700 text-purple-50 px-4 py-2 rounded-md mt-4 hover:bg-purple-600 duration-200 hover:animate-pulse"
                  onClick={(e) => handleEdit(e)}
                >
                  Edit 🖊
                </button> */}
                <button className="bg-purple-700 text-purple-50 px-4 py-2 rounded-md mt-4 hover:bg-purple-600 duration-200 hover:animate-pulse">
                  Update ✍
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default UpdateAccount;
