import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import XLSX from 'xlsx';

export const updateTimesheet = (req: Request, res: Response) => {
  const { sheetName, file, data } = req.body;
  if (fs.existsSync(file)) {
    const wb = XLSX.readFile(file);
    const ws = XLSX.utils.json_to_sheet(data);
    // XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${file.split('/')[file.split('/').length - 1]}(100)`);
  }
};
