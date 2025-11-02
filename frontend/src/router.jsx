import { createBrowserRouter } from "react-router";
import Dashboard from "./views/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    name: "home"
  }
]);

export function _route(name) {
  return router.routes.find(route => route.name === name);
}
