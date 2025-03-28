import { IsEmail, IsString, MinLength, IsEnum } from "class-validator";

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: "The password must be at least 8 characters long" })
  password: string;

  @IsEnum(["Admin", "Client", "Tester", "Employee"], {
    message: "The role must be one of the following: Admin, Client, Tester, Employee",
  })
  role: string;
}
