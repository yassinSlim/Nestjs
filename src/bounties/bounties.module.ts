import { Module } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { BountiesController } from './bounties.controller';

@Module({
  providers: [BountiesService],
  controllers: [BountiesController]
})
export class BountiesModule {}
