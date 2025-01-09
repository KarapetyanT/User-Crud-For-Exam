import { getAllUsers } from "../helpers/api";
import { useEffect, useState } from "react";
import { IUser } from "../helpers/types";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-yellow-600 text-center mb-8">
        User List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-pink-50 border border-yellow-400 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">
              {user.name} {user.surname}
            </h2>
            <p className="text-yellow-700 text-sm">
              <span className="font-bold">Age:</span> {user.age}
            </p>
            <p className="text-yellow-700 text-sm">
              <span className="font-bold">Salary:</span> ${user.salary}
            </p>
            <div className="mt-4 flex justify-between">
              <Link
                to="/add"
                className="text-sm font-medium text-pink-600 hover:text-pink-800 underline"
              >
                Add New User
              </Link>
              <Link
                to={`/user/${user.id}`}
                className="text-sm font-medium text-yellow-600 hover:text-yellow-800 underline"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
