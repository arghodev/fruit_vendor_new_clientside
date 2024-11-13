import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import SmoothScrolling from "./components/SmoothScrolling";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScrolling>
      <RouterProvider router={router} />
    </SmoothScrolling>
  </StrictMode>
);
