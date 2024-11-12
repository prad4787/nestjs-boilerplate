import { Module } from '@nestjs/common';
import { NestModule } from './server/nestjs/nest.module';
import { ControllerModule } from './controllers';

@Module({
  imports: [ControllerModule, NestModule],
  controllers: [],
  providers: [],
  exports: [ControllerModule, NestModule],
})
export class InfraModule {}
