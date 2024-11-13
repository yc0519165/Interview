import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "/src/pages/HomePage.jsx";
import { JavaScript } from "./pages/JavaScript";
import "bootstrap/dist/css/bootstrap.min.css";
import { Body } from "./pages/Body";
import { HtmlPage } from "./pages/HtmlPage";
import Cascade from "./pages/Cascade";
import ReactPage from "./pages/ReactPage";
// import { ReactPage } from "./pages/ReactPage";
import TailwindPage from "./pages/TailwindPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/htmlPage",
        element: <HtmlPage />,
      },
      {
        path: "/cssPage",
        element: <Cascade />,
      },
      {
        path: "/javascript",
        element: <JavaScript />,
      },
      {
        path: "/reactPage",
        element: <ReactPage />,
      },
      {
        path: "/tailwindPage",
        element: <TailwindPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
