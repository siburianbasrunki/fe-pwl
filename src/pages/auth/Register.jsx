import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../../services/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = await register(formData);
      console.log(data);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full px-4 md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          <form className="space-y-4" action="" onSubmit={handleRegister}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
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
