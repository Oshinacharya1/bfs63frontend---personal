import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-gray-600 text-white flex justify-around p-2">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default Navigation;
