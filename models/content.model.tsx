import { Schema, model, models } from 'mongoose';

const contentSchema = new Schema({
  module: {
    type: Schema.Types.ObjectId,
    ref: 'Module',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  translation: {
    type: Schema.Types.ObjectId,
    ref: 'Translation',
  },
  media: [{
    type: Schema.Types.ObjectId,
    ref: 'Media',
  }],
  voiceover: {
    type: Schema.Types.ObjectId,
    ref: 'Voiceover',
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const Content = models.Content || model('Content', contentSchema);
export default Content;
