import React from 'react';
import useEmployees from '../../hooks/useEmployees';

const Table = () => {
  const { employees } = useEmployees();
  console.log(employees);
  return <div></div>;
};

export default Table;
