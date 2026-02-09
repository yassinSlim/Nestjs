import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateSignalDto {
  @IsString()
  message: string;

  @IsInt()
  @Min(100)
  @Max(1000)
  frequency: number;

  @IsString()
  origin: string;
}
