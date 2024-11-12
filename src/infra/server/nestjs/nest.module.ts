import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ErrorInterceptor, ResponseInterceptor } from './interceptor';
import { LoggerMiddleware } from './middleware';

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
