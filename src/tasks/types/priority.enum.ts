import { registerEnumType } from '@nestjs/graphql';

// Re-export for clarity
export enum PriorityType {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

// Register for GraphQL
registerEnumType(PriorityType, {
  name: 'priorityType', // this should match what's used in @Field(() => ...)
});
