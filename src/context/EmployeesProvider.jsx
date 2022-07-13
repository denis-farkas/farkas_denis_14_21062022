import React from 'react';
import { useState, useEffect, createContext } from 'react';
import useEmployee from '../hooks/useEmployee';
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

  //success is the result of an register process(see: employeeProvider).
  const { success } = useEmployee();

  //when success is true, useEffect allow to refresh the list of employees
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
  }, [success]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        columns,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export { EmployeesProvider };

export default EmployeesContext;
