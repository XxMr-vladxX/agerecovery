import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import TreatmentsList from "./pages/TreatmentsList";
import TreatmentDetail from "./pages/TreatmentDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/tratamientos",
    Component: TreatmentsList,
  },
  {
    path: "/tratamientos/:slug",
    Component: TreatmentDetail,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
