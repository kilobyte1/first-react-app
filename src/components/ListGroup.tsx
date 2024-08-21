import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //hook- a function that allows us to tap into built-in feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //to render data dynamically, we use {}
  items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>List</h1>
      {/*if the statement is true "No items found"*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex(index) = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
