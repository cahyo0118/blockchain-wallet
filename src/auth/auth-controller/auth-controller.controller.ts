import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller('auth-controller')
export class AuthControllerController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
