import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';
import { Trim } from '../../common/decorators/trim.decorator';

export class RegisterDto {
  @MinLength(2)
  @MaxLength(50)
  @Matches(/^[a-zA-Z]+$/)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsEmail()
  @IsNotEmpty()
  @Trim()
  email: string;

  @MinLength(8)
  @MaxLength(72)
  @IsString()
  @IsNotEmpty()
  @Trim()
  password: string;
}
