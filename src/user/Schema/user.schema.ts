import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field(() => String)
  id: string;

  @Field(() => Int)
  age: number;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => Boolean)
  isActive: boolean;

}
