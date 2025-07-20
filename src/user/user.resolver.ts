import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserSchema } from './Schema/user.schema';
import { getUserArgument } from './Args/getUserArgs.arguments';
import { taskSchema } from 'src/tasks/Schema/task.schema';

@Resolver(() => UserSchema)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserSchema],{ name: 'users' })
  async users(@Args() getUserArgs:getUserArgument) {
    return await this.userService.findAll(getUserArgs);
  }

  @Query(() => UserSchema,{ name: 'userById' })
  async userById(@Args("id",{name:"id"}) id:string) {
    return await this.userService.findOne(id);
  }

  @ResolveField(() => [taskSchema],{ name: 'tasks' })
  async tasks(@Parent() user:UserSchema){
    return await this.userService.findTaskByUserId(user.id);
  }
}
