import React from 'react';
import Table, { SelectColumnFilter } from '../components/Table';
import useEmployees from '../hooks/useEmployees';
import { formatDate } from '../utils/formatDate';

const Employees = () => {
  const { employees, columns } = useEmployees();

  employees.forEach((element) => {
    element.birthdate = formatDate(element.birthdate);
    element.startdate = formatDate(element.startdate);
  });

  return (
    <div>
      <Table columns={columns} data={employees} />
    </div>
  );
};

export default Employees;
