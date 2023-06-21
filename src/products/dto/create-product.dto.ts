import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	@ApiProperty()
	name: string;

	@IsString()
	@ApiProperty({ required: false })
	description: string;

	@IsString()
	@ApiProperty({ required: false })
	productImage: string;
}
