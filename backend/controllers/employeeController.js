import Employee from '../models/Employee.js';

const listEmployees = async (req, res) => {
  const employees = await Employee.find();

  res.json(employees);
};

const createEmployee = async (req, res) => {
  console.log(req.body);
  const data = new Employee(req.body);
  try {
    const employeeSaved = await data.save();
    res.json(employeeSaved);
  } catch (error) {
    console.error(error);
  }
};

const oneEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({ msg: 'no File' });
  }
  res.json(employee);
};

const editEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({ msg: 'no File' });
  }
  employee.firstname = req.body.firstname || employee.firstname;
  employee.lastname = req.body.lastname || employee.lastname;
  employee.birthdate = req.body.birthdate || employee.birthdate;
  employee.startdate = req.body.startdate || employee.startdate;
  employee.street = req.body.street || employee.street;
  employee.city = req.body.city || employee.city;
  employee.state = req.body.state || employee.state;
  employee.zipcode = req.body.zipcode || employee.zipcode;
  employee.department = req.body.department || employee.department;

  try {
    const employeeSaved = await employee.save();
    res.json(employeeSaved);
  } catch (error) {
    console.error(error);
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  if (!employee) {
    return res.status(404).json({ msg: 'no File' });
  }
  try {
    await employee.deleteOne();
    res.json({ msg: 'employee deleted' });
  } catch (error) {
    console.error(error);
  }
};

export {
  listEmployees,
  createEmployee,
  oneEmployee,
  editEmployee,
  deleteEmployee,
};
