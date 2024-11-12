import { ValidationError } from '@nestjs/common';
import { BaseException } from './base.exception';

export class ApiException extends BaseException {
  constructor(
    message: string = 'Something went wrong',
    statusCode: number = 400,
  ) {
    super([], message, statusCode);
  }
}
