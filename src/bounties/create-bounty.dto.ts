import { IsString, IsInt, Min, IsNotEmpty } from 'class-validator';

export class CreateBountyDto {
  @IsString()
  @IsNotEmpty()
  target: string;

  @IsInt()
  @Min(1000, { message: 'Reward must be at least 1,000 credits' })
  reward: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}