import {
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  MinLength,
  Validate,
} from 'class-validator';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: false })
export class BufferIsBuffer implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    return Buffer.isBuffer(value);
  }

  defaultMessage(args: ValidationArguments) {
    return 'The value must be a Buffer';
  }
}

export class CreateUserDto {
  @IsString()
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  senha: string;

  @IsString()
  departamento: string;

  @IsString()
  curso: string;

  @IsOptional()
  @Validate(BufferIsBuffer)
  foto?: Buffer;

  @IsOptional()
  @IsDateString()
  createdAt: string;

  @IsOptional()
  @IsDateString()
  updatedAt: string;
}
