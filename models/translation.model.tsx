import { Schema, model, models, Document, Model } from 'mongoose';

interface ITranslation extends Document {
  content: Schema.Types.ObjectId;
  language: string;
  translatedText: string;
  createdAt: Date;
}

const translationSchema = new Schema<ITranslation>({
  content: {
    type: Schema.Types.ObjectId,
    ref: 'Content',
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  translatedText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Translation: Model<ITranslation> = models.Translation || model<ITranslation>('Translation', translationSchema);
export default Translation;
