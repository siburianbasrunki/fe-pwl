import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import HomePage from "./pages/Home";
import DetailProduk from "./pages/DetailProduk";
import Cart from "./pages/Cart";
import RootLayout from "./layouts/RootLayout";

import KelolaProduk from "./pages/admin/KelolaProduk";
import KelolaPesanan from "./pages/admin/KelolaPesanan";
import DashboardLayout from "./layouts/DashboardLayout";
import RequireLogin from "./components/auth/RequireLogin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail-produk/:produkId" element={<DetailProduk />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route
            path="/admin/dashboard/produk"
            element={
              <RequireLogin>
                <KelolaProduk />
              </RequireLogin>
            }
          />
          <Route
            path="/admin/dashboard/pesanan"
            element={
              <RequireLogin>
                <KelolaPesanan />
              </RequireLogin>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
