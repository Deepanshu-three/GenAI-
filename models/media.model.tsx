import { Schema, model, models, Document, Model } from 'mongoose';

interface IMedia extends Document {
  content: Schema.Types.ObjectId;
  url: string;
  type: 'image' | 'animation';
  altText: string;
  createdAt: Date;
}

const mediaSchema = new Schema<IMedia>({
  content: {
    type: Schema.Types.ObjectId,
    ref: 'Content',
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['image', 'animation'],
    required: true,
  },
  altText: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Media: Model<IMedia> = models.Media || model<IMedia>('Media', mediaSchema);
export default Media;
