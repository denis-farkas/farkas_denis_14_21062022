import React from 'react';
import { useState } from 'react';
import useEmployee from '../../hooks/useEmployee';
import DatePicker from 'react-datepicker';
import States from '../../datas/states.js';
import Services from '../../datas/services.js';
import 'react-datepicker/dist/react-datepicker.css';

import './form.css';

const Form = () => {
  //Initialize fields of form in state

  const { employee, setEmployee, showAlert, alert, submitEmployee } =
    useEmployee();

  //validate fields in form and submit
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
  console.log(employee, 'form');
  const { msg } = alert;
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [selected, setSelected] = useState(States[0].name);
  const [select, setSelect] = useState(Services[0].name);

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
            <DatePicker
              className="form-control"
              selected={birthDate}
              onChange={(date) => {
                setBirthDate(date);
                setEmployee({
                  ...employee,
                  birthdate: date,
                });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startdate" className="form-label mt-4">
              Start date
            </label>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                setEmployee({
                  ...employee,
                  startdate: date,
                });
              }}
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
              <select
                className="form-control"
                value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                  setEmployee({ ...employee, state: e.target.value });
                }}
              >
                {States.map((option) => (
                  <option key={option.abbreviation} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
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
              <select
                className="form-control"
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                  setEmployee({ ...employee, department: e.target.value });
                }}
              >
                {Services.map((option) => (
                  <option key={option.abbreviation} value={option.name}>
                    {option.name}
                  </option>
                ))}
              </select>
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
