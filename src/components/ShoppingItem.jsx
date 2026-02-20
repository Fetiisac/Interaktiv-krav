function ShoppingItem({ item, onToggle, onChange }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.bought}
        onChange={() => onToggle(item.id)}
      />
      {item.name}
      <input
        type="number"
        min="1"
        value={item.amount}
        onChange={(e) =>
          onChange(item.id, Number(e.target.value))
        }
      />
    </li>
  );
}

export default ShoppingItem;
