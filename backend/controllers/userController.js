import User from '../models/User.js';

const listUsers = async (res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    console.error(error);
  }
};

const oneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ msg: 'no File' });
  }
  res.json(user);
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ msg: 'no File' });
  }
  user.firstname = req.body.firstname || user.firstname;
  user.lastname = req.body.lastname || user.lastname;
  user.birthdate = req.body.birthdate || user.birthdate;
  user.startdate = req.body.startdate || user.startdate;
  user.street = req.body.street || user.street;
  user.city = req.body.city || user.city;
  user.state = req.body.state || user.state;
  user.zipcode = req.body.zipcode || user.zipcode;
  user.department = req.body.department || user.department;

  try {
    const userSaved = await user.save();
    res.json(userSaved);
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ msg: 'no File' });
  }
  try {
    await user.deleteOne();
    res.json({ msg: 'user deleted' });
  } catch (error) {
    console.error(error);
  }
};

export { listUsers, createUser, oneUser, editUser, deleteUser };
