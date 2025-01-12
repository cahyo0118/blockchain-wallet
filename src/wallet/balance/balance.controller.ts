import { Controller, Get } from '@nestjs/common';
import { ethers } from 'ethers';

@Controller('balance')
export class BalanceController {
  @Get()
  async getBalanceByUserId(): Promise<any> {
    const provider = new ethers.JsonRpcProvider(
      process.env.INFURA_PROVIDER_URL,
    );

    const balance = await provider.getBalance(
      '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e',
    );

    return {
      success: true,
      data: {
        balance: balance,
      },
    };
  }
}
