import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/widgets/layout/Layout";
import { ProfilePage } from "@/pages/profile/ProfilePage";
import { LoginPage } from "@/pages/auth/LoginPage";
import ProtectedRoute from "@/shared/utils/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true, 
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);
