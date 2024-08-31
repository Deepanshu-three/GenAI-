import { Schema, model, models } from 'mongoose';



const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['instructor', 'student', 'admin'],
    default: 'instructor',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model('User', userSchema);
export default User;

