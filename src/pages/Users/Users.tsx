import { useEffect, useState } from "react";
import { getUsers } from "../../util/getUsers";

export const Users = () => {
  const [users, setusers] = useState<[] | null>(null);

  useEffect(() => {
    const handleGetUsers = async () => {
      const response = await getUsers();
      const data = await response.json();
      setusers(data);
    };
    handleGetUsers();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center">
      <span className="p-8 text-2xl">All Users Registered</span>
      <table className="border table-auto border-gray-900 w-10/12 text-center">
        <thead className="bg-gradient-to-tl from-gray-950 to-gray-800 text-2xl">
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {users?.map((user: any, index) => (
          <tbody className="border border-gray-950 bg-gradient-to-bl from-gray-900 to-gray-600 text-xl hover:cursor-pointer">
            <tr className="hover:bg-sky-200 hover:text-sky-950" key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
