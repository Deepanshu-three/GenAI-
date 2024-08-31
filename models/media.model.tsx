import { Schema, model, models } from 'mongoose';



const mediaSchema = new Schema({
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

const Media = models.Media || model('Media', mediaSchema);
export default Media;
