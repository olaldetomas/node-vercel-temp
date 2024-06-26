import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../middleware/apiError';

export async function helloWorld(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  return next(new ApiError('This is an error', 500));
  res.send('Hello World');
}
