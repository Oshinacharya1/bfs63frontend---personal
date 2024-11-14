import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Posts from "../components/posts.ui";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
    ],
  },
]);
