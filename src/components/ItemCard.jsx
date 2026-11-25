export default function ItemCard({ item, onToggle, onRemove }) {
  return (
    <li className={item.bought ? "bought" : ""}>
      <label>
        <input type="checkbox" checked={item.bought} onChange={() => onToggle(item.id)} />
        <span>{item.name}</span>
      </label>
      <span className="qty">x{item.qty}</span>
      <button onClick={() => onRemove(item.id)}>✕</button>
    </li>
  );
}
