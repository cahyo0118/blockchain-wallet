import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthControllerController } from './auth/auth-controller/auth-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthControllerController],
  providers: [AppService],
})
export class AppModule {}
