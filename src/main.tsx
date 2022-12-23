import React from "react";
import ReactDOM from "react-dom/client";
import "./app/shared/global/styled.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App/>
);
