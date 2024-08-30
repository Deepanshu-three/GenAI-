import { Schema, model, models, Document, Model, Types } from 'mongoose';

// Interface for the Course document
interface ICourse extends Document {
  title: string;
  description: string;
  instructor?: Types.ObjectId ;  // Correct typing for ObjectId
  modules: Types.ObjectId[];   // Array of ObjectId references to Module documents
  language: string;
  createdAt: Date;
  updatedAt: Date;
}


// Mongoose schema definition
const courseSchema = new Schema<ICourse>({
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

const Course: Model<ICourse> = models.Course || model<ICourse>('Course', courseSchema);
export default Course;
