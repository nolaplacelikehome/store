import { ApiProperty } from "@nestjs/swagger";
import { Size, Color } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	name: string;

	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	description: string;

	@IsNumber()
	@IsNotEmpty()
	@ApiProperty()
	quantity: number;

	@ApiProperty()
	size: Size[];

	@ApiProperty()
	color: Color[];
}
