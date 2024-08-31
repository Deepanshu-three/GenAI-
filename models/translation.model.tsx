import { Schema, model, models } from 'mongoose';



const translationSchema = new Schema({
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

const Translation = models.Translation || model('Translation', translationSchema);
export default Translation;
