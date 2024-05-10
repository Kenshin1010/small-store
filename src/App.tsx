// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import "./App.css";
// import { v4 as uuidv4 } from "uuid";

function App() {
  // const [count, setCount] = useState(0);
  // const items = ["NewYork", "Paris", "London", "Hanoi"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);

  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  );

  return content;
  // (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  //   <React.Fragment>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         gap: "4",
  //       }}
  //     >
  //       <HomePage
  //         items={items}
  //         heading="Cities"
  //         onSelectItem={handleSelectItem}
  //       />
  //     </div>
  //     <Header />
  //   </React.Fragment>
  // );
}

export default App;
