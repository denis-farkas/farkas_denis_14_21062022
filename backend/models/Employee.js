import mongoose from 'mongoose';

const employeesSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },

    lastname: {
      type: String,
      trim: true,
    },

    birthdate: {
      type: Date,
      default: Date.now(),
    },

    startdate: {
      type: Date,
      default: Date.now(),
    },

    street: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    zipcode: {
      type: Number,
      trim: true,
    },

    department: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model('Employee', employeesSchema);
export default Employee;
