import { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [alert, setAlert] = useState([]);

  const showAlert = (alert) => {
    setAlert(alert);
  };

  const submitEmployee = async (employee) => {
    console.log(employee);
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
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const listEmployees = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get(
        'http://localhost:4000/api/employees',
        config
      );
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmployeesContext.Provider
      value={{ employees, showAlert, alert, submitEmployee, listEmployees }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider };

export default EmployeesContext;
