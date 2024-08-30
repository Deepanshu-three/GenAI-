import { Schema, model, models } from 'mongoose';

const voiceoverSchema = new Schema({
  content: {
    type: Schema.Types.ObjectId,
    ref: 'Content',
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  voiceUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Voiceover = models.Voiceover || model('Voiceover', voiceoverSchema);
export default Voiceover;
