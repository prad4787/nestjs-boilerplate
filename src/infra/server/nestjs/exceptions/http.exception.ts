
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, InternalServerErrorException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { Request, Response } from 'express';
import { BaseException } from './base.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    if(exception instanceof BaseException) {
      return httpAdapter.reply(ctx.getResponse(), exception.getResponse(), exception.getStatus());
    }

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      statusCode: httpStatus,
      message: exception instanceof HttpException ? exception.message : 'Internal Server Error',
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      exception: exception instanceof HttpException ? exception : null,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}


