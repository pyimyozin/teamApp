import { Routes, Route } from "react-router";
import MainLayout from "./views/layouts/MainLayout";
import Home from "./views/home/Home";
import Error from "./views/error/Error";

// register the routes
export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
