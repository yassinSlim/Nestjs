import { Injectable, NotFoundException } from '@nestjs/common';
import { Bounty } from './bounty.interface';
import { CreateBountyDto } from './create-bounty.dto';

@Injectable()
export class BountiesService {
  private bounties: Bounty[] = [
    {
      id: 1,
      target: 'Darth Malgus',
      reward: 50000,
      status: 'Open',
      description: 'Dangerous Sith Lord. Approach with extreme caution.',
    },
    {
      id: 2,
      target: 'Captain Vex',
      reward: 15000,
      status: 'Open',
      description: 'Space pirate wanted for raiding cargo ships.',
    },
  ];
  private currentId = 3;

  findAll(): Bounty[] {
    return this.bounties;
  }

  findOne(id: number): Bounty {
    const bounty = this.bounties.find((b) => b.id === id);
    if (!bounty) {
      throw new NotFoundException(`Bounty with ID ${id} not found`);
    }
    return bounty;
  }

  create(createBountyDto: CreateBountyDto): Bounty {
    const newBounty: Bounty = {
      id: this.currentId++,
      ...createBountyDto,
      status: 'Open',
    };
    this.bounties.push(newBounty);
    return newBounty;
  }

  updateStatus(id: number, status: 'Open' | 'Claimed' | 'Completed'): Bounty {
    const bounty = this.findOne(id);
    bounty.status = status;
    return bounty;
  }

  claim(id: number): Bounty {
    return this.updateStatus(id, 'Claimed');
  }
}