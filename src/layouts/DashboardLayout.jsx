import { Outlet } from "react-router-dom";

import SideBar from "../components/admin/SideBar";

const DashboardLayout = () => {
  return (
    <div className="w-full flex fixed">
      <SideBar />
      <main className="grow">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
