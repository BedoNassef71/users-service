import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private configService: ConfigService
  ) {}

  @Get()
  getHello(): string {
    console.log(this.configService.get<string>('PG_USERNAME'));
    return this.appService.getHello();
  }
}
