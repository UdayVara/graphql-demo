import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { getUserArgument } from './Args/getUserArgs.arguments';
import { addUserInput } from './Input/addUser.input';

@Injectable()
export class UserService {
    constructor(private readonly prisma:PrismaService) {}

    async findAll(args:getUserArgument) {
        const where:any = {}

        if(args.search) {
            where.OR = [
                {
                    username: {
                        contains: args.search
                    }
                },
                {
                    email: {
                        contains: args.search
                    }
                }
            ]
        }
        return await this.prisma.user.findMany({
            where: where,
            skip: args.offset,
            take: args.limit
        });
    }

    async findOne(id:string){
        return await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
    }

    async create(data:addUserInput) {
        return await this.prisma.user.create({
            data: {...data,isActive:true}
        });
    }

    async update(id:string,data:addUserInput) {
        return await this.prisma.user.update({
            where: {
                id: id
            },
            data: {...data}
        });
    }

    async delete(id:string) {
        await this.prisma.tasks.deleteMany({
            where: {
                userId: id
            }
        })
        return await this.prisma.user.delete({
            where: {
                id: id
            }
        });
    }
    async findTaskByUserId(id:string) {
        return await this.prisma.tasks.findMany({
            where: {
                userId: id
            }
        })
    }
}
