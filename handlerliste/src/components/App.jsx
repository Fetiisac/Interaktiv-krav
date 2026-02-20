import { useState } from "react";
import AddForm from "./AddForm";
import ShoppingList from "./ShoppingList";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", amount: 2, bought: false },
    { id: 2, name: "Brød", amount: 1, bought: true }
  ]);

  function addItem(item) {
    const newItem = {
      id: Date.now(),
      name: item.name,
      amount: item.amount,
      bought: false
    };

    const newList = [newItem, ...items];
    setItems(newList);
  }

  function toggle(id) {
    const newList = items.map(function (item) {
      if (item.id === id) {
        return {
          id: item.id,
          name: item.name,
          amount: item.amount,
          bought: !item.bought
        };
      } else {
        return item;
      }
    });

    setItems(newList);
  }

  function changeAmount(id, amount) {
    if (amount < 1) {
      return;
    }

    const newList = items.map(function (item) {
      if (item.id === id) {
        return {
          id: item.id,
          name: item.name,
          amount: amount,
          bought: item.bought
        };
      } else {
        return item;
      }
    });

    setItems(newList);
  }

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onToggle={toggle}
        onChange={changeAmount}
      />
    </main>
  );
}

export default App;
