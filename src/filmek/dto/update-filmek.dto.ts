import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmekDto } from './create-filmek.dto';

export class UpdateFilmekDto extends PartialType(CreateFilmekDto) {
  
}
