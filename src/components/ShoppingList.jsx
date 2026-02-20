import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onChange }) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onChange={onChange}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
