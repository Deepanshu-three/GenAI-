import { Schema, model, models, Document, Model } from 'mongoose';

interface IModule extends Document {
  title: string;
  course: Schema.Types.ObjectId;
  content: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const moduleSchema = new Schema<IModule>({
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

const Module: Model<IModule> = models.Module || model<IModule>('Module', moduleSchema);
export default Module;
