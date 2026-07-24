import {
  createBrowserRouter,
} from "react-router-dom";

import App from "@/App";
import AppLayout from "@/layouts/AppLayout";

import DashboardPage from "@/pages/DashboardPage";
import ProjectsPage from "@/pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
//import AboutPage from "@/pages/AboutPage";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          element: <AppLayout />,
          children: [
            {
              index: true,
              element: <DashboardPage />,
            },
            {
              path: "projects",
              element: <ProjectsPage />,
            },
           {
    path: "/about",
    element: <AboutPage />,
},
          ],
        },
      ],
    },
  ]);