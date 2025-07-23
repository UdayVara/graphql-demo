import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { taskSchema } from './Schema/task.schema';
import { TaskInput } from './Inputs/task.input';

@Resolver()
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Query(() => [taskSchema], { name: 'tasks' })
  async tasks() {
    return await this.tasksService.findAll();
  }

  @Query(() => [taskSchema])
  async tasksByUserId(@Args("id") id:string) {
    return await this.tasksService.findTaskByUserId(id);
  }

  @Mutation(() => taskSchema)
  async createTask(@Args("data") data:TaskInput) {
    return await this.tasksService.createTask(data);
  }

  @Mutation(() => taskSchema)
  async updateTask(@Args("id") id:string,@Args("data") data:TaskInput) {
    return await this.tasksService.updateTask(id,data);
  }

  @Mutation(() => taskSchema)
  async deleteTask(@Args("id") id:string) {
    return await this.tasksService.deleteTask(id);
  }
}
