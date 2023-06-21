import { ApiProperty } from '@nestjs/swagger';
import { Product, ProductItem } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProductsEntity implements Product {
  constructor(partial: Partial<ProductsEntity>) {
    Object.assign(this, partial);
  }
  
	@ApiProperty()
  id: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  name: string;	

	@ApiProperty()
  description: string;

  @ApiProperty()
  productImage: string;
}