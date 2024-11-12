import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ErrorInterceptor, ResponseInterceptor } from './interceptor';
import { LoggerMiddleware } from './middleware';
import { AuthGuard } from './guard';
import { APP_GUARD } from '@nestjs/core';

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
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [],
})
export class NestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
