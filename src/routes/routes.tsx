import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";
import Login from "../pages/login";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Dashboard from "../pages/dashboard";
import Protected from "../components/protected";
import Analytics from "../pages/analytics";

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
      {
        path: "/dashboard",
        element: (
          <Protected>
            <Dashboard />
          </Protected>
        ),
      },
      {
        path: "/analytics",
        element: (
          <Protected>
            <Analytics />
          </Protected>
        ),
      },
    ],
  },
]);
