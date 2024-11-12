import { BaseException } from '.';

export class UnauthorizeException extends BaseException {
  constructor(
    message: string = 'Unauthorize',
    statusCode: number = 401,
  ) {
    super([], message, statusCode);
  }
}
