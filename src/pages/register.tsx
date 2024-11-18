import { useState } from "react";
import { useRegisterMutation } from "../redux/api/user";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const isLoading = false;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      if (data?.data) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" h-screen flex justify-center items-center">
      <form
        className="w-[80%] mx-auto p-4 bg-white rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
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
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
