import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setMessage("");
  }

  return (
    <section className="box">
      <h2>Contato</h2>
      {sent && <p className="success">Mensagem enviada!</p>}
      <form className="col" onSubmit={submit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
        <textarea rows="4" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem" />
        <button className="btn">Enviar</button>
      </form>
    </section>
  );
}
