import { NextFunction, Request, Response } from 'express';

export async function getUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  res.send('create user');
}
