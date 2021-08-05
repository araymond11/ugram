import {
  IsDateString,
  IsEmail,
  IsNumberString,
  IsOptional,
  IsUrl,
  Length,
  ValidateIf,
} from 'class-validator';
import { IsNotEmptyOrWhitespace } from 'src/validators/CustomClassValidators';

export class UpdateUserDto {
  @IsOptional()
  @IsUrl()
  profilePictureUrl: string;

  @IsOptional()
  @IsNotEmptyOrWhitespace({
    message: 'The username should contain at least one character',
  })
  username: string;

  @IsOptional()
  @IsNotEmptyOrWhitespace({
    message: 'The name should contain at least one character',
  })
  name: string;

  @IsOptional()
  @IsEmail(undefined, { message: 'The provided email is invalid' })
  email: string;

  @ValidateIf((m) => m.phoneNumber && m.phoneNumber !== '')
  @IsNumberString(undefined, {
    message: 'The phone number should be a numeric string',
  })
  @Length(10, 11, {
    message: 'The phone number should contain 10 or 11 numbers',
  })
  phoneNumber: string;

  @IsOptional()
  @IsDateString(undefined, {
    message: 'The provided registration date is invalid',
  })
  registrationDate: Date;
}
