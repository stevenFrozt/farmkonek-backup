import Button from "component/UI/Button/Button";
import Modal from "component/UI/Modal/Modal";
import useToggle from "hooks/useToggle";
import React from "react";

const ModalDesign = () => {
  const [show, toggle] = useToggle();
  const [showTitleModal, toggleTitleModal] = useToggle();
  return (
    <div>
      <h1 className="text-2xl">Modal</h1>
      <Button onClick={toggle}>Show Modal</Button>
      <Button onClick={toggleTitleModal}>Show Modal with Title</Button>
      {show && (
        <Modal isOpen={show} toggle={toggle}>
          hello
        </Modal>
      )}
      {showTitleModal && (
        <Modal
          isOpen={showTitleModal}
          toggle={toggleTitleModal}
          title="With Title"
          closeButton
        >
          hello
        </Modal>
      )}
    </div>
  );
};

export default ModalDesign;
