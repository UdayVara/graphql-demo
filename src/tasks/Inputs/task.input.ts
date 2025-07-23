import { Field, InputType } from '@nestjs/graphql';
import { PriorityType } from '../types/priority.enum';

@InputType()
export class TaskInput {
  @Field(() => String)
  title: string;
  @Field(() => String)
  description: string;
  @Field(() => PriorityType)
  priority: PriorityType;
  @Field(() => String)
  userId: string;
}
