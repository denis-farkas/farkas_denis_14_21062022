import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState();

  const url = process.env.REACT_APP_API_URL;

  const getEmployees = async () => {
    try {
      const { data } = await axios(url);
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider };

export default EmployeesContext;

EmployeesProvider.propType = {
  children: PropTypes.node.isRequired,
};
