import React, { useState } from "react";
import { ToggleButton, Container } from "./Styles";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <ToggleButton
        initial={{ x: -700 }}
        animate={{
          x: 0,
          transition: { duration: 0.5 },
        }}
        onClick={openModal}
      >
        open modal
      </ToggleButton>

      <Modal showModal={showModal} closeModal={closeModal} />
    </Container>
  );
}

export default App;
