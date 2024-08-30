import { Schema, model, models, Document, Model } from 'mongoose';

interface IVoiceover extends Document {
  content: Schema.Types.ObjectId;
  language: string;
  voiceUrl: string;
  createdAt: Date;
}

const voiceoverSchema = new Schema<IVoiceover>({
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

const Voiceover: Model<IVoiceover> = models.Voiceover || model<IVoiceover>('Voiceover', voiceoverSchema);
export default Voiceover;
