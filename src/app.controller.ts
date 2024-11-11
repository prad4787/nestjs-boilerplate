import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @UsePipes(new ValidationPipe())
  @Post()
  getHello(@Body() req: TestDto): string {
    return this.appService.getHello();
  }
}
