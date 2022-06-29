import React from 'react';
import useEmployees from '../hooks/useEmployees';

const ListEmployees = () => {
  const { employees } = useEmployees();
  console.log(employees);
  return (
    <div>
      <p>ok</p>
    </div>
  );
};

export default ListEmployees;
