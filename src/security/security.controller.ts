import { Controller, Get, UseGuards } from '@nestjs/common';
import { ClearanceGuard } from '../auth/clearance.guard';

@Controller('security')
export class SecurityController {
  @Get('data')
  @UseGuards(ClearanceGuard)
  getData(): string {
    return 'Sensitive Starship Data retrieved.';
  }
}