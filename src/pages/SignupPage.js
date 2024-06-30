import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h3 className="text-2xl font-bold text-center mb-4">Create Account</h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          For Teachers or Students.
        </p>

        <form className="px-4 md:px-0">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 text-sm md:sm:text-xs font-bold mb-2">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Bill"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Other form fields */}
          
          <div className="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Create Account
            </button>
          </div>

          <p className="text-center text-gray-500 text-xs">
            Already have an account?{" "}
            <Link to="./login" className="text-blue-500 hover:text-blue-700">
              Login
            </Link>
          </p>
        </form>

        <div className="flex justify-center mt-4">
          <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google icon"
              className="w-6 h-6 mr-2"
            />
            <span>Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
