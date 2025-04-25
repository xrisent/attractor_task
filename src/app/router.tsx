import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/widgets/layout/Layout";
import { ProfilePage } from "@/pages/profile/ProfilePage";
import { LoginPage } from "@/pages/auth/LoginPage";
import ProtectedRoute from "@/shared/utils/ProtectedRoute";
import { RepositoriesPage } from "@/pages/repositories/RepositoriesPage";
import { UsersPage } from "@/pages/users/UsersPage";

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
          {
            path: "/repositories",
            element: <RepositoriesPage />,
          },
          {
            path: "/users",
            element: <UsersPage />,
          },
        ],
      },
    ],
  },
]);
