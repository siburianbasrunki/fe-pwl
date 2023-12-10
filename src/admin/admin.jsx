// Admin.js
import React, { useState } from "react";
import NavbarAdmin from "../components/navbarAdmin";
import Dashboard from "./dashboard";
import KelolaProduk from "./kelolaProduk";
import KelolaPesanan from "./kelolaPesanan";

const Admin = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");

  const renderComponent = () => {
    switch (selectedNavItem) {
      case "Dashboard":
        return <Dashboard />;
      case "kelola produk":
        return <KelolaProduk />;
      case "kelola pesanan":
        return <KelolaPesanan />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <>
      <div className="w-full flex fixed">
        <NavbarAdmin
          className="h-auto"
          activeNavItem={selectedNavItem}
          onSelectNavItem={(item) => setSelectedNavItem(item)}
        />

        <main className="grow">{renderComponent()}</main>
      </div>
    </>
  );
};

export default Admin;
