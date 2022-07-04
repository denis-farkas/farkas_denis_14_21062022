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
        showAlert('Employee Created !');
      }
    } catch (error) {
      console.error(error);
      showAlert(error);
    }
  };

  useEffect(() => {
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
        setEmployees(data);
      } catch (error) {
        console.error(error);
      }
    };
    listEmployees();
  }, []);

  return (
    <EmployeesContext.Provider
      value={{ employees, showAlert, alert, submitEmployee }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider };

export default EmployeesContext;
