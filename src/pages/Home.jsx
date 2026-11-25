import { Link } from "react-router-dom";

export default function Home({ items }) {
  const missing = items.filter((i) => !i.bought).length;

  return (
    <section className="box">
      <h1>Compras sem esquecer nada</h1>
      <p>Monte sua lista de compras e marque o que já foi para o carrinho.</p>
      <p>Faltam <strong>{missing}</strong> de <strong>{items.length}</strong> itens.</p>
      <Link to="/lista" className="btn">Abrir minha lista</Link>
    </section>
  );
}
