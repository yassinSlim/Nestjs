export interface Bounty {
  id: number;
  target: string;
  reward: number;
  status: 'Open' | 'Claimed' | 'Completed';
  description: string;
}