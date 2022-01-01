import React, { useState } from "react";
import "./Card.css";
import Modal from "../Modal/Modal";

function Card({ contact, deleteContact, updateContact }) {
  const { name, number } = contact;
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="card">
        <div className="card__content">
          <p>Name: {name}</p>
          <p>Phone number: {number}</p>
        </div>
        <div className="card__actions">
          <button className="btn view-btn" onClick={handleClickOpen}>
            Edit
          </button>
        </div>
      </div>
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          contact={contact}
          deleteContact={deleteContact}
          updateContact={updateContact}
        />
      )}
    </>
  );
}

export default Card;
