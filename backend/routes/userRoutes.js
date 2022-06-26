import express from 'express';
import {
  listUsers,
  createUser,
  oneUser,
  deleteUser,
  editUser,
} from '../controllers/userController.js';

const router = express.Router();

//Create, Read Users

router.route('/').get(listUsers).post(createUser);

router.route('/:id').get(oneUser).put(editUser).delete(deleteUser);

export default router;
