import { Link } from "react-router-dom";

function Navigation() {
  const user = localStorage.getItem("user");
  console.log(user);
  return (
    <div className="bg-gray-600 text-white flex justify-around p-2">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      {user ? <Link to="/dashboard">Dashboard</Link> : ""}
    </div>
  );
}

export default Navigation;
