import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../widgets/layout/Layout";
import { ProfilePage } from "../pages/profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
    ],
  },
]);