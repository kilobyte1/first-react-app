import { useState } from "react";

//using props, we can padd data to components
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook- a function that allows us to tap into built-in feature in react
  //The React useState Hook allows us to track state in a function component.
  //useState accepts an initial state and returns two values:
  //The current state. - The first value, selectedIndex, is our current state.

  //A function that updates the state - The second value, setSelectedIndex, is the function that is used to update our state.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //to render data dynamically, we use {}
  //items.map((item) => <li>{item}</li>);
  return (
    //<>- shortcut means a fragment- this could have been <Fragment> with fragment imported
    <>
      <h1>{heading}</h1>
      {/*if the statement is true "No items found"*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //could have simply done className= "list-group-item active"
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
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

export default ListGroup;
