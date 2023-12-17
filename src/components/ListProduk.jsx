import CardProduk from "./CardProduk";

const ListProduk = () => {
  return (
    <>
      <div className="container mx-auto mt-4">
        <div>
          <h1 className="text-3xl">All Product</h1>
        </div>
        <div className="mt-4 container">
          <CardProduk />
        </div>
      </div>
    </>
  );
};

export default ListProduk;
