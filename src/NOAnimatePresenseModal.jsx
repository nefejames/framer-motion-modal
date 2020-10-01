import React from "react";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ModalBox, CloseButton, ModalContent } from "./Styles";

const ModalVariants = {
  opened: {
    y: 50,
  },

  closed: { y: 0 },
};

const ModalContentVariants = {
  opened: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  closed: { y: -30, opacity: 0 },
};

const Modal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal && (
        <ModalBox
          variants={ModalVariants}
          animate={showModal ? "opened" : "closed"}
          initial={"closed"}
        >
          <CloseButton onClick={closeModal}>
            <CloseIcon />
          </CloseButton>
          <ModalContent
            variants={ModalContentVariants}
            animate={showModal ? "opened" : "closed"}
          >
            Modal content!!!!
          </ModalContent>
        </ModalBox>
      )}
    </>
  );
};

export default Modal;
