import { Schema, model, models, Document, Model } from 'mongoose';

interface IContent extends Document {
  module: Schema.Types.ObjectId;
  text: string;
  translation: Schema.Types.ObjectId;
  media: Schema.Types.ObjectId[];
  voiceover: Schema.Types.ObjectId;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

const contentSchema = new Schema<IContent>({
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

const Content: Model<IContent> = models.Content || model<IContent>('Content', contentSchema);
export default Content;
