import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
}

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  name?: string;
  @IsEmail()
  email?: string;
}
