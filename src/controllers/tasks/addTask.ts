import { Request, Response } from 'express';
import Tasks from '../../shared/models/Tasks';

export const addTask = (req: Request, res: Response) => {
  const data: object = req.body.data;

  const newTask = new Tasks(data);
  newTask.save((err: object) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send("Task successfully added");
    }
  });
};
