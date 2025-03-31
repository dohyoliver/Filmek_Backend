import { IsNotEmpty, IsString } from "class-validator";

export class CreateFilmekDto {
  @IsNotEmpty()
  @IsString()
  cim:string;
  @IsNotEmpty()
  @IsString()
  rendezo:string;
  @IsNotEmpty()
  @IsString()
  kiadasEve:string;
  @IsNotEmpty()
  @IsString()
  mufaj:string
}
