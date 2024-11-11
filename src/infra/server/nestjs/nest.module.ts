import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ResponseInterceptor } from './interceptor/response.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ResponseInterceptor,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ErrorInterceptor,
    },
  ],
})
export class NestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
