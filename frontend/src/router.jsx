import { createBrowserRouter } from "react-router";
import axios from "axios";
import Dashboard from "./views/dashboard/Dashboard";
import Login from "./views/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    name: "home"
  },
  {
    path: "/login",
    element: <Login />,
    name: "login"
  }
]);

export const route = name => router.routes.find(route => route.name === name);

export const api = axios.create({
  // baseURL: "localhost:8000/api/v1/"
  baseURL: "http://192.168.100.90:8000/api/v1/",
  withCredentials: true
});
