import "./App.css";
import { ConfigProvider } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Home from "./page/Home";
import Layout from "./components/layout";
import "./i18n"; // Import the i18n configuration

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="wappers">
      <ConfigProvider>
          <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
