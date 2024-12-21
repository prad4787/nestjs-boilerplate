import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('ErrorInterceptor');
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    let customResponse = {
      statusCode: response.statusCode || 500,
      message: response.message || 'Something went wrong',
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
      method: ctx.getRequest().method,
      url: ctx.getRequest().url,
      error: response.error,
      data: response.data,
    };
    response.status(customResponse.statusCode).json(customResponse);
    return next.handle();
  }
}
