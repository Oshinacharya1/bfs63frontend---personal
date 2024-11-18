import { useState } from "react";
import { useLoginMutation } from "../redux/api/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login, data] = useLoginMutation();
  const navigate = useNavigate();

  const isLoading = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      if (data?.data) {
        // send user to dashboard page
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-[70%] p-4 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="block w-full p-2 border rounded mb-4"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="block w-full p-2 border rounded mb-4"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
