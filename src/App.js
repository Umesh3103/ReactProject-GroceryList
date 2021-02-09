import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [value, setvalue] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editId, setEditId] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (!value) {
      showAlert(true, "Please enter value", "danger");
    } else if (value && isEditing) {
      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return { ...item, title: value };
          }
          return item;
        })
      );
      showAlert(true, "Value changed", "success");
      setvalue("");
      setEditId(null);
      setIsEditing(false);
    } else {
      showAlert(true, "Item added to the list", "success");
      const newItem = { id: new Date().getTime().toString(), title: value };
      setItems([...items, newItem]);
      setvalue("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };
  const handleDelete = (id) => {
    showAlert(true, "Item removed", "danger");
    const newItems = items.filter((newItem) => newItem.id !== id);
    setItems(newItems);
  };
  const handleEdit = (id) => {
    const specificItem = items.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setvalue(specificItem.title);
  };
  const clearItems = () => {
    showAlert(true, "Empty list", "danger");
    setItems([]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);
  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g. eggs"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          <button className="submit-btn" onClick={handleClick}>
            {isEditing ? "Edit" : "submit"}
          </button>
        </div>
      </form>
      {items.map((item) => {
        return (
          <article className="grocery-item" key={item.id}>
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => handleEdit(item.id)}>
                <FaEdit />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                <MdDelete />
              </button>
            </div>
          </article>
        );
      })}
      {items.length > 0 && (
        <button className="clear-btn" onClick={clearItems}>
          Clear Items
        </button>
      )}
    </section>
  );
}

export default App;
