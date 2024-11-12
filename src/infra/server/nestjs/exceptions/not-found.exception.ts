import { BaseException } from '.';

export class NotFoundException extends BaseException {
  constructor(message: string = 'Item not found', statusCode: number = 404) {
    super([], message, statusCode);
  }
}
