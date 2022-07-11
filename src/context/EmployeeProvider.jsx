import React from 'react';
import { useState, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    birthdate: '',
    startdate: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    department: '',
  });

  const [alert, setAlert] = useState([]);
  const [success, setSuccess] = useState(false);
  const Navigate = useNavigate();

  const showAlert = (alert) => {
    setAlert(alert);
  };

  const submitEmployee = async (employee) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        'http://localhost:4000/api/employees',
        employee,
        config
      );
      if (data !== null) {
        setSuccess(true);
        Navigate('/');
      }
    } catch (error) {
      console.error(error);
      showAlert(error);
    }
  };
  return (
    <EmployeeContext.Provider
      value={{
        employee,
        showAlert,
        alert,
        submitEmployee,
        success,
        setEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeProvider };

export default EmployeeContext;
