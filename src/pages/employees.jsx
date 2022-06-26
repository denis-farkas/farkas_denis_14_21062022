import React from 'react';
import { EmployeesProvider } from '../context/EmployeesProvider';
const employees = () => {
  return (
    <EmployeesProvider>
      <div>
        <p>ok</p>
      </div>
    </EmployeesProvider>
  );
};

export default employees;
