import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	name: string;

	@IsString()
	@ApiProperty({ required: false })
	@MaxLength(300)
	description: string;

	@IsString()
	@ApiProperty({ required: false })
	productImage: string;
}
