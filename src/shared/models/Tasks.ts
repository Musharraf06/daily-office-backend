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
  category: {
    type: String,
    required: true,
  },
  project: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  billable: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Tasks', TasksSchema);
