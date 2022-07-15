import React from 'react';
import Table from '../components/Table';
import useEmployees from '../hooks/useEmployees';

const Employees = () => {
  const { employees, columns } = useEmployees();

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
