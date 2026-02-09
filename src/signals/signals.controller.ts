import { Controller, Post, Body } from '@nestjs/common';
import { CreateSignalDto } from './signal.dto';

@Controller('signals')
export class SignalsController {
  @Post('send')
  send(@Body() createSignalDto: CreateSignalDto): string {
    return `Signal received from ${createSignalDto.origin} on frequency ${createSignalDto.frequency}!`;
  }
}
