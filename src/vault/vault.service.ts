import { Injectable } from '@nestjs/common';

@Injectable()
export class VaultService {
  private balance = 0;

  deposit(amount: number): string {
    this.balance += amount;
    return `Deposited ${amount} credits. New balance: ${this.balance}`;
  }

  getBalance(): number {
    return this.balance;
  }
}
