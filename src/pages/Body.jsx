import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};
