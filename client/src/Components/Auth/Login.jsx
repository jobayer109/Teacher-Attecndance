import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col items-center justify-center my-10 ">
      <div className="bg-gray-100 px-10 rounded shadow-lg w-96">
        <h3 className="text-2xl font-semibold text-green-600 my-6 text-center">
          Log in
        </h3>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              placeholder="ই-মেইল"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-xs text-red-700 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                // pattern: {
                //   value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
                //   message:
                //     "Password must contain uppercase, lowercase, and number",
                // },
              })}
              placeholder="পাসওয়ার্ড"
              className="border w-full p-3 text-sm rounded-md border-gray-500 outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-xs text-red-700 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            value="Register"
            className="w-full bg-green-600 py-2 rounded-md font-medium hover:bg-green-700 text-white transition duration-200"
          />
        </form>

        <p className="text-xs my-4 text-center font-semibold text-gray-600">
          Don't have any account?{" "}
          <Link
            to="/register"
            className="text-green-600 text-sm font-bold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
