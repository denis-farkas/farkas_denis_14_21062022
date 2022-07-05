import React, { useEffect } from 'react';
import Form from '../components/Form';
import Modal from '../components/Modal';
import useModal from '../hooks/useModal.jsx';
import useEmployees from '../hooks/useEmployees';

const Home = () => {
  const { isShowing, toggle } = useModal();
  const { success } = useEmployees();

  useEffect(() => {
    if (success) {
      toggle();
    }
  }, []);

  return (
    <div>
      <Form />
      <Modal isShowing={isShowing} hide={toggle} />
    </div>
  );
};

export default Home;
