import React from 'react';
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Firstname',
        accessor: 'firstname',
      },
      {
        Header: 'Lastname',
        accessor: 'lastname',
      },
      {
        Header: 'Birthdate',
        accessor: 'birthdate',
      },
      {
        Header: 'Startdate',
        accessor: 'startdate',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip code',
        accessor: 'zipcode',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
    ],
    []
  );

  const [employees, setEmployees] = useState([]);
  const [alert, setAlert] = useState([]);
  const [success, setSuccess] = useState(false);

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
      value={{ employees, showAlert, alert, submitEmployee, success, columns }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider };

export default EmployeesContext;
