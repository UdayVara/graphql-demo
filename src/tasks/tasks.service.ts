import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

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
}
