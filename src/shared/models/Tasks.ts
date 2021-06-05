import mongoose from 'mongoose';

const TasksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: new Date(),
  },
  week: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Tasks', TasksSchema);
