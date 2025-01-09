import { SubmitHandler, useForm } from "react-hook-form";
import { InputUser } from "../helpers/types";
import { AddNewUser } from "../helpers/api";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputUser>();

  const handleAdd: SubmitHandler<InputUser> = (data: InputUser) => {
    AddNewUser(data).then(() => {
      navigate ("/");
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add User</h1>
      <form
        onSubmit={handleSubmit(handleAdd)}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      >
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}

          <input
            {...register("name", { required: "Please fill name" })}
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        {/* Surname */}
        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-sm font-medium text-gray-700"
          >
            Surname
          </label>
          {errors.surname && (
            <p className="text-red-500 text-xs mt-1">
              {errors.surname.message}
            </p>
          )}
          <input
            {...register("surname", { required: "Please fill surname" })}
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        {/* Age */}
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          {errors.age && (
            <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>
          )}
          <input
            {...register("age", {
              required: "Please, fill the field age",
              pattern: { value: /^\d+$/, message: "age must be a number" },
            })}
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        {/* Salary */}
        <div className="mb-6">
          <label
            htmlFor="salary"
            className="block text-sm font-medium text-gray-700"
          >
            Salary
          </label>
          {errors.salary && (
            <p className="text-red-500 text-xs mt-1">{errors.salary.message}</p>
          )}
          <input
            {...register("salary", {
              required: "Please, fill the field salary",
              pattern: { value: /^\d+$/, message: "salary must be a number" },
              min: {
                value: 0,
                message: "salary cannot be a negative number",
              },
            })}
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter your salary"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add User
        </button>
      </form>
    </div>
  );
};
