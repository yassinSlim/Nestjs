import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ClearanceGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    
    const clearanceLevel = request.headers['x-clearance-level'];
    
    if (clearanceLevel === 'TOP_SECRET') {
      return true;
    }
    
    return false;
  }
}