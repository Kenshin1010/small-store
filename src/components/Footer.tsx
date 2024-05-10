import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};
const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year} </p>
  ) : (
    <>
      <p>Total Items: {totalItems} </p>
      <p>Total Price: {totalPrice} </p>
      <p>Shopping Cart &copy; {year} </p>
    </>
  );

  const content = (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="footer"
    >
      {pageContent}
    </footer>
  );
  return content;
};

export default Footer;
