import { Schema, model, models } from 'mongoose';

const moduleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  content: {
    type: Schema.Types.ObjectId,
    ref: 'Content',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Module = models.Module || model('Module', moduleSchema);
export default Module;
