import express from 'express';
import {
  listEmployees,
  createEmployee,
  oneEmployee,
  deleteEmployee,
  editEmployee,
} from '../controllers/employeeController.js';

const router = express.Router();

//CRUD employees Routes

router.route('/').get(listEmployees).post(createEmployee);

router.route('/:id').get(oneEmployee).put(editEmployee).delete(deleteEmployee);

export default router;
