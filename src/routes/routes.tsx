import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
        <div className="min-h-[calc(100vh-80px)] bg-red-900">
          <Outlet />
        </div>
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
