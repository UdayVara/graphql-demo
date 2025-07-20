import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class getUserArgument{

    @Field(()=>String,{nullable:true})
    search:string;

    @Field(()=>Int)
    limit:number

    @Field(()=>Int)
    offset:number
}