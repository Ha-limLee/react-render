import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ChildrenProp from "./routes/children-prop.tsx";
import Layout from "./components/layout.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ChildrenProp />
      </Layout>
    ),
  },
  {
    path: "children-prop",
    element: (
      <Layout>
        <ChildrenProp />
      </Layout>
    ),
  },
]);

const root = document.getElementById("root");
if (!root) throw new Error("cannot find root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
