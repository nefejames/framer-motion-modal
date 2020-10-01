import React from "react";
import { AnimatePresence } from "framer-motion";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ModalBox, CloseButton, ModalContent, Container } from "./Styles";

const Modal = ({ showModal, closeModal }) => {
  return (
    <Container>
      <AnimatePresence initial={false}>
        {showModal && (
          <ModalBox
            initial={{ opacity: 0, y: 60, scale: 0.3 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 300 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
          >
            <CloseButton onClick={closeModal}>
              <CloseIcon />
            </CloseButton>
            <ModalContent
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
            >
              Modal content!!!!
            </ModalContent>
          </ModalBox>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Modal;
