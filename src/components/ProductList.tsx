import { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";
import Product from "./Product";
const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>;
  if (products?.length) {
    pageContent = products.map((product) => {
      const inCart: boolean = cart.some((item) => item.sku === product.sku);
      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }
  const content = (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="main main--products"
    >
      {pageContent}
    </main>
  );
  return content;
};

export default ProductList;
