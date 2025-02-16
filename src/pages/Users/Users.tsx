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
      <table className="border w-full text-center">
        <tr className="border-b text-2xl">
          <th className="p-1 border-r">Username</th>
          <th>Email</th>
        </tr>
        {users?.map((user: any, index) => (
          <tr className="border-b text-xl" key={index}>
            <td className="border-r">{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
