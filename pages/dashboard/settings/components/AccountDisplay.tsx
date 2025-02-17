import { useSession } from "next-auth/react";
import { UserDataProps } from "../../../types/UserData.types";
import DateFormatter from "../../../../components/DateFormatter";
import Link from "next/link";

const AccountDisplay = ({ userData }: UserDataProps) => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated") return null;
  if (status === "authenticated") {
    return (
      <>
        <div className="shadow-md">
          <div className="p-6 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-700">
            <h1 className="mb-4 text-2xl font-semibold text-gray-600">Profile</h1>

            <div>
              <div></div>

              <div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="my-1">
                    <label htmlFor="fullName" className="font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="fullName"
                      id="fullName"
                      placeholder="Your Full Name"
                      value={userData.fullName ? userData.fullName : ""}
                      disabled
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="username" className="font-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="username"
                      id="username"
                      placeholder="username"
                      value={userData.username ? userData.username : ""}
                      disabled
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="email"
                      id="email"
                      placeholder="example@xyz.com"
                      value={userData.email ? userData.email : ""}
                      disabled
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="department" className="font-semibold">
                      College/Department
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="department"
                      id="department"
                      value={userData.department ? userData.department : ""}
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
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="level"
                      id="level"
                      placeholder="100 - 700"
                      value={userData.level ? userData.level : ""}
                      disabled
                    />
                  </div>
                  <div className="my-1">
                    <label htmlFor="phoneNumber" className="font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent outline-gray-400 outline-dashed disabled:bg-gray-300 dark:disabled:bg-gray-600"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="+234..."
                      disabled
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
                      className="w-full p-2 mt-2 rounded-md outline-1 dark:bg-transparent disabled:bg-gray-300 dark:disabled:bg-gray-600 outline-gray-400 outline-dashed"
                      placeholder="A short description of yourself"
                      maxLength={420}
                      disabled
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <p className="float-right mt-4 text-sm font-bold">
              Date Joined: <DateFormatter dateAsString={userData.dateCreated} />
            </p>

            <div className="flex items-center space-x-3">
              <Link href={`${session.user.name}?tab=update`}>
                <button className="px-4 py-2 mt-4 duration-200 bg-purple-700 rounded-md text-purple-50 hover:bg-purple-600 hover:animate-pulse">
                  Update ✍
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AccountDisplay;
