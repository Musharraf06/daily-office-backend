import express from 'express';
import { getTasks } from './tasks/getTasks';
import { addTask } from './tasks/addTask';
import { updateTask } from './tasks/updateTask';
let router = express.Router();

router.get('/tasks/get', getTasks);
router.post('/tasks/add', addTask);
router.put('/tasks/update', updateTask);

export default router;
