import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../Pages/home/homePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
