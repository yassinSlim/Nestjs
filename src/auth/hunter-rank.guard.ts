import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class HunterRankGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const hunterRank = request.headers['x-hunter-rank'];
    
    return hunterRank === 'Master';
  }
}