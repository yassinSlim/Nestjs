import { Controller, Post, Get, Body } from '@nestjs/common';
import { VaultService } from './vault.service';

@Controller('vault')
export class VaultController {
  constructor(private readonly vaultService: VaultService) {}

  @Post('deposit')
  deposit(@Body('amount') amount: number): string {
    return this.vaultService.deposit(amount);
  }

  @Get('balance')
  getBalance(): number {
    return this.vaultService.getBalance();
  }
}
