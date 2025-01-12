import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthControllerController } from './auth/auth-controller/auth-controller.controller';
import { BalanceController } from './wallet/balance/balance.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
      envFilePath: '.env', // Path to the .env file
    }),
  ],
  controllers: [AppController, AuthControllerController, BalanceController],
  providers: [AppService],
})
export class AppModule {}
