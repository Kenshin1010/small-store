import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  //(item: string) => void
  onSelectItem: (item: string) => void;
}

function HomePage({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectIndex, setSelectIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group" style={{ width: "350px" }}>
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HomePage;
