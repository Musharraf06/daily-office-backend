import { Request, Response } from 'express';
import Tasks from '../../shared/models/Tasks';

interface dataPayload {
  _id: string;
  duration: string;
  title?: string;
  startTime?: string;
  endTime?: string;
}

export const updateTask = (req: Request, res: Response) => {
  const data: dataPayload = req.body.data;
  Tasks.findById(data._id).then((task: any) => {
    task.title = data.title;
    task.startTime = data.startTime;
    task.endTime = data.endTime;
    task.duration = data.duration;
    task
      .save()
      .then(() => {
        return res.status(200).send('Task successfully updated');
      })
      .catch(() => {
        return res.status(500).send('Something went wrong');
      });
  });
};
