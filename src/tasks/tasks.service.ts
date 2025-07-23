import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { taskSchema } from './Schema/task.schema';
import { TaskInput } from './Inputs/task.input';

@Injectable()
export class TasksService {
    constructor(private readonly prisma:PrismaService) {}

    async findTaskByUserId(id:string) {
        return await this.prisma.tasks.findMany({
            where: {
                userId: id
            }
        })
    }

    async findAll() {
        return await this.prisma.tasks.findMany();
    }

    async createTask(data:TaskInput) {
        return await this.prisma.tasks.create({
            data: {...data}
        });
    }

    async updateTask(id:string,data:TaskInput) {
        return await this.prisma.tasks.update({
            where: {
                id: id
            },
            data: {...data}
        });
    }

    async deleteTask(id:string) {
        return await this.prisma.tasks.delete({
            where: {
                id: id
            }
        });
    }
}
