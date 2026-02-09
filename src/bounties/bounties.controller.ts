import { 
  Controller, 
  Get, 
  Post, 
  Patch, 
  Param, 
  Body, 
  UseGuards,
  ParseIntPipe 
} from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { CreateBountyDto } from './create-bounty.dto';
import { HunterRankGuard } from '../auth/hunter-rank.guard';
import type { Bounty } from './bounty.interface';
@Controller('bounties')
export class BountiesController {
  constructor(private readonly bountiesService: BountiesService) {}

  @Get()
  findAll(): Bounty[] {
    return this.bountiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Bounty {
    return this.bountiesService.findOne(id);
  }

  @Post()
  create(@Body() createBountyDto: CreateBountyDto): Bounty {
    return this.bountiesService.create(createBountyDto);
  }

  @Patch(':id/claim')
  @UseGuards(HunterRankGuard)
  claim(@Param('id', ParseIntPipe) id: number): Bounty {
    return this.bountiesService.claim(id);
  }
}