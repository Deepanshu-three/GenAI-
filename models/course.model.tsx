import { Schema, model, models } from 'mongoose';




// Mongoose schema definition
const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructor: {
    type: Schema.Types.ObjectId,  // Correct usage of ObjectId type in schema
    ref: 'User',
    required: true,
  },
  modules: [{
    type: Schema.Types.ObjectId,  // Correct usage of ObjectId type in schema
    ref: 'Module',
  }],
  language: {
    type: String,
    default: 'en',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Course= models.Course || model('Course', courseSchema);
export default Course;
