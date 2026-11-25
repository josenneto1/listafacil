import { useState } from "react";
import ItemCard from "../components/ItemCard.jsx";

export default function Shopping({ items, setItems }) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState(1);

  function addItem(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setItems([...items, { id: Date.now(), name: name.trim(), qty, bought: false }]);
    setName("");
    setQty(1);
  }

  const toggle = (id) => setItems(items.map((i) => (i.id === id ? { ...i, bought: !i.bought } : i)));
  const remove = (id) => setItems(items.filter((i) => i.id !== id));

  return (
    <section className="box">
      <h2>Minha lista</h2>
      <form onSubmit={addItem}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: arroz" />
        <input
          className="small"
          type="number"
          min="1"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value) || 1)}
        />
        <button className="btn">Adicionar</button>
      </form>
      <ul>
        {items.map((i) => (
          <ItemCard key={i.id} item={i} onToggle={toggle} onRemove={remove} />
        ))}
      </ul>
      {items.length === 0 && <p className="muted">Sua lista está vazia.</p>}
    </section>
  );
}
