import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full px-4 md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FFB054] text-white rounded-full focus:outline-none focus:ring focus:border-blue-500"
              >
                Register
              </button>
            </div>
            <div className="text-sm text-center">
              Have an account?{" "}
              <Link to="/login" className="text-orange-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
