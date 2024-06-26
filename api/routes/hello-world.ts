import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../middleware/apiError';

export async function helloWorld(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  res.send('Hello World');
}
