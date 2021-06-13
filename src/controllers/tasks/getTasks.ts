import { Request, Response } from 'express';
import Tasks from '../../shared/models/Tasks';

export const getTasks = (req: Request, res: Response) => {
  Tasks.find({}, (err, result) => {
    if (result) {
      res.status(200).send(result);
    } else if (err) {
      res.status(500).send('Something went wrong');
    }
  });
};
