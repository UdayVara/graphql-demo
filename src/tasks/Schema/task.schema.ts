import { Field, ObjectType } from "@nestjs/graphql";
import { PriorityType } from "../types/priority.enum";
import { priorityType } from "generated/prisma";

@ObjectType('task')
export class taskSchema {
    @Field(() => String)
    id: string;

    @Field(() => String)
    title: string;

    @Field(() => String)
    description: string;

    @Field(() => String)
    userId:string;

    @Field(() => PriorityType)
    priority:priorityType;
}