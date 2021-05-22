import mongoose from 'mongoose';

const TasksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Tasks", TasksSchema);
