import { IsNotEmpty, IsString } from "class-validator";

 export class CreateUserDto{
   @IsString({message: "name must be a string"})
   @IsNotEmpty({message: "name is required"})
    name: string;

    @IsString({message: "email must be a string"})
    @IsNotEmpty({message: "email is required"})
    email: string;

    @IsString({message: "phone must be a string"})
    phone: string;

    @IsString({message: "cpf must be a string"})
    @IsNotEmpty({message: "cpf is required"})
    cpf: string;

    @IsString({message: "password must be a string"}) 
    @IsNotEmpty({message: "password is required"})
    password: string;
 }