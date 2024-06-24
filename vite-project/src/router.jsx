import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutBDO from "./components/mainRowOne/AboutBDO";
import Branches from "./components/mainRowOne/Branches";
import Subsidiaries from "./components/mainRowOne/Subsidiaries";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutBDO", element: <AboutBDO /> },
  { path: "/branches", element: <Branches /> },
  { path: "/subsidiaries", element: <Subsidiaries /> },
]);
