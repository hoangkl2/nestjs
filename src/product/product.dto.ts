import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  description: string;

  @IsNotEmpty()
  price: number;
}
