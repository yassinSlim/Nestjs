import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalsController } from './signals/signals.controller';
import { VaultService } from './vault/vault.service';
import { VaultController } from './vault/vault.controller';
import { SecurityModule } from './security/security.module';
import { BountiesModule } from './bounties/bounties.module';

@Module({
  imports: [SecurityModule, BountiesModule],
  controllers: [AppController, SignalsController, VaultController],
  providers: [AppService, VaultService],
})
export class AppModule {}
