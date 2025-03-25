import { IsString, IsEmail, IsEnum, IsBoolean, IsOptional, IsArray } from 'class-validator';

export enum UserRole {
  Admin = 'Admin',
  Client = 'Client',
  Tester = 'Tester',
  Employee = 'Employee',
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsEnum(UserRole, { message: 'role must be one of Admin, Client, Tester, or Employee' })
  role: UserRole;

  @IsBoolean()
  @IsOptional()
  test_subject_status?: boolean;

  @IsString()
  @IsOptional()
  allergic_reactions?: string;

  @IsArray()
  @IsOptional()
  purchase_history?: string[];
}
