import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateTorneoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsOptional()
  @IsNumber()
  precio?: number;
}
