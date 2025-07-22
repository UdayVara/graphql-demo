import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserSchema } from './Schema/user.schema';
import { getUserArgument } from './Args/getUserArgs.arguments';
import { taskSchema } from 'src/tasks/Schema/task.schema';
import { addUserInput } from './Input/addUser.input';

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


  @Mutation(() => UserSchema,{ name: 'createUser' })
  async createUser(@Args("data") data:addUserInput) {
    return await this.userService.create(data);
  }

  @Mutation(() => UserSchema,{ name: 'updateUser' })
  async updateUser(@Args("id") id:string,@Args("data") data:addUserInput) {
    return await this.userService.update(id,data);
  }

  @Mutation(() => UserSchema,{ name: 'deleteUser' })
  async deleteUser(@Args("id") id:string) {
    return await this.userService.delete(id);
  }
}
