import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { BaseException } from './infra/server/nestjs/exceptions/base.exception';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const logger = new Logger('BOOTSTRAP');
  const app = await NestFactory.create(AppModule);

  const config: ConfigService = app.get(ConfigService);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory(errors) {
        return new BaseException(errors);
      },
    }),
  );

  app.setGlobalPrefix("/api")

  const port = config.get<number>('PORT') || 8000;

  await app.listen(port, () => logger.log(`Listening on port ${port}`));
}
bootstrap();
