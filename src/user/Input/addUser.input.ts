import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt,  IsString } from 'class-validator';

@InputType()
export class addUserInput {
  @Field(() => String)
  @IsString({ message: 'username must be a string' })
  username: string;

  @Field(() => String)
  @IsString({ message: 'email must be a string' })
  email: string;

  @Field(() => Int)
  @IsInt({ message: 'age must be a number' })
  age: number;
}
