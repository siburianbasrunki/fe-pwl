import LineChart from "../../components/admin/Chart";

function Overview() {
  return (
    <div className="flex flex-col space-y-6 py-12 px-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>

      <div className="flex space-x-8">
        <div className="w-2/5 border border-gray-500 rounded p-4 text-gray-600 bg-white flex gap-4">
          <span className="font-semibold text-lg">Jumlah Produk </span>
          <span className="text-gray-600 text-xl">400</span>
        </div>
        <div className="w-2/5 border border-gray-500 rounded p-4 text-gray-600 bg-white  flex gap-4">
          <span className="font-semibold text-lg">Jumlah Pesanan</span>
          <span className="text-gray-600 text-xl">200</span>
        </div>
      </div>

      <div className="flex space-x-8 w-4/5 h-80 flex-col">
        <h2 className="font-bold text-lg">
          Grafik Pendapatan Seluruh Penjualan
        </h2>
        <LineChart className="w-4/5" />
      </div>
    </div>
  );
}

export default Overview;
