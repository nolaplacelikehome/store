import { ApiProperty } from '@nestjs/swagger';
import { Product, Size, Color } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProductsEntity implements Product {
  constructor(partial: Partial<ProductsEntity>) {
    Object.assign(this, partial);
  }
  
	@ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  quantity: number;	

	@ApiProperty()
  size: Size[];

  @ApiProperty()
  color: Color[];
}