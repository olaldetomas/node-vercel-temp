import { StatusCodes } from 'http-status-codes';

export class ApiError extends Error {
  stack?: string;
  status: number;

  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export class ValidationError extends ApiError {
  constructor(message) {
    super(StatusCodes.BAD_REQUEST, message);
  }
}
