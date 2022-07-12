import React, { useEffect } from 'react';
import Form from '../components/Form';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal.jsx';
import useEmployee from '../hooks/useEmployee';

const Home = () => {
  const { isShowing, toggle, reload } = useModal();
  const { success } = useEmployee();

  useEffect(() => {
    if (success) {
      toggle();
      setTimeout(() => {
        reload();
      }, '3000');
    }
  }, [success]);

  return (
    <>
      <Form />
      <Modal isShowing={isShowing} hide={toggle && reload} />
    </>
  );
};

export default Home;
