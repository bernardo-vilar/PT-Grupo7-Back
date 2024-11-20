import { IsString, IsEmail, IsOptional, IsDateString, Validate } from "class-validator";

import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ async: false })
export class BufferIsBuffer implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return Buffer.isBuffer(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'The value must be a Buffer';
  }
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  nome: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  departamento: string;

  @IsOptional()
  @IsString()
  curso: string;

  @IsOptional()
  @Validate(BufferIsBuffer)
  foto?: Buffer;

  @IsOptional()
  @IsDateString()
  createdAt?: string;

  @IsOptional()
  @IsDateString()
  updatedAt?: string;
}
