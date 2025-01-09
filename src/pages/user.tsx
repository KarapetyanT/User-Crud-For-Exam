import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../helpers/types";
import { getUserById } from "../helpers/api";

export const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    getUserById(Number(id)).then((data) => {
      setUser(data);
    });
  }, [id]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-yellow-600 text-center mb-6">
        User Details
      </h1>
      {user ? (
        <div className="bg-pink-50 border border-yellow-400 rounded-lg shadow-lg p-6">
          <p className="text-lg font-semibold text-yellow-700 mb-2">
            <span className="font-bold">Name:</span> {user.name}
          </p>
          <p className="text-lg text-yellow-700 mb-2">
            <span className="font-bold">Surname:</span> {user.surname}
          </p>
          <p className="text-lg text-yellow-700 mb-2">
            <span className="font-bold">Age:</span> {user.age}
          </p>
          <p className="text-lg text-yellow-700">
            <span className="font-bold">Salary:</span> {user.salary} USD
          </p>
        </div>
      ) : (
        <p className="text-center text-yellow-600">Loading user details...</p>
      )}
    </div>
  );
};
