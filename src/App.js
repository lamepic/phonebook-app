import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && number) {
      setId(id + 1);
      const contact = {
        id,
        name,
        number,
      };
      setContacts([...contacts, contact]);
      setName("");
      setNumber("");
    } else {
      setError(true);
    }
  };

  const updateContact = (contact) => {
    const newContact = contacts.filter((contct) => contct.id !== contact.id);
    setContacts([...newContact, contact]);
  };

  const deleteContact = (id) => {
    const newContact = contacts.filter((contct) => contct.id !== id);
    setContacts([...newContact]);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Phonebook Application</h1>
      </div>

      <div className="container">
        <div className="form-group">
          <form>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError(false);
              }}
            />
            <input
              type="text"
              placeholder="Number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                setError(false);
              }}
            />
            <button className="btn add-btn" onClick={(e) => handleSubmit(e)}>
              Add
            </button>
          </form>
          {error && <p className="error">Fields cannot be blank</p>}
        </div>

        <div className="contact__list">
          {contacts.map((contact) => {
            return (
              <Card
                contact={contact}
                deleteContact={deleteContact}
                key={contact._id}
                updateContact={updateContact}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
