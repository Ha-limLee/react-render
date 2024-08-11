import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/layout.tsx";
import ChildrenProp from "./routes/children-prop.tsx";
import ChildrenPropMemoizedParent from "./routes/children-prop-memoized-parent.tsx";
import ChildrenNonProp from "./routes/children-non-prop.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ChildrenNonProp />
      </Layout>
    ),
  },
  {
    path: "children-non-prop",
    element: (
      <Layout>
        <ChildrenNonProp />
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
  {
    path: "children-prop-memoized-parent",
    element: (
      <Layout>
        <ChildrenPropMemoizedParent />
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
