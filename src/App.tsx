// import ListGroup from "./components/ListGroup";

// let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// };

// function App() {
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading={"List"}
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

import Alert from "./components/Alert";

const App = () => {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
};

export default App;
