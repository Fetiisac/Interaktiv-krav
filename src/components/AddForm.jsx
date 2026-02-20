import { useState } from "react";

function AddForm(props) {                //(React Forms, u.å.)
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  function submit(e) {
    e.preventDefault();

    if (name === "" && amount === "") {
      setError("Du må fylle inn varenavn og antall.");
      return;
    }

    if (name === "") {
      setError("Du mangler varenavn.");
      return;
    }

    if (amount === "") {
      setError("Du mangler antall.");
      return;
    }

    if (Number(amount) < 1) {
      setError("Antall må være minst 1.");
      return;
    }

    const newItem = {
      name: name,
      amount: Number(amount)
    };

    props.onAddItem(newItem);

    setName("");
    setAmount("");
    setError("");
  }

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Vare"
        value={name}
        onChange={function (e) {
          setName(e.target.value);
        }}
      />

      <input
        type="number"
        min="1"
        placeholder="Antall"
        value={amount}
        onChange={function (e) {
          setAmount(e.target.value);
        }}
      />

      <button type="submit">Legg til</button>

      {error !== "" && <p>{error}</p>}
    </form>
  );
}

export default AddForm;