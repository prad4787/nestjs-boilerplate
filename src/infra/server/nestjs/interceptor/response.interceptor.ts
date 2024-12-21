import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
  error: any;
  timestamp: Date;
  path: string;
  method: string;
  url: string;
}
@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<TemplateStringsArray, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response<T>>();
    console.log('ResponseInterceptor' , {
      statusCode: response.statusCode,
      message: response.message,
      data: response.data,
      error: response.error,
      timestamp: response.timestamp,
      path: response.path,
      method: response.method,
      url: response.url,
    });
    response.statusCode = 200;
    return next.handle();
  }
}
