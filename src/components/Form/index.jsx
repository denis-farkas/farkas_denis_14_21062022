import React from 'react';
import { useState } from 'react';
import useEmployees from '../../hooks/useEmployees';
import './form.css';

const Form = () => {
  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    birthdate: '',
    startdate: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    department: '',
  });
  const { showAlert, alert, submitEmployee } = useEmployees();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        employee.firstname,
        employee.lastname,
        employee.birthdate,
        employee.startdate,
        employee.street,
        employee.city,
        employee.state,
        employee.zipcode,
        employee.department,
      ].includes('')
    ) {
      showAlert({
        msg: 'Each field is mandatory',
        error: true,
      });
      return;
    }
    showAlert({ msg: '', error: false });

    submitEmployee(employee);
  };
  const { msg } = alert;
  return (
    <>
      <div className="container form">
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className={`${alert.error ? 'red-gradient' : ''}`}>{msg}</div>
          <div className="form-group">
            <label htmlFor="firstname" className="form-label mt-4">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              value={employee.firstname}
              onChange={(e) =>
                setEmployee({ ...employee, firstname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="form-label mt-4">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              value={employee.lastname}
              onChange={(e) =>
                setEmployee({ ...employee, lastname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate" className="form-label mt-4">
              Birth date
            </label>
            <input
              type="text"
              className="form-control"
              value={employee.birthdate}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  birthdate: e.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="startdate" className="form-label mt-4">
              Start date
            </label>
            <input
              type="text"
              className="form-control"
              value={employee.startdate}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  startdate: e.target.value,
                })
              }
            />
          </div>
          <fieldset className="address">
            <legend>Address</legend>
            <div className="form-group">
              <label htmlFor="street" className="form-label mt-4">
                Street
              </label>
              <input
                type="text"
                className="form-control"
                value={employee.street}
                onChange={(e) =>
                  setEmployee({ ...employee, street: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="city" className="form-label mt-4">
                City
              </label>
              <input
                type="text"
                className="form-control"
                value={employee.city}
                onChange={(e) =>
                  setEmployee({ ...employee, city: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="state" className="form-label mt-4">
                State
              </label>
              <input
                type="text"
                className="form-control"
                value={employee.state}
                onChange={(e) =>
                  setEmployee({ ...employee, state: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode" className="form-label mt-4">
                Zip code
              </label>
              <input
                type="text"
                className="form-control"
                value={employee.zipcode}
                onChange={(e) =>
                  setEmployee({ ...employee, zipcode: e.target.value })
                }
              />
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="department" className="form-label mt-4">
              Department
            </label>
            <select
              name="department"
              className="form-control"
              onChange={(e) =>
                setEmployee({ ...employee, department: e.target.value })
              }
            >
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>

          <div className="center">
            <button type="submit" className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
};

export default Form;
