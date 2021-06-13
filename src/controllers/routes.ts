import express from 'express';
import { getTasks } from './tasks/getTasks';
import { addTask } from './tasks/addTask';
import { updateTask } from './tasks/updateTask';
import { updateTimesheet } from './timesheet/updateTimesheet';
let router = express.Router();

router.get('/tasks/get', getTasks);
router.post('/tasks/add', addTask);
router.put('/tasks/update', updateTask);
router.post('/timesheet/update', updateTimesheet);

export default router;
