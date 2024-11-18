import { Navigate } from "react-router-dom";

import { ReactNode } from "react";

function Protected({ children }: { children: ReactNode }) {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  }

  return <Navigate to="/" />;
}

export default Protected;
