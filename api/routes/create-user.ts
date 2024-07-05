import { NextFunction, Request, Response } from 'express';
import { db } from '../db';
import { users } from '../db/schema';

export async function createUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const result = await db.insert(users).values({ name: 'Tomas' }).returning();
  res.send(result);
}
