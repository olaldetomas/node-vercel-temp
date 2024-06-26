import { Request, Response, NextFunction } from 'express';
import { ApiError } from './apiError';
import { StatusCodes } from 'http-status-codes';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApiError) {
    return res.status(error.status).json({
      message: error.message,
      status: error.status,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error.message,
    status: StatusCodes.INTERNAL_SERVER_ERROR,
  });
};
