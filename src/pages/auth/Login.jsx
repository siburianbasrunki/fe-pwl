import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full px-4 md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4">
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
            <div className="grid justify-items-end">
              <Link to="/resetpassword" className="text-black-500 ">
                Forgot Password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FFB054] text-white rounded-full focus:outline-none focus:ring focus:border-blue-500"
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-orange-500 ">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
