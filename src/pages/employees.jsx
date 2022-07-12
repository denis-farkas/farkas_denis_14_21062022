import React from 'react';
import Table from '../components/Table';
import useEmployees from '../hooks/useEmployees';
import { formatDate } from '../utils/formatDate';

const Employees = () => {
  const { employees, columns } = useEmployees();

  employees.forEach((element) => {
    element.birthdate = formatDate(element.birthdate);
    element.startdate = formatDate(element.startdate);
  });

  return (
    <>
      <div className="frame">
        <h1 className="large-title">Current Employees</h1>
      </div>
      <Table columns={columns} data={employees} />
    </>
  );
};

export default Employees;
