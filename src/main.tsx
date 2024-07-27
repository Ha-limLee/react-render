import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.tsx";
import { StrictMode } from "react";

const router = createBrowserRouter([{ path: "/", element: <Root /> }]);

const root = document.getElementById("root");
if (!root) throw new Error("cannot find root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
