import React, { useRef, useEffect, useState } from 'react';
import styles from './dialogModal.module.css';

//In React, children is a special prop used to render whatever is nested inside your component when it's used.
const DialogModal = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
  const modalRef = useRef(null);
  const [isModalVisible, setModalVisible] = useState(isOpen);

 
  
useEffect(() => {
  console.log("isOpen prop changed:", isOpen);
    setModalVisible(isOpen);
  }, [isOpen]);

//This keeps the internal isModalOpen state in sync with the parent component’s isOpen prop.
// Anytime isOpen changes, isModalOpen updates too.

useEffect(() => {
  if (modalRef.current) {
    // console.log("Modal visibility changed:", isModalVisible);
    isModalVisible ? modalRef.current.showModal() : modalRef.current.close();
  }
}, [isModalVisible]);


  //Once isModalOpen changes, this effect checks the ref and either opens or closes the modal.

 
const handleClose = () => {
  // console.log("Close button clicked");
    onClose?.();
    setModalVisible(false);
  }; // they control the visibility of the modal directly.

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown}className={styles.modal} aria-modal="true" role="dialog">
      
      {hasCloseBtn && (
       
       <button className={styles.modalCloseBtn} onClick={handleClose} aria-label="Close">×</button> )}

      {children}
    </dialog>
  );
};

export default DialogModal;

